import React, { Component } from 'react';
import ReactEcharts from '../lib';
import echarts from 'echarts';

require("echarts/map/js/china.js");
require("echarts/map/js/province/jiangxi.js");

const geoCoordMap = {
    '南昌': [115.89,28.68],
    '新建': [115.8,28.69],
    '景德镇': [117.22,29.3],
    '萍乡': [113.85,27.6],
    '九江': [115.97,29.71],
    '彭泽': [116.56,29.9],
    '湖口': [116.23,29.75],
    '都昌': [116.19,29.29],
    '星子': [116.03,29.47],
    '永修': [115.82,29.04],
    '德安': [115.75,29.33],
    '瑞昌': [115.65,29.68],
    '武宁': [115.09,29.26],
    '修永': [114.55,29.04],
    '上饶': [117.97,28.47],
    '婺源': [117.83,29.25],
    '德兴': [117.58,28.96],
    '玉山': [118.25,28.68],
    '广丰': [118.2,28.45],
    '铅山': [117.71,28.32],
    '横峰': [117.62,28.42],
    '鹰潭': [117.02,28.23],
    '贵溪': [117.2,28.3],
    '余江': [116.82,28.22],
    '万年': [117.08,28.7],
    '乐平': [117.12,28.97],
    '波阳': [116.68,29.01],
    '于干': [116.69,28.7],
    '弋阳': [117.43,28.42],
    '宜春': [114.38,27.81],
    '万载': [114.44,28.11],
    '铜鼓': [114.37,28.53],
    '宜丰': [114.78,28.4],
    '上高': [114.91,28.25],
    '安义': [115.55,28.86],
    '奉新': [115.38,28.71],
    '高安': [115.38,28.42],
    '丰城': [115.7,28.19],
    '清江': [115.54,28.07],
    '新余': [114.92,27.81],
    '分宜': [114.68,27.82],
    '靖安': [115.37,28.88],
    '抚州': [116.34,28.02],
    '临川': [116.29,27.95],
    '金溪': [116.77,27.92],
    '资溪': [117.06,27.7],
    '黎川': [116.91,27.3],
    '南丰': [116.52,27.22],
    '南城': [116.62,27.56],
    '宜黄': [116.2,27.55],
    '崇仁': [116.05,27.75],
    '乐安': [115.82,27.44],
    '东乡': [116.61,28.23],
    '进贤': [116.26,28.37],
    '吉安': [114.97,27.12],
    '新干': [115.4,27.77],
    '峡江': [115.15,27.56],
    '吉水': [115.14,27.22],
    '永丰': [115.42,27.33],
    '泰和': [114.88,26.81],
    '万安': [114.77,26.47],
    '遂川': [114.5,26.33],
    '宁冈': [113.97,26.71],
    '永新': [114.23,26.96],
    '莲花': [113.94,27.14],
    '安福': [114.62,27.39],
    '井冈山': [114.17,26.57],
    '赣州': [114.92,25.85],
    '广昌': [116.32,26.84],
    '石城': [116.32,26.34],
    '宁都': [116.03,26.46],
    '兴国': [115.33,26.32],
    '于都': [115.39,25.96],
    '瑞金': [116.02,25.89],
    '会昌': [115.79,25.58],
    '安远': [115.41,25.15],
    '寻乌': [115.64,24.96],
    '定南': [115.02,24.7],
    '龙南': [114.79,24.91],
    '全南': [114.53,24.76],
    '信丰': [114.94,25.39],
    '赣县': [114.02,25.85],
    '南康': [114.75,25.66],
    '上犹': [114.55,25.8],
    '崇义': [114.31,25.69],
    '大余': [114.36,25.39],
    '上海': [121.4648,31.2891],
    '东莞': [113.8953,22.901],
    '东营': [118.7073,37.5513],
    '中山': [113.4229,22.478],
    '临汾': [111.4783,36.1615],
    '临沂': [118.3118,35.2936],
    '丹东': [124.541,40.4242],
    '丽水': [119.5642,28.1854],
    '乌鲁木齐': [87.9236,43.5883],
    '佛山': [112.8955,23.1097],
    '保定': [115.0488,39.0948],
    '兰州': [103.5901,36.3043],
    '包头': [110.3467,41.4899],
    '北京': [116.4551,40.2539],
    '北海': [109.314,21.6211],
    '南京': [118.8062,31.9208],
    '南宁': [108.479,23.1152],
    '南昌': [116.0046,28.6633],
    '南通': [121.1023,32.1625],
    '厦门': [118.1689,24.6478],
    '台州': [121.1353,28.6688],
    '合肥': [117.29,32.0581],
    '呼和浩特': [111.4124,40.4901],
    '咸阳': [108.4131,34.8706],
    '哈尔滨': [127.9688,45.368],
    '唐山': [118.4766,39.6826],
    '嘉兴': [120.9155,30.6354],
    '大同': [113.7854,39.8035],
    '大连': [122.2229,39.4409],
    '天津': [117.4219,39.4189],
    '太原': [112.3352,37.9413],
    '威海': [121.9482,37.1393],
    '宁波': [121.5967,29.6466],
    '宝鸡': [107.1826,34.3433],
    '宿迁': [118.5535,33.7775],
    '常州': [119.4543,31.5582],
    '广州': [113.5107,23.2196],
    '廊坊': [116.521,39.0509],
    '延安': [109.1052,36.4252],
    '张家口': [115.1477,40.8527],
    '徐州': [117.5208,34.3268],
    '德州': [116.6858,37.2107],
    '惠州': [114.6204,23.1647],
    '成都': [103.9526,30.7617],
    '扬州': [119.4653,32.8162],
    '承德': [117.5757,41.4075],
    '拉萨': [91.1865,30.1465],
    '无锡': [120.3442,31.5527],
    '日照': [119.2786,35.5023],
    '昆明': [102.9199,25.4663],
    '杭州': [119.5313,29.8773],
    '枣庄': [117.323,34.8926],
    '柳州': [109.3799,24.9774],
    '株洲': [113.5327,27.0319],
    '武汉': [114.3896,30.6628],
    '汕头': [117.1692,23.3405],
    '江门': [112.6318,22.1484],
    '沈阳': [123.1238,42.1216],
    '沧州': [116.8286,38.2104],
    '河源': [114.917,23.9722],
    '泉州': [118.3228,25.1147],
    '泰安': [117.0264,36.0516],
    '泰州': [120.0586,32.5525],
    '济南': [117.1582,36.8701],
    '济宁': [116.8286,35.3375],
    '海口': [110.3893,19.8516],
    '淄博': [118.0371,36.6064],
    '淮安': [118.927,33.4039],
    '深圳': [114.5435,22.5439],
    '清远': [112.9175,24.3292],
    '温州': [120.498,27.8119],
    '渭南': [109.7864,35.0299],
    '湖州': [119.8608,30.7782],
    '湘潭': [112.5439,27.7075],
    '滨州': [117.8174,37.4963],
    '潍坊': [119.0918,36.524],
    '烟台': [120.7397,37.5128],
    '玉溪': [101.9312,23.8898],
    '珠海': [113.7305,22.1155],
    '盐城': [120.2234,33.5577],
    '盘锦': [121.9482,41.0449],
    '石家庄': [114.4995,38.1006],
    '福州': [119.4543,25.9222],
    '秦皇岛': [119.2126,40.0232],
    '绍兴': [120.564,29.7565],
    '聊城': [115.9167,36.4032],
    '肇庆': [112.1265,23.5822],
    '舟山': [122.2559,30.2234],
    '苏州': [120.6519,31.3989],
    '莱芜': [117.6526,36.2714],
    '菏泽': [115.6201,35.2057],
    '营口': [122.4316,40.4297],
    '葫芦岛': [120.1575,40.578],
    '衡水': [115.8838,37.7161],
    '衢州': [118.6853,28.8666],
    '西宁': [101.4038,36.8207],
    '西安': [109.1162,34.2004],
    '贵阳': [106.6992,26.7682],
    '连云港': [119.1248,34.552],
    '邢台': [114.8071,37.2821],
    '邯郸': [114.4775,36.535],
    '郑州': [113.4668,34.6234],
    '鄂尔多斯': [108.9734,39.2487],
    '重庆': [107.7539,30.1904],
    '金华': [120.0037,29.1028],
    '铜川': [109.0393,35.1947],
    '银川': [106.3586,38.1775],
    '镇江': [119.4763,31.9702],
    '长春': [125.8154,44.2584],
    '长沙': [113.0823,28.2568],
    '长治': [112.8625,36.4746],
    '阳泉': [113.4778,38.0951],
    '青岛': [120.4651,36.3373],
    '韶关': [113.7964,24.7028]
};
function convertName2Coor(dataItem) {
  const toCoord = geoCoordMap[dataItem.to];
  const fromCoord = geoCoordMap[dataItem.from];
  if (fromCoord && toCoord) {
    return(
      {
        fromName: dataItem.from,
        toName: dataItem.to,
        coords: [fromCoord, toCoord]
      }
    );
  }
  else return ({});
};
function convertSourceName2Marker(dataItem) {
  return {
    name: dataItem.from,
    value: geoCoordMap[dataItem.from].concat([dataItem.value])
  };
};
function convertTargetName2Marker(dataItem) {
  return {
    name: dataItem.to,
    value: geoCoordMap[dataItem.to].concat([dataItem.value])
  };
};

class AirportCoordComponent extends Component{
    render() {
      const {geoMapName, directionOut, fromtoLines, iconPath} = this.props;

      const series = [];
      fromtoLines.forEach((item, i) => {
        const staticlines = {
          name: item.legendName,
          type: 'lines',
          zlevel: 1,
          effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 1
          },
          lineStyle: {
            normal: {
              color: item.color,
              width: 0,
              curveness: 0.2
            }
          },
          data: item.data.map(convertName2Coor)
        };
        const dynamiclines = {
          name: item.legendName,
          type: 'lines',
          zlevel: 2,
          symbol: ['none', 'arrow'],
          symbolSize: 3,
          lineStyle: {
              normal: {
                  color: item.color,
                  width: 1,
                  opacity: 0.6,
                  curveness: 0.2
              },
              emphasis: {
                  color: item.color,
                  width: 3,
                  opacity: 0.6,
                  curveness: 0.2
              }
          },
          data: item.data.map(convertName2Coor)
        };
        if((iconPath != undefined) && (iconPath != null)) {
          dynamiclines.effect = {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: iconPath,
            symbolSize: 15
          };
        }
        const markers = {
          name: item.legendName,
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: { brushType: 'stroke' },
          label: {
            normal: {
              show: true,
              position: 'right',
              // formatter: '{b}'
              formatter: function(item) {
                  return item.name + '：' + item.value[2]
              }
            }
          },
          symbolSize: function(val) {
            return val[2] / 8;
          },
          itemStyle: { normal: { color: item.color } },
          data: item.data.map(directionOut? convertTargetName2Marker : convertSourceName2Marker)
        };
        series.push(staticlines, dynamiclines, markers);
      });

      const option = {
        backgroundColor: '#122E41',
        tooltip: { trigger: 'item' },
        legend: {
          orient: 'vertical',
          top: 'bottom',
          left: 'right',
          data: fromtoLines.map((item) => { return item.legendName; }),
          textStyle: { color: '#fff' },
          // selectedMode: 'single'
        },
        geo: {
          roam: true,           // zoom in & zoom out
          map: geoMapName,
          label: { emphasis: { show: false } },
          itemStyle: {
            normal: { areaColor: '#323c48', borderColor: '#122E41' },
            emphasis: { areaColor: '#2a333d' }
          }
        },
        series: series
      };

      return (
        <div className='examples'>
          <div className='parent' style={{position: 'relative'}}>
            <ReactEcharts
              option={option}
              style={{width: '500px',height: '400px',margin: '0 0 0 -50%',left: '50%'}}
              className='react_for_echarts'
            />
          </div>
        </div>
      );
    }
};

export default AirportCoordComponent;
