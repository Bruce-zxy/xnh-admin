import React, { Component } from "react";
import ReactDOM from "react-dom";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CardProvider from './mui/CardProvider';
import SalesVolume from './component/SalesVolume';
import AirportCoordComponent from './component/AirportCoord';
import LineAndHistogram from './component/LineAndHistogram';

import blockAreaData from './MapExampleBlockArea';
import fromtoLinesData from './MapExampleFromToLines';
import barLinesData from './ChartExampleBarLines';

class App extends Component {
 	render() {
 		return (
			<MuiThemeProvider>
				<div style={{background: '#071B29'}}>
				    <table>
				    	<tbody>
				    		<tr>
								<td style={tdStyle}>
									<CardProvider className="cardProvider" title="折线图和柱状图" style={cardStyles}>
										<LineAndHistogram
											yAxisConfig={barLinesData.yAxisConfig}
											LegendData={barLinesData.legendData}
											xAxisData={barLinesData.xAxisData}
											seriesData={barLinesData.seriesData}
										/>
									</CardProvider>
								</td>
								<td style={tdStyle}>
									<CardProvider className="cardProvider" title="江西省年均降雨量" style={cardStyles}>
										<SalesVolume
											geoMapName={blockAreaData.geoMapName}
											visualMin={blockAreaData.visualMin}
											visualMax={blockAreaData.visualMax}
											visualLabel={blockAreaData.visualLabel}
											seriesData={blockAreaData.mapDataSeries}
										/>
									</CardProvider>
								</td>
								<td style={tdStyle}>
									<CardProvider className="cardProvider" title="国内游客去向" style={cardStyles}>
										<AirportCoordComponent
											geoMapName = {fromtoLinesData.geoMapName}
											directionOut = {fromtoLinesData.directionOut}
											fromtoLines = {fromtoLinesData.fromtoLines}
											iconPath = {fromtoLinesData.iconPath}
										/>
									</CardProvider>
								</td>
				    		</tr>
				    	</tbody>
				    </table>
			    </div>
			</MuiThemeProvider>
		)
 	}
}

const cardStyles = {
	background: '#122E41',
	width: '100%',
    header: {
    	paddingBottom: 8,
    	paddingTop: 8,
    	background: '#193D56',
    	titleStyle: {
	    	fontWeight: 600,
	    	color: '#BFDAED',
	    }
    },
    text: {
    	margin: '0 auto',
    	position: 'relative',
    }
};

const echartsStyle = {
	canvas: {
		width: '100%',
		height: '500px',
		margin: '0 0 0 -50%',
		left: '50%'
	}
}

const tdStyle = {
	width: '33%',
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
