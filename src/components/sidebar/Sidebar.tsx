import { ColorToggleButtonProps } from '../../helper/types/colorToggleButtonType';
import ColorToggleButton from '../ui/color-toggle-button/ColorToggleButton';

const Sidebar = ({ titles }: ColorToggleButtonProps) => {
  return (
    <div>
      <p>ВАЛЮТА</p>
      <ColorToggleButton titles={titles} />
    </div>
  );
};

export default Sidebar;
