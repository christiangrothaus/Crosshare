import styled from 'styled-components';
import CrosshairModel from '../models/crosshair.model';
import CrosshairRenderer from './CrosshairRenderer';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8em;
  background-color: #f0f0f0;
`;

const mockCrosshair: CrosshairModel = {
  name: 'Default',
  id: 1,
  layers: [
    {
      name: 'Default',
      zIndex: 1,
      dot: {
        color: '#ff0000',
        opacity: 0,
        diameter: 2,
        borderEnabled: false,
        borderWidth: 0,
        borderColor: '#000000'
      },
      plus: {
        color: '#00ff00',
        opacity: 1,
        length: 10,
        width: 2,
        gap: 1,
        rotation: 0,
        borderEnabled: false,
        borderWidth: 0,
        borderColor: '#000000',
        topEnabled: true,
        rightEnabled: true,
        bottomEnabled: true,
        leftEnabled: true
      },
      xOffset: 0,
      yOffset: 0
    }
  ]
};

const CrosshairPreview = () => {
  return (
    <Wrapper>
      <CrosshairRenderer crosshair={mockCrosshair} />
    </Wrapper>
  );
};

export default CrosshairPreview;