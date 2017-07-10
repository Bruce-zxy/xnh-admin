import React, { Component } from "react";
import ReactDOM from "react-dom";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SalesVolume from './component/SalesVolume';
import AirportCoordComponent from './component/AirportCoord.js';
import CardProvider from './mui/CardProvider.js'

class App extends Component {
 	render() {
 		return (
			<MuiThemeProvider>
				<div>
				    <table>
				    	<tbody>
				    		<tr>
				    			<td><CardProvider title="江西省年均降雨量" style={normalStyles}><SalesVolume/></CardProvider></td>
				    			<td><CardProvider title="国内游客去向" style={wideStyles}><AirportCoordComponent/></CardProvider></td>
				    			<td></td>
				    		</tr>
				    		<tr>
				    			<td></td>
				    			<td></td>
				    			<td></td>
				    		</tr>
				    		<tr>
				    			<td></td>
				    			<td></td>
				    			<td></td>
				    		</tr>
				    	</tbody>
				    </table>
			    </div>
			</MuiThemeProvider>
		)
 	}
}

const normalStyles = {
	height: '100%',
    card: {
    	width: 350,
    	height: 500,
    },
    header: {
    	paddingBottom: 0,
    },
    text: {
    	height: '100%'
    }
};

const wideStyles = {
	height: 500,
    card: {
    	width: 700,
    	height: 500,
    },
    header: {
    	paddingBottom: 0,
    },
    text: {
    	height: '100%'
    }
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);