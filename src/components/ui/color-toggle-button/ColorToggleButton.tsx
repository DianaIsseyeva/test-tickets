import { styled } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import * as React from 'react';
import { ColorToggleButtonProps } from '../../../common/types/colorToggleButtonType';

const ColorToggleButton = ({ titles }: ColorToggleButtonProps) => {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  const CustomToggle = styled(ToggleButton)({
    'color': '#2096f3',
    '&:hover': {
      color: '#2096f3',
      backgroundColor: '#f2fcff',
    },
    '&.Mui-selected:hover': {
      color: '#fff',
      backgroundColor: '#2096f3',
    },
    '&.Mui-selected': {
      color: '#fff',
      backgroundColor: '#2096f3',
    },
  });

  return (
    <ToggleButtonGroup value={alignment} exclusive onChange={handleChange} aria-label='Platform'>
      {titles.map((title, index) => (
        <CustomToggle key={index} value={title}>
          {title}
        </CustomToggle>
      ))}
    </ToggleButtonGroup>
  );
};

export default ColorToggleButton;
