import './App.css';
import { ListProvider } from './context/ListContext';
import { RouterApp } from './router/RouterApp';

function App() {
  return (
    <ListProvider>
      <RouterApp />
    </ListProvider>
  );
}

export default App;
