import classes from './App.module.scss';
import { CurrencyArray } from './common/currencyEnum';
import Sidebar from './components/sidebar/Sidebar';
import TicketsBlock from './components/tickets-block/TicketsBlock';
function App() {
  return (
    <div className={classes.container}>
      <div className='flex flex-col items-center'>
        <div className='flex justify-center mb-5 mt-20'>
          <img src='/airplane.png' alt='icon' width={40} height={40} />
        </div>
        <div className='flex'>
          <Sidebar titles={CurrencyArray} />
          <TicketsBlock />
        </div>
      </div>
    </div>
  );
}

export default App;
