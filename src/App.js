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
      route: 'home',
      selectedId: '',
      selectedHouse: []
    }
  }

  componentDidMount(){
    this.props.onRequestHouses();
  }

  updateHousesRequest = () => {
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
      this.props.onRequestHouses();
    }else if( route === 'details'){
      this.setState({route: 'details' + id, selectedId: id, selectedHouse: this.props.houses[id]})
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
            <ItemList
              houses={this.props.houses}
              onRouteChange={this.onRouteChange}
              onRequestHouses={this.props.onRequestHouses}
              updateHousesRequest={this.updateHousesRequest}
            />
          :
          this.state.route === 'create'
          ?
            <CreateHouse onRouteChange={this.onRouteChange}/>
          :
          this.state.route === 'details' + this.state.selectedId
          ?
            <Details
              id={this.state.selectedId}
              onRouteChange={this.onRouteChange}
              house={this.state.selectedHouse}
            />
          :
            <h1>Something went wrong(</h1>
        }

      </div>
    );
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(App);
