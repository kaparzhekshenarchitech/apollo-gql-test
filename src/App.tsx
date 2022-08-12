import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="App">
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
