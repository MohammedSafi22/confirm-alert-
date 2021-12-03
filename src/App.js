import Todo from "./components/Todo";

function App() {
  return (
    <div>
     <h1>My ToDoS</h1>
     <Todo text="learn react" />
     <Todo text="learn angular"/>
     <Todo text="learn vue"/>
    </div>
  );
}

export default App;
