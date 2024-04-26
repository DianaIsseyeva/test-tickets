import React from 'react';
import { Typography } from '@mui/material';
import { TicketType } from '../../common/types/ticketType';

const TicketInfo = ({ time, location, name, date }: Partial<TicketType>) => {
  return (
    <div>
      <Typography variant='h4' gutterBottom>
        {time}
      </Typography>
      <p>
        {location},{name}
      </p>
      <p className='text-[#b1b7ba]'>{date}</p>
    </div>
  );
};

export default TicketInfo;
