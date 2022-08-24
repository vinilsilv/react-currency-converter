import logo from './logo.svg';
import './App.css';
import Converter from './components/Converter';

function App() {
  return (
    <div className="App">
      <Converter class="converter" currencyA="USD" currencyB="BRL"></Converter>
      <Converter class="converter" currencyA="USD" currencyB="EUR"></Converter>
      <Converter class="converter" currencyA="USD" currencyB="GBP"></Converter>
    </div>
  );
}

export default App;
