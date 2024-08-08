import { useState } from 'react';
import styled from 'styled-components';
import { Spacing } from '../../constants/css.constant';

const HandleSize = Spacing.L;

const RailWidth = Spacing.XXL;

const Handle = styled.div<{ value: boolean }>`
  min-height: ${HandleSize};
  min-width: ${HandleSize};
  width: fit-content;
  height: fit-content;
  background-color: ${({ theme }) => theme.text.primary};
  border-radius: 50%;
  transition: transform 0.25s ease-in-out;
  transform: translateX(0%);

  &[value="true"] {
    transform: translateX(calc(${Spacing.XXL} - ${HandleSize}));
  }
`;

const Rail = styled.div<{ value: boolean }>`
  border-radius: ${HandleSize};
  width: ${RailWidth};
  margin: ${Spacing.XS};
  cursor: pointer;
  background: linear-gradient(to left, ${({ theme }) => theme.inputBackground.primary} 50% ,${({ theme }) => theme.accent.primary} 50%) right;
  background-size: 200%;

  transition: box-shadow 0.1s ease-in-out;

  &:hover {
    box-shadow: 0 0 0 ${Spacing.XS} rgba(255, 255, 255, .3);
  }

  &[value="true"] {
    transition: background-position 0.25s ease-in-out;
    background-position: left;
  }

  &[value="false"] {
    transition: background-position 0.25s ease-in-out;
    background-position: right;
  }
`;

const Toggle = () => {
  const [value, setValue] = useState<boolean>(false);

  const handleClick = () => {
    setValue(!value);
  };

  return (
    <Rail value={value} onClick={handleClick}>
      <Handle value={value}></Handle>
      <input hidden type="checkbox" checked={value} />
    </Rail>
  );
};

export default Toggle;