import { useRef, useState } from 'react';
import styled from 'styled-components';
import { Spacing } from '../../constants/css.constant';

type Props = {
  max: number
};

const HandleSize = Spacing.M;

const Rail = styled.div`
  border-radius: ${Spacing.L};
  width: ${Spacing.XXL};
  margin: ${Spacing.XS};
  background: linear-gradient(to left, ${({ theme }) => theme.inputBackground.primary} 50% ,${({ theme }) => theme.accent.primary} 50%) right;
  background-size: 200%;
  transition: box-shadow 0.1s ease-in-out;
  width: auto;

  &:hover {
    box-shadow: 0 0 0 ${Spacing.XS} rgba(255, 255, 255, .3);
  }
`;

const Handle = styled.div<{ value: number, max: number }>`
  min-height: ${HandleSize};
  min-width: ${HandleSize};
  width: fit-content;
  height: fit-content;
  background-color: ${({ theme }) => theme.text.primary};
  border-radius: 50%;
  cursor: pointer;
  margin-left: calc(${props => (props.value / props.max) * 100}% - ${HandleSize});

  &:active {
    cursor: ew-resize;
  }
`;

const RangeSlider = ({ max }: Props) => {
  const handleRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<number>(10);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleMouseDown = () => {
    const handleMouseMove = (e: MouseEvent) => {
      const newValue = Math.min(max, Math.max(0, Math.round(e.clientX / (railRef.current.clientWidth + 16) * max)));
      setValue(newValue);
      console.log(e.clientX / railRef.current.clientWidth);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    setIsDragging(true);
  };

  return (
    <Rail ref={railRef}>
      <Handle ref={handleRef} value={value} max={max} onMouseDown={handleMouseDown} />
      <input hidden type="range" min="0" max={max} value={value} />
    </Rail>
  );
};

export default RangeSlider;