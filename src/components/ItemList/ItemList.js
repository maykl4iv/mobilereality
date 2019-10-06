import React from 'react';
import Item from '../Item/Item';

class ItemList extends React.Component {

  render(){
    return(
        <div>
          <button onClick={()=>this.props.onRouteChange('create')}>Create House</button>
          {

              this.props.houses.map( (house, i ) => {
              return (
                <div>
                  <Item
                    key={i}
                    id={house._id}
                    idNumber={house.idNumber}
                    adress={house.address}
                    owner={house.owner}
                    price={house.price}
                    area={house.area}
                    onRouteChange={this.props.onRouteChange}
                    updateHousesRequest={this.props.updateHousesRequest}
                  />
                </div>
              )
            })
          }
          <button onClick={()=>this.props.onRequestHouses()}>Update</button>
          <button onClick={()=>this.props.onRouteChange('home')}>Back</button>
        </div>
      )
    }
}

export default ItemList;
