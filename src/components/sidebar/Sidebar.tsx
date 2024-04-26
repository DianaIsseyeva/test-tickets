import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../common/hooks/redux';
import { ColorToggleButtonProps } from '../../common/types/colorToggleButtonType';
import { setAll, setNoTransfers, setTransfers } from '../../store/reducers/FilterSlice';
import ColorToggleButton from '../ui/color-toggle-button/ColorToggleButton';
import classes from './Sidebar.module.scss';

const Sidebar = ({ titles }: ColorToggleButtonProps) => {
  const dispatch = useDispatch();
  const filters = useAppSelector(state => state.filterReducer);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'all':
        dispatch(setAll());
        break;
      case 'noTransfers':
        dispatch(setNoTransfers());
        break;
      case 'transfers':
        dispatch(setTransfers(parseInt(value)));
        break;
      default:
        break;
    }
  };

  const getCheckboxStyle = (checked: boolean) => ({
    '& .css-i4bv87-MuiSvgIcon-root': {
      fill: checked ? '#2096f3 !important' : '#d8dbdc !important',
    },
  });

  return (
    <div className={classes.sidebar}>
      <div className='mb-10'>
        <h3 className='mb-3'>ВАЛЮТА</h3>
        <ColorToggleButton titles={titles} />
      </div>
      <h3 className='mb-3'>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={filters.all} onChange={handleFilterChange} name='all' />}
          label='Все'
          sx={{ ...getCheckboxStyle(filters.all) }}
          className={classes.formControlLabel}
        />
        <div className={`${classes.formControlLabel} flex items-center justify-between`}>
          <FormControlLabel
            control={<Checkbox checked={filters.noTransfers} onChange={handleFilterChange} name='noTransfers' />}
            label='Без пересадок'
            sx={{ ...getCheckboxStyle(filters.noTransfers) }}
          />
          {filters.noTransfers && <p className='text-[#2096f3]'>ТОЛЬКО</p>}
        </div>
        <FormControlLabel
          control={<Checkbox checked={filters.transfers[1]} onChange={handleFilterChange} name='transfers' value='1' />}
          label='1'
          sx={{ ...getCheckboxStyle(filters.transfers[1]) }}
          className={classes.formControlLabel}
        />
        <FormControlLabel
          control={<Checkbox checked={filters.transfers[2]} onChange={handleFilterChange} name='transfers' value='2' />}
          label='2'
          sx={{ ...getCheckboxStyle(filters.transfers[2]) }}
          className={classes.formControlLabel}
        />
        <FormControlLabel
          control={<Checkbox checked={filters.transfers[3]} onChange={handleFilterChange} name='transfers' value='3' />}
          label='3'
          sx={{ ...getCheckboxStyle(filters.transfers[3]) }}
          className={classes.formControlLabel}
        />
      </FormGroup>
    </div>
  );
};

export default Sidebar;
