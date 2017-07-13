import React, { Component } from "react";
import ReactDOM from "react-dom";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CardProvider from './mui/CardProvider';
import SalesVolume from './component/SalesVolume';
import AirportCoordComponent from './component/AirportCoord';
import LineAndHistogram from './component/LineAndHistogram';

class App extends Component {
 	render() {
 		return (
			<MuiThemeProvider>
				<div className="providerDiv" style={{background: '#071B29',height: '100%'}}>
				    <table>
				    	<tbody>
				    		<tr style={{height: '50%'}}>
				    			<td style={tdStyle}>
					    			<CardProvider 
						    			className="cardProvider" 
						    			title="江西省年均降雨量" 
						    			style={cardStyles}>
						    			<SalesVolume
						    				echartsStyle={echartsStyle} />
					    			</CardProvider>
				    			</td>
				    			<td style={tdStyle}>
					    			<CardProvider 
					    				className="cardProvider" 
					    				title="国内游客去向" 
					    				style={cardStyles}>
					    				<AirportCoordComponent
					    					echartsStyle={echartsStyle} />
					    			</CardProvider>
				    			</td>
				    			<td style={tdStyle}>
					    			<CardProvider 
						    			className="cardProvider" 
						    			title="折线图和柱状图" 
						    			style={cardStyles}>
						    			<LineAndHistogram
						    				echartsStyle={echartsStyle} />
					    			</CardProvider>
				    			</td>
				    		</tr>
	    		    		<tr style={{height: '50%'}}>
	    		    			<td style={tdStyle}>
	    			    			<CardProvider 
	    				    			className="cardProvider" 
	    				    			title="江西省年均降雨量" 
	    				    			style={cardStyles}>
	    				    			<SalesVolume
	    				    				echartsStyle={echartsStyle} />
	    			    			</CardProvider>
	    		    			</td>
	    		    			<td style={tdStyle}>
	    			    			<CardProvider 
	    			    				className="cardProvider" 
	    			    				title="国内游客去向" 
	    			    				style={cardStyles}>
	    			    				<AirportCoordComponent
	    			    					echartsStyle={echartsStyle} />
	    			    			</CardProvider>
	    		    			</td>
	    		    			<td style={tdStyle}>
	    			    			<CardProvider 
	    				    			className="cardProvider" 
	    				    			title="折线图和柱状图" 
	    				    			style={cardStyles}>
	    				    			<LineAndHistogram
	    				    				echartsStyle={echartsStyle} />
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
	height: '100%',
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
    	height: '85%'
    }
};

const echartsStyle = {
	height: '100%',
	canvas: {
		width: '100%',
		height: '95%',
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