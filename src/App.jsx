import { useEffect, useState } from "react";

import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    setLoading(true);
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setLoading(false);
    console.log(response);
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <h1>Todos</h1>

      {loading ? (
        <p>Loading data</p>
      ) : (
        <ol>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ol>
      )}
    </>
  );
};

export default App;
