import { Button } from '@mui/material';
import TicketInfo from '../ticket-info/TicketInfo';

const TicketItem = ({ ticket }: any) => {
  const getStopsLabel = (stops: number) => {
    if (stops === 1) {
      return `${stops} пересадка`;
    } else if (stops >= 2 && stops <= 4) {
      return `${stops} пересадки`;
    } else {
      return `${stops} пересадок`;
    }
  };

  return (
    <div className='flex justify-between mb-5 mx-5 bg-white rounded-lg'>
      <div className='mr-5 pr-5 border-r-2 border-[#f1f4f5] p-10'>
        <div>
          <img src='/logo.png' alt='logo' width={150} height={50} className='mb-3' />
        </div>
        <Button
          variant='contained'
          className='w-full'
          sx={{ 'backgroundColor': '#fe6d01', '&:hover': { backgroundColor: '#ff8125' } }}
        >
          <div>
            <p>Купить</p>
            <p>за {ticket.price.toLocaleString()} ₽</p>
          </div>
        </Button>
      </div>
      <div className='grid grid-cols-3 p-10'>
        <TicketInfo
          time={ticket.departure_time}
          location={ticket.origin}
          name={ticket.origin_name}
          date={ticket.departure_date}
        />
        <div className='flex flex-col items-center justify-center'>
          <p>{ticket.stops ? getStopsLabel(ticket.stops) : 'Без пересадок'}</p>
          <div className='flex items-center justify-start  '>
            <hr className='w-[200px] ali' /> <img src='/ticket-airplane.png' alt='icon' width={20} height={20} />
          </div>
        </div>
        <div className='items-end flex justify-end'>
          <TicketInfo
            time={ticket.arrival_time}
            location={ticket.destination}
            name={ticket.destination_name}
            date={ticket.arrival_date}
          />
        </div>
      </div>
    </div>
  );
};

export default TicketItem;
