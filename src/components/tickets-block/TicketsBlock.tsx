import { useAppSelector } from '../../common/hooks/redux';
import Ticket from '../ticket-item/Ticket';
import tickets from './tickets.json';
import classes from './TicketsBlock.module.scss';

const TicketsBlock = () => {
  const filters = useAppSelector(state => state.filterReducer);

  const filteredTickets = tickets.tickets.filter(ticket => {
    if (filters.all) return true;
    if (filters.noTransfers && ticket.stops === 0) return true;
    if (filters.transfers[ticket.stops]) return true;
    return false;
  });

  return (
    <div className={classes.ticketsBlock}>
      {filteredTickets
        .sort((a, b) => a.price - b.price)
        .map(ticket => (
          <Ticket ticket={ticket} key={ticket.price} />
        ))}
    </div>
  );
};

export default TicketsBlock;
