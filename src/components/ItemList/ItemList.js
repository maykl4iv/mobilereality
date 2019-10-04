import React from 'react';
import Item from '../Item/Item';
import DeleteHouse from '../DeleteHouse/DeleteHouse';

class ItemList extends React.Component {
  render(){
    console.log(this.props.onRouteChange)
    return(
        <div>
          <button onClick={()=>this.props.onRouteChange('create')}>Create House</button>
          <DeleteHouse />
          {   this.props.houses === ''
            ?
              <h1>Create a house</h1>
            :
              this.props.houses.map( (house, i ) => {
              return (
                <div>
                  <Item
                    key={i}
                    adress={house.adress}
                    owner={house.owner}
                    price={house.price}
                    area={house.area}
                    onRouteChange={this.props.onRouteChange}
                  />
                </div>
              )
            })
          }
        </div>
      )
    }
}

export default ItemList;
