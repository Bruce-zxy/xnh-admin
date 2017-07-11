import React,{ Component } from 'react';
import ReactEcharts from '../lib';
import echarts from 'echarts';

class LineAndHistogram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option: this.getOtion(),
        };
    }

    getOtion() {
        var option = {
            animation: true,
            animationDuration: 1000,
            animationEasing: 'cubicInOut',
            animationDurationUpdate: 1000,
            animationEasingUpdate: 'cubicInOut',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            legend: {
                data:['蒸发量','降水量','平均温度'],
                textStyle: {
                    color: '#BFDAED'
                },
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    nameTextStyle: {
                        color: '#BFDAED'
                    },
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '水量',
                    min: 0,
                    max: 250,
                    interval: 50,
                    nameTextStyle: {
                        color: '#BFDAED'
                    },
                    axisLabel: {
                        formatter: '{value} ml',
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                {
                    type: 'value',
                    name: '温度',
                    min: 0,
                    max: 25,
                    interval: 5,
                    nameTextStyle: {
                        color: '#BFDAED'
                    },
                    axisLabel: {
                        formatter: '{value} °C',
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            series: [
                {
                    name:'蒸发量',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                },
                {
                    name:'降水量',
                    type:'bar',
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                {
                    name:'平均温度',
                    type:'line',
                    yAxisIndex: 1,
                    data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                }
            ]
        };
        return option;
    }
    render() {
        return (
            <div className='examples'>
                <div className='parent'>
                  <ReactEcharts
                    option={this.getOtion()}
                    style={{height: '400px', width: '550px'}}
                    className='react_for_echarts' />
                </div>
            </div>
        );
    }
};

export default LineAndHistogram;
