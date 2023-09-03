import './App.css';
import { BrowserRouter as Router,
Routes,Route} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Login from './Pages/Login';
import Register from './Pages/Register';
import Chat from './Pages/Chat';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' Component={Homepage}/>
        <Route path='/login' Component={Login}/>
        <Route path='/register' Component={Register}/>
        <Route path='/chat' Component={Chat}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
