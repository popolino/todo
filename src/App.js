import "./App.scss";
import React from "react";
import "./reset.css";
import { SvgSelector } from "./components/SvgSelector/SvgSelector";
import AddItem from "./features/AddItem/AddItem";
import Item from "./features/Item/Item";
import { connect } from "react-redux";
import { removeToDo, toggleToDo } from "./reducers/ToDoListReducer";

const App = ({ todos, onToggleTodo, onRemoveToDo }) => {
  return (
    <div className="app">
      <div className="header">
        <button>Показывать все задания</button>
      </div>
      <div className="content">
        {todos.map((todo) => (
          <Item
            onRemoveTodo={onRemoveToDo}
            id={todo.id}
            key={todo.id}
            title={todo.title}
            task={todo.task}
            isDone={todo.isDone}
            onChange={() => onToggleTodo(todo.id)}
          />
        ))}
      </div>
      <button className="add">Добавить</button>
      {/*<AddItem/>*/}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.toDoListReducer.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (id) => dispatch(toggleToDo(id)),
    onRemoveToDo: (id) => dispatch(removeToDo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
