import React from 'react';

class CreateHouse extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      address: "",
      owner: "",
      price: "",
      area: ""
    }
  }

  onAdressChange = (event) => {
    this.setState({ adress: event.target.value });
  }

  onOwnerChange = (event) => {
    this.setState({ owner: event.target.value });
  }

  onPriceChange = (event) => {
    this.setState({ price: event.target.value });
  }

  onAreaChange = (event) => {
    this.setState({ area: event.target.value });
  }

  onSubmitCreating = () => {
      fetch('http://mr-test-backend.sadek.usermd.net/swagger/#/houses/post_houses', {
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          adress: this.state.adress,
          owner: this.state.owner,
          price: this.state.price,
          area: this.state.area
        })
      })
        .then( resp => resp.json())
        .then( house => {
          console.log(house);
          this.props.onRouteChange('itemlist')
        })
        .catch(error => console.log(error))
    }

  render(){
    return(
      <div>
      <form className="measure">

        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f1 fw6 ph0 mh0">Create house</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="name">Adress</label>
            <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="text"
            name="adress"
            id="adress"
            onChange={this.onAdressChange}
            required
            />
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Owner</label>
            <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="text"
            name="owner"
            id="owner"
            onChange={this.onOwnerChange}
            required
            />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Price</label>
            <input
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="price"
            name="price"
            id="price"
            onChange={this.onPriceChange}
            required
            />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Area</label>
            <input
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="area"
            name="area"
            id="area"
            onChange={this.onAreaChange}
            required
            />
          </div>
        </fieldset>
        <div className="">
          <input
            onClick={this.onSubmitCreating}
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            type="button"
            value="Create"
          />
        </div>
      </form>
      </div>
    )
  }
}

export default CreateHouse;
