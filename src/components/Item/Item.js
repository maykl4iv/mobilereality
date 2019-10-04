import React from 'react';
import DeleteHouse from '../DeleteHouse/DeleteHouse';

class Item extends React.Component{
  render(){
    return (
      <div className="tc bg-light-green br2 dib pa3 ma2 grow bw2 sh adow-5">
        <div>
          <h2>{this.props.adress}</h2>
          <p>{this.props.owner}</p>
        </div>
        <DeleteHouse adress={this.props.adress}/>
        <button onClick={()=>this.props.onRouteChange('details', this.props.adress)}></button>
      </div>
    );
  }
}

export default Item;
