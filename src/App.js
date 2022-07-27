import { Error404 } from "./404/Error404";
import "./App.css";
import { ListProvider } from "./context/ListContext";
// import { RouterApp } from './router/RouterApp';

function App() {
  return (
    <ListProvider>
      <Error404 />
      {/* <RouterApp /> */}
    </ListProvider>
  );
}

export default App;
