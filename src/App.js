import logo from './logo.svg';
import './App.css';
import Quote from './components/quote';

import Web from './components/buttons/web';

function App() {
  return (
    <div className="App">
       <h2>Random Quote Generator</h2>
     <Quote></Quote>
     {/* <Web></Web> */}
    </div>
  );
}

export default App;
