import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos, completeTodos, removeTodos, updateTodos, } from "../redux/reducer";
import TodoItem from "./TodoItem";


const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const DisplayTodos = (props) => {
  const [data, setData] = useState("active");

  return (

    <div className="displaytodos">
      <h1> Todo App </h1>
      <div className="buttons">
        <button onClick={() => setData("active")}> Active </button>

        <button onClick={() => setData("completed")}> Completed </button>

        <button onClick={() => setData("all")} >  All </button>
      </div>

      <ul>

        {props.todos.length > 0 && data === "active"
          ? props.todos.map((item) => {
            return (
              item.completed === false && (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completeTodo={props.completeTodo}
                />
              )
            );
          })
          : null}
        {/* for completed items */}
        {props.todos.length > 0 && data === "completed"
          ? props.todos.map((item) => {
            return (
              item.completed === true && (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completeTodo={props.completeTodo}
                />
              )
            );
          })
          : null}

        {/* ================for all items================= */}

        {props.todos.length > 0 && data === "all"
          ? props.todos.map((item) => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                removeTodo={props.removeTodo}
                updateTodo={props.updateTodo}
                completeTodo={props.completeTodo}
              />
            );
          })
          : null}

      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
