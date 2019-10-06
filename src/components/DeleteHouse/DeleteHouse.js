import React from 'react';

class DeleteHouse extends React.Component{

  onSubmitDeleting = () => {
      fetch(`http://mr-test-backend.sadek.usermd.net/houses/${this.props.id}`, {
        method: 'delete'
      })
        .then( resp => resp.json())
        .then( resp => alert('Deleted. Please Update!'))
        .catch(error => alert('Oops, some error('))
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
