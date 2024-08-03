import { useState } from 'react';
import styled from 'styled-components';
import { Spacing } from '../../constants/css';

const SlideSize = Spacing.L;

const RailWidth = Spacing.XXL;

// const Slider = styled.div<{value: boolean}>`
//   min-height: ${SlideSize};
//   min-width: ${SlideSize};
//   width: fit-content;
//   height: fit-content;
//   background-color: ${({ theme }) => theme.text.primary};
//   border-radius: 50%;
//   animation-duration: 0.25s;
//   transition: all 0.25s ease-in-out;
//   animation-fill-mode: forwards;
//   animation-name: ${props => props.value ? SlideRight : SlideLeft};
// `;

const Slider = styled.div<{value: boolean}>`
  min-height: ${SlideSize};
  min-width: ${SlideSize};
  width: fit-content;
  height: fit-content;
  background-color: ${({ theme }) => theme.text.primary};
  border-radius: 50%;
  transition: transform 0.25s ease-in-out;
  transform: translateX(0%);

  &[value="true"] {
    transform: translateX(calc(${Spacing.XXL} - ${SlideSize}));
  }
`;

const Rail = styled.div<{value: boolean}>`
  border-radius: ${SlideSize};
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
      <Slider value={value}></Slider>
      <input hidden type="checkbox" />
    </Rail>
  );
};

export default Toggle;