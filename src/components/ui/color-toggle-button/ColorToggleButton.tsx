import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import * as React from 'react';
import { ColorToggleButtonProps } from '../../../common/types/colorToggleButtonType';

const ColorToggleButton = ({ titles }: ColorToggleButtonProps) => {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup color='primary' value={alignment} exclusive onChange={handleChange} aria-label='Platform'>
      {titles.map((title, index) => (
        <ToggleButton key={index} value={title}>
          {title}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default ColorToggleButton;
