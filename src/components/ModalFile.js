import React, { Component } from 'react';
import '../styles/Modal.css';
import { Modal, Button, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeWindow } from '../actions/ModalWindowAction';
import { addTodo, editTodo, deleteTodo } from  '../actions/ToDoAction';

class ModalWindow extends Component {
  handleTitle = (event) => {
    this.props.changeWindow(
      true,
      this.props.testState.modalTitle,
      event.target.value,
      this.props.testState.description,
    );
  };
  handleDescription = (event) => {
    this.props.changeWindow(
      true,
      this.props.testState.modalTitle,
      this.props.testState.title,
      event.target.value,
    );
  };
  deleteTodo = () => {
    let modalTitle = this.props.testState.modalTitle;
    this.props.deleteTodo(+modalTitle.slice(modalTitle.indexOf('#') + 1));
    this.props.changeWindow(false);
  };

  closeModalWindow = () => {
    this.props.changeWindow(false);
  };

  saveData = () => {
    if(this.props.testState.modalTitle === "New to do element") {
      this.props.addTodo(
        this.props.testState.title,
        this.props.testState.description,
        false,
        true
      );
    }
    else {
      let modalTitle = this.props.testState.modalTitle;
      this.props.editTodo(
        this.props.testState.title,
        this.props.testState.description,
        +modalTitle.slice(modalTitle.indexOf('#') + 1)
      );
    }
    this.props.changeWindow(false);
  };

  render() {
    return (
      <div className="static-modal">
        <Modal show={this.props.testState.visible}>
          <Modal.Header>
            <Modal.Title>{this.props.testState.modalTitle}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <FormControl type="text" placeholder="Title" value={this.props.testState.title} onChange={ this.handleTitle }/>
            <FormControl componentClass="textarea" className="textArea" placeholder="Description"
                         value={this.props.testState.description} onChange={ this.handleDescription }
            />
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={() => this.deleteTodo()}>Delete</Button>
            <Button onClick={() => this.closeModalWindow()}>Close</Button>
            <Button bsStyle="primary" onClick={() => this.saveData()}>Save changes</Button>
          </Modal.Footer>

        </Modal>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    testState: state.modalReducer,
    toDoReduser: state.toDoReduser,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeWindow,
      addTodo,
      editTodo,
      deleteTodo,
      dispatch
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);