import React, { Component } from 'react'

export default class Formclass extends Component {
    constructor(){
        super();
        this.state = {
            name:"",
            email:"",
            pass:"",
            show:null,
        }

    }

     handelform=(e)=>{
        e.preventDefault();
        console.log(this.state.name,this.state.email,this.state.pass);
        this.setState({show:true});
        e.target.reset();
      }
    render() {
    return (
      <>
         <form onSubmit={this.handelform}>
        <input type="text" placeholder="Enter Your Name" value={this.state.name} onChange={(e)=>this.setState({name :e.target.value})}/><br /><br />
        <input type="Email" placeholder="Enter Your Email" value={this.state.email} onChange={(e)=>this.setState({email :e.target.value})}/><br /><br />
        <input type="Password" placeholder="Enter Your Password" value={this.state.pass} onChange={(e)=>this.setState({pass :e.target.value})}/><br /><br />
        <button>submit</button><br /><br />
      </form>
      
      {
          this.state.show !== null ?
          <>
          <h1 style={{ color: "white" }}>Name: {this.state.name}</h1>
       <h1 style={{ color: "white" }}>Email :{this.state.email}</h1>
       <h1 style={{ color: "white" }}>Psssword :{this.state.pass}</h1></> : ""
        }
      </>
    )
  }
}
