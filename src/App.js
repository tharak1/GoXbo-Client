
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import MonumentDetails from './components/MonumentDetails';
import Hotels from './components/Hotels';
import FoodToEat from './components/FoodToEat';

function App() {
  return (<>
    
    <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/recipePage/:id' element={<MonumentDetails/>} />
          <Route path='/hotels/:id' element={<Hotels/>} />
          <Route path='/food/:id' element={<FoodToEat/>} />
        </Routes>
       </Router>
  </>
  );
}

export default App;
