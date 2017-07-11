import React, { Component } from "react";
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
        this.changeMutiData(2016,2017,2018)
    }
    changeMutiData() {
        var resMutiOption = this.state.option;
        // data是一个数组，需要事先声明
        resMutiOption.legend.data = [];
        // 改变多个数据，并累加
        for(let i = 0,len = arguments.length; i < len; i++) {
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
                    resMutiOption.series[i].label = {
                        normal: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                            }
                        }
                    }
                    // 改变状态
                    this.setState({ option: resMutiOption });
                    console.log(this.state.option);
                });
        }
    }
    getOtion() {
        const option = {
            backgroundColor: '#122E41',
            // 单个市hover产生的悬浮框
            tooltip: {
                trigger: 'item'
            },
            // 左侧年份选项
            legend: {
                orient: 'horizontal',
                top: 'top',
                data:[],
                textStyle: {
                    color: '#BFDAED'
                },
            },
            // 图例度量尺
            visualMap: {
                min: 0,
                max: 2500,
                right: 'right',
                top: 'bottom',
                text: ['高','低'],
                calculable: true,
                textStyle: {
                    color: '#BFDAED'
                },
            },
            // 匹配地图属性
            geo: {
                type: 'map',
                map: '江西',
                itemStyle: {
                    normal: {
                        color: '#323C47'
                    }
                }
            },
            // 给地图上的属性和数据赋值
            series: [
                {
                    type: 'map',
                    mapType: '江西',
                }
            ]
        };
        return option;
    }
    render() {
        return (
            <div className='examples'>
                <div className='parent' style={{background:'#404A59',}}>
                    <ReactEcharts
                        option={this.state.option}
                        style={{height: '400px', width: '300px'}}
                        className='react_for_echarts' />
                </div>
            </div>
        );
    }
}

export default SalesVolume;
