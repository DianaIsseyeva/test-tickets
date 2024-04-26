import { Button, Typography } from '@mui/material';

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
    <div className='flex justify-between mb-5 mx-5'>
      <div className='mr-5'>
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
            <p>за {ticket.price}</p>
          </div>
        </Button>
      </div>
      <div className='flex justify-between items-center shrink'>
        <div>
          <Typography variant='h4' gutterBottom>
            {ticket.departure_time}
          </Typography>
          <p>
            {ticket.origin},{ticket.origin_name}
          </p>
          <p className='text-[#b1b7ba]'>{ticket.departure_date}</p>
        </div>
        <div className='text-center'>
          <p>{ticket.stops ? getStopsLabel(ticket.stops) : 'Без пересадок'}</p>
          <div className='flex items-center mx-5'>
            <hr className='w-[200px]' /> <img src='/ticket-airplane.png' alt='icon' width={20} height={20} />
          </div>
        </div>
        <div>
          <div>
            <Typography variant='h4' gutterBottom>
              {ticket.arrival_time}
            </Typography>
            <p>
              {ticket.destination},{ticket.destination_name}
            </p>
            <p className='text-[#b1b7ba]'>{ticket.arrival_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketItem;
