import { useState } from "react";
import Todo from "./pages/Todo";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Todo />
      </PersistGate>
    </Provider>
  );
}

export default App;
