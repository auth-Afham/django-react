import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import TaskList from "./components/TaskList";

function App() {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-4">
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
