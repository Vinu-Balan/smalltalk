import './styles.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Chat from './views/Chat';
import Home from './views/Home';
function App() {
  return (
    <div className='app'>
    <BrowserRouter>
      <Routes>
        <Route path='/chat' element={<Chat/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
