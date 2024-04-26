import { Typography } from '@mui/material';
import { TicketType } from '../../common/types/ticketType';

const TicketInfo = ({ time, location, name, date }: Partial<TicketType>) => {
  const departureDate = date;
  let dayOfWeek = '';

  if (departureDate) {
    const departureDateParts = departureDate.split('.');
    const formattedDate = `20${departureDateParts[2]}-${departureDateParts[1]}-${departureDateParts[0]}`;

    const dateObject = new Date(formattedDate);

    const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    dayOfWeek = daysOfWeek[dateObject.getDay()];
  }

  return (
    <div>
      <Typography variant='h4' gutterBottom>
        {time}
      </Typography>
      <p>
        {location},{name}
      </p>
      <p className='text-[#b1b7ba]'>
        {date}, {dayOfWeek}
      </p>
    </div>
  );
};

export default TicketInfo;
