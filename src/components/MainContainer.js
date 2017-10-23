import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ToDoElement from "./toDoElement";
import ModalWindow from "./ModalFile";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeWindow } from '../actions/ModalWindowAction';
import { addTodo } from '../actions/ToDoAction';
const localStorage = window.localStorage;
class MainContainer extends Component {
  componentDidMount() {
    let storedTodo = JSON.parse(localStorage.getItem("todo"));
    for(let stored of storedTodo){
      this.props.addTodo(
        stored.title,
        stored.description,
        stored.isEnd,
        stored.id,
        false
      )
    }
  }
  render() {
    return (
      <Grid>
        <ModalWindow />
        <Row>
          <Col md={10}>
            <h1>TOP TODO LIST BY MYKOLA KRYS</h1>
          </Col>
          <Col md={2}>
            <button className="btn" onClick={ () => this.showModalForNewTODO() }>+</button>
          </Col>
          <hr></hr>
        </Row>
        <Row>
          <Col md={3}/>
          <Col md={6} className="coloumBorder">
            {
              this.props.toDoReduser.elements.map(function (element, index){
                if(element.id !== 0)
                  return <ToDoElement key={index} element = {element} />
              })
            }
          </Col>
          <Col md={3}/>
        </Row>
      </Grid>
    );
  }
  showModalForNewTODO = () =>{
    this.props.changeWindow(true, "New to do element", null, null);
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
      addTodo,
      changeWindow,
      dispatch
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);