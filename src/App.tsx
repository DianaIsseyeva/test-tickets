import classes from './App.module.scss';
import { CurrencyArray } from './common/currencyEnum';
import Sidebar from './components/sidebar/Sidebar';
function App() {
  return (
    <div className={classes.container}>
      <header className='App-header'>
        <Sidebar titles={CurrencyArray} />
      </header>
    </div>
  );
}

export default App;
