import React, { Component } from "react";
import RaisedButton from 'material-ui/RaisedButton';
import ReactEcharts from '../lib';
import axios from 'axios';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

require("echarts/map/js/province/jiangxi.js");

class SalesVolume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option: this.getOtion(),
        };
    }
    componentWillMount() {
        // 初始化数据
        this.changeData(2016)
    }
    changeData(id) {
        // 改变单个数据
        axios.get('http://localhost:3000/'+id)
            .then(res => {
                var resOption = this.state.option;
                // 给series赋值
                resOption.series[0].name = resOption.legend.data[0] = res.data.name;
                resOption.series[0].data = res.data.data;
                this.setState({ option: resOption });
            })
    }
    changeMutiData() {
        var resMutiOption = this.state.option;
        // data是一个数组，需要事先声明
        resMutiOption.legend.data = [];
        // 改变多个数据，并累加
        for(let i = 0,len = arguments.length; i < len-1; i++) {
            axios.get('http://localhost:3000/'+arguments[i])
                .then(res => {
                    // 把获取到的data push到option的data中
                    resMutiOption.legend.data.push(res.data.name);
                    // series初始是只有一个对象的数组
                    resMutiOption.series[i] = new Object();
                    // 给series赋值
                    resMutiOption.series[i].name = res.data.name;
                    resMutiOption.series[i].data = res.data.data;
                    resMutiOption.series[i].type = 'map';
                    resMutiOption.series[i].mapType = '江西';
                    // 改变状态
                    this.setState({ option: resMutiOption });
                });
        }
    }
    getOtion() {
        const option = {
            // 图表标题
            title: {
                text: '江西省年平均降雨量（单位：mm）',
                subtext: '纯属虚构',
                left: 'center'
            },
            // 单个市hover产生的悬浮框
            tooltip: {
                trigger: 'item'
            },
            // 左侧年份选项
            legend: {
                orient: 'vertical',
                right: 'right',
                bottom: 50,
                data:['2016']
            },
            // 图例度量尺
            visualMap: {
                min: 0,
                max: 2500,
                left: 'left',
                top: 'bottom',
                text: ['高','低'],
                calculable: true
            },
            // 右侧功能工具箱
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            // 匹配地图属性
            geo: {
                type: 'map',
                map: '江西',
                itemStyle: {
                    normal: {
                        color: '#fff'
                    }
                }
            },
            // 给地图上的属性和数据赋值
            series: [
                {
                    type: 'map',
                    mapType: '江西',
                    roam: false,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                }
            ]
        };
        return option;
    }
    render() {
        console.log('this is salesVolume');
        return (
            <div className='examples'>
                <div className='parent' style={{background:'#eee',}}>
                    <ReactEcharts
                        option={this.state.option}
                        style={{height: '500px', width: '100%'}}
                        className='react_for_echarts' />
                    <br/>
                </div>
                <RaisedButton label="2016年" onTouchTap={this.changeData.bind(this,2016)} />
                <RaisedButton label="2017年" primary={true} onTouchTap={this.changeData.bind(this,2017)} />
                <RaisedButton label="2018年" secondary={true} onTouchTap={this.changeData.bind(this,2018)} />
                <RaisedButton label="2016-2018年" onTouchTap={this.changeMutiData.bind(this,2016,2017,2018)} />
            </div>
        );
    }
}

export default SalesVolume;