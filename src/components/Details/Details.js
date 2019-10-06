import React from 'react';
import DeleteHouse from '../DeleteHouse/DeleteHouse';

class Details extends React.Component{
  render(){
    return (
      <div className="pa3 mh2 tc">
        <p className="blue f3 ">{this.props.house.address}</p>
        <p className="blue f4">{this.props.house.owner}</p>
        <p className="blue f4">{this.props.house.price}</p>
        <p className="blue f4">{this.props.house.area}</p>
        <button onClick={()=>this.props.onRouteChange('itemlist')}>Back</button>
        <DeleteHouse />
      </div>
    )
  }
}

export default Details;
