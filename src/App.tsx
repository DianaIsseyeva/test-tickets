import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { CurrencyArray } from './helper/currencyEnum';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Sidebar titles={CurrencyArray} />
      </header>
    </div>
  );
}

export default App;
