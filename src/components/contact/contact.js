import React from 'react';
import SideBar from '../layout/sidebar';
import  { connect } from 'react-redux';
import  { disptachContactData } from './actions'

class Contact extends React.Component {

  constructor() {
    super()
    this.state = {
      firstname: null,
      lastname: null,
      message: null,
      ...this.props
    }
  }

  handleChange(key, ev) {
    ev.preventDefault();
    this.setState({ ...this.state, [key]:ev.target.value})
  }


handleSubmit(ev) {
  ev.preventDefault();
  
  this.props.disptachContactData({firstname: this.state.firstname, lastname: this.state.lastname,  message:this.state.message  })

}


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h1>Contact</h1>
            <h5>What is Lorem Ipsum?
            <br/>
              {JSON.stringify(this.props.productData)}
              firstname: {this.state.firstname} <br/>
              lastname: {this.state.lastname} <br/>
              message: {this.state.message} <br/>
            </h5>
            <form onSubmit={this.handleSubmit.bind(this)}>
              { [1,2,3,4].map((item,index)=>{
                return(
                <li key={index}>{item}</li>             
                )
             })}
             
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6" style={{ "paddingBottom": '10px' }}>
                  <input onChange={this.handleChange.bind(this,'firstname')} className="form-control" name="firstname"  defaultValue="piyush kapoor" placeholder="Firstname" type="text" required autoFocus />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6" style={{ "paddingBottom": '10px' }}>
                  <input onChange={this.handleChange.bind(this,'lastname')} className="form-control" name="lastname" placeholder="Lastname" type="text" required />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <textarea onChange={this.handleChange.bind(this,'message')} className="form-control" placeholder="Message..." rows="6" name="comment" required></textarea>
                </div>
                <br />
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <br />
                  <input type="submit" className="btn btn-success" value="Send" />&nbsp;
                <input type="reset" className="btn btn-danger" value="Clear" />
                </div>
              </div>
            </form>
          </div>
          <SideBar />
        </div > 
      </div >
    );
  }
}

const mapStateToProps = (state,ownProps) => {
  return { productData : state.contactReducer.productData }
}


const mapDispatchToProps = { disptachContactData }

export default connect(mapStateToProps, mapDispatchToProps)(Contact);




/*

(mapDispatchToProps)component disptahc(action1) => saga   put(action2) =>   store   => component(mapStateToProps)
*/