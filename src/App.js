import './style.css'
import NavBar from './Components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
        <div className="App">
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
