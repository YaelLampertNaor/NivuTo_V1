import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Main_Layout from './Layout/Main_Layout';
import UserContextProvider from './Context/UserContext';


function App() {
  return (
    <BrowserRouter>
    <UserContextProvider>
      <Main_Layout/>
    </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
