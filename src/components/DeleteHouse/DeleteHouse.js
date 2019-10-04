import React from 'react';

class DeleteHouse extends React.Component{
  onSubmitDeleting = () => {
      fetch('http://mr-test-backend.sadek.usermd.net/swagger/#/houses/post_houses', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          adress: this.props.adress
        })
      })
        .then( resp => resp.json())
        .then( house => console.log(house))
        .catch(error => console.log(error))
    }


  render(){
    return(
      <div>
        <button onClick={this.onSubmitDeleting}>Delete</button>
      </div>
    )
  }
}

export default DeleteHouse;
