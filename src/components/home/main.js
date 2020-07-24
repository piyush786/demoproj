import React from 'react';
import SideBar from '../layout/sidebar';
import CommentForm from './comment-form';
import Comments from './comments';
import Post from './post';
import { connect } from 'react-redux';


function Main (props) {
    return (
        <div class="container">

    <div class="row">

      <div class="col-lg-8">
        firstname: { props.contactData?.firstname}
        lastname: { props.contactData?.lastname}
        message: { props.contactData?.message}
        <Post/>
        <hr/>

        <CommentForm/>

        <Comments/>
      </div>

      <SideBar/>

    </div>
  
  </div>
    );
}

const mapStateToProps = (state, ownProps)=>{
  console.log('========++++',state)
  return {
    contactData : state.contactReducer.contactData
  }
}

const mapDispatchToProps = ()=>{
  return { }

}


export default connect(mapStateToProps,mapDispatchToProps )(Main);