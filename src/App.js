
import './App.css';
import hello from './hello.png';
//import homeBanner from '../images/S3.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hello} className="App-logo" alt="logo" />
        <p>
          Hiii hellooo !!
          This is test portfolio site<br/>
          And I'm going to deploy this site on Versel using github actions
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
