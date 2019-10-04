import React from 'react';

class Details extends React.Component{
  render(){
    return (
      <div className="pa3 mh2 tc">
        <p className="blue f3 ">{this.props.adress}</p>
        <p className="blue f4">{this.props.owner}</p>
        <p className="blue f4">{this.props.price}</p>
        <p className="blue f4">{this.props.area}</p>
      </div>
    )
  }
}

export default Details;
