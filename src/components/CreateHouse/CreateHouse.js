import React from "react";

class CreateHouse extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      address: "",
      owner: "",
      price: "",
      area: -1
    }
  }

  onAddressChange = (event) => {
    this.setState({ address: event.target.value });
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
    const data = {
      address : this.state.address,
      owner : this.state.owner,
      price : this.state.price,
      area : this.state.area
    };
    const url = "http://mr-test-backend.sadek.usermd.net/houses";
    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    };

      fetch( url, init)
        .then( resp => resp.text())
        .then( house => {
          console.log(house)
          this.props.onRouteChange("itemlist")
        })
        .catch(error => console.log(error.text()))
    }

  render(){
    return(
      <div>
      <form className="measure">

        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f1 fw6 ph0 mh0">Create house</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="name">Address</label>
            <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="text"
            name="adress"
            id="adress"
            onChange={this.onAddressChange}
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
            <label className="db fw6 lh-copy f6" htmlFor="price">Price</label>
            <input
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="text"
            name="price"
            id="price"
            onChange={this.onPriceChange}
            required
            />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="area">Area</label>
            <input
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="number"
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
