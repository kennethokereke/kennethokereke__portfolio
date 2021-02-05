
import './App.scss';
import {Router} from 'react-router-dom'
import history from '../src/history'
import Navbar from '../src/Components/Navbar';
import ContentWrapper from './Components/ContentWrapper'
import './App.scss'


function App() {

 
  return (
    <div id="App">
     <Router history={history}>
     <Navbar/>
     <ContentWrapper/>
     </Router>
    </div>
  );
}

export default App;
 