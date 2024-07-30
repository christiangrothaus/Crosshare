import styled from 'styled-components';
import CrosshairDotModel from '../models/CrosshairDot.model';

const DotElement = styled.div<{dot: CrosshairDotModel}>`
  min-width: ${props => props.dot.diameter}px;
  min-height: ${props => props.dot.diameter}px;
  background-color: ${props => props.dot.color};
  border-radius: 50%;
  position: absolute;
  opacity: ${props => props.dot.opacity};
`;

type Props = {
  dot: CrosshairDotModel;
};

const CrosshairDotRenderer = ({dot}: Props) => {
  return (
    <DotElement dot={dot}></DotElement>
  );
};

export default CrosshairDotRenderer;