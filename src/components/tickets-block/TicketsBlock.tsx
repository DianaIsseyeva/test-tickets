import Ticket from '../ticket-item/Ticket';
import tickets from './tickets.json';
import classes from './TicketsBlock.module.scss';

const TicketsBlock = () => {
  return (
    <div className={classes.ticketsBlock}>
      {tickets.tickets
        .sort((a, b) => a.price - b.price)
        .map(ticket => (
          <Ticket ticket={ticket} />
        ))}
    </div>
  );
};

export default TicketsBlock;
