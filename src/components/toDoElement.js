import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeWindow } from '../actions/ModalWindowAction';

class ToDoElement extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="toDoElement" onClick={()=>{this.showModalForElement()}}>
        <p>
          { this.props.element.title }
        </p>
      </div>
    );
  }
  showModalForElement = () =>{
    console.log(this.props.element.id);
    this.props.changeWindow(
      true,
      "Edit Element #" + this.props.element.id,
      this.props.element.title,
      this.props.element.description,
      );
  }
}

function mapStateToProps(state) {
  return {
    testState: state,
    toDoReduser: state.toDoReduser,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeWindow,
      dispatch
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ToDoElement);