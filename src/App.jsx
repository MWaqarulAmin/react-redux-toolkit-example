import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./features/todo/todoSlice";
import { addProduct, deleteProduct } from "./features/product/productSlice";

const App = () => {
  const [input, setInput] = useState("");
  const [productInput, setProductInput] = useState("");
  const tasks = useSelector((state) => state.todo.tasks);
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleAddProduct = () => {
    if (productInput) {
      dispatch(addProduct(productInput));
      setProductInput("");
    }
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <>
      <h2>List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new Task"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleDeleteTodo(task.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <div>
        <h2>Products Section</h2>
        <input
          type="text"
          value={productInput}
          onChange={(e) => setProductInput(e.target.value)}
          placeholder="Add a new Product"
        />
        <button onClick={handleAddProduct}>Add Product</button>
        <ol>
          {products.map((product) => (
            <li key={product.id}>
              {product.text}
              <button onClick={() => handleDeleteProduct(product.id)}>
                Delete Product
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default App;
