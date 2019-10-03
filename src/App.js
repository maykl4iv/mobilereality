import React from 'react';
import ViewPage from './components/ViewPage/ViewPage';
import './App.css';

import {requestHouses, deleteHouse, createHouse} from 'actions.js';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    deleteHouse : state.deleteHouse.houserm,
    createHouse : state.createHouse.housecr,
    robots : state.requestRobots.robots,
    isPending : state.requestRobots.isPending,
    error : state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    letCreateHouse : (event) => dispatch( createHouse(event.target.value) ),
    letDeleteHouse : (event) => dispatch( deleteHouse(event.target.value) ),
    onRequestHouses : () => dispatch( requestHouses() )
  }
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      route: 'home'
    }
  }

  onRouteChange = (route, id) => {
    if( route === 'home'){
      this.setState({route})
    }else if( route === 'itemlist'){
      this.setState({route})
    }else if( route === 'item'){
      this.setState({route})
    }
  }

  render (){
    return (
      <div className="App">
        { this.state.route === 'home'
          ?
            <ViewPage />
          :
          this.state.route === 'itemlist'
          ?
            <ItemList />
          :
          this.state.route === 'details'
          ?
            <Details />
          :
            <h1>Something went wrong(</h1>
        }

      </div>
    );
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(App);
