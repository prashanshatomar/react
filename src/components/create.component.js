import React, { Component } from "react";

export default class Create extends Component {
    constructor(props){
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.state = {
            person_name:''
        }
    }
    onChangePersonName(e){
        this.setState({
            person_name:e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(`This value are  ${this.state.person_name}`)
    }





  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <p>Welcome to Create Component!!</p>
        <h3>Add New Business</h3>
        <form>
          <div className="form-group">
            <label>Add Person Name: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Add Business Name: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Add GST Number: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Register Business"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
