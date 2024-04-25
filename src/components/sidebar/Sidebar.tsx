import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { ColorToggleButtonProps } from '../../common/types/colorToggleButtonType';
import ColorToggleButton from '../ui/color-toggle-button/ColorToggleButton';
import classes from './Sidebar.module.scss';
const Sidebar = ({ titles }: ColorToggleButtonProps) => {
  return (
    <div className={classes.sidebar}>
      <div className='mb-10'>
        <h3 className='mb-3'>ВАЛЮТА</h3>
        <ColorToggleButton titles={titles} />
      </div>
      <h3 className='mb-3'>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label='Все' />
        <FormControlLabel control={<Checkbox />} label='1' />
        <FormControlLabel control={<Checkbox />} label='2' />
        <FormControlLabel control={<Checkbox />} label='3' />
      </FormGroup>
    </div>
  );
};

export default Sidebar;
