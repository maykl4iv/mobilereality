import React from 'react';
import ViewPage from './components/ViewPage/ViewPage';
import CreateHouse from './components/CreateHouse/CreateHouse';
import ItemList from './components/ItemList/ItemList';
import DeleteHouse from './components/DeleteHouse/DeleteHouse';
import Details from './components/Details/Details';
import './App.css';

import {requestHouses} from './actions';
import { connect } from 'react-redux';
const mapStateToProps = state => {
  return {
    houses : state.houses,
    isPending : state.isPending,
    error : state.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
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

  componentDidMount(){
    this.props.onRequestHouses();
  }

  onRouteChange = (route, id) => {
    if( route === 'home'){
      this.setState({route})
    }else if( route === 'itemlist'){
      this.setState({route})
    }else if( route === 'item'){
      this.setState({route})
    }else if( route === 'create'){
      this.setState({route})
    }else if( route === 'delete'){
      this.setState({route})
    }else if( route === 'details' + this.state.selectedAdress){
      this.setState({route: 'details' + this.state.selectedAdress})
    }

  }

  render (){
    return (
      <div className="App">
        { this.state.route === 'home'
          ?
            <ViewPage onRouteChange={this.onRouteChange}/>
          :
          this.state.route === 'itemlist'
          ?
            <ItemList houses={this.props.houses} onRouteChange={this.onRouteChange}/>
          :
          this.state.route === 'create'
          ?
            <CreateHouse onRouteChange={this.onRouteChange}/>
          :
          this.state.route === 'delete'
          ?
            <DeleteHouse />
          :
          this.state.route === 'details'
          ?
            <Details onRouteChange={this.onRouteChange}/>
          :
            <h1>Something went wrong(</h1>
        }

      </div>
    );
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(App);
