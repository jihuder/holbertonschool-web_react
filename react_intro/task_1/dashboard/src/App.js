import logo from './holberton_logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  let isIndex = true;

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="hbtn-logo" width="200" /><h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(isIndex)}</p>
      </div>
    </div>
  );
}

export default App;
