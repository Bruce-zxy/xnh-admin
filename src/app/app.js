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
				<div style={{background: '#071B29'}}>
				    <table>
				    	<tbody>
				    		<tr>
				    			<td><CardProvider title="江西省年均降雨量" style={cardStyles}><SalesVolume/></CardProvider></td>
				    			<td><CardProvider title="国内游客去向" style={cardStyles}><AirportCoordComponent/></CardProvider></td>
				    			<td><CardProvider title="折线图和柱状图" style={cardStyles}><LineAndHistogram/></CardProvider></td>
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
    header: {
    	paddingBottom: 8,
    	paddingTop: 8,
    	background: '#193D56',
    	titleStyle: {
	    	fontWeight: 600,
	    	color: '#BFDAED',
	    }
    },

};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);