import styled from 'styled-components';
import CrosshairLayerModel from '../models/CrosshairLayer.model';
import CrosshairDotRenderer from './CrosshairDotRenderer';
import CrosshairPlusRenderer from './CrosshairPlusRenderer';

const LayerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Props = {
  layer: CrosshairLayerModel;
};

const CrosshairLayerRenderer = ({layer}: Props) => {
  return (
    <LayerWrapper>
      <CrosshairPlusRenderer plus={layer.plus} />
      <CrosshairDotRenderer dot={layer.dot} />
    </LayerWrapper>
  );
};

export default CrosshairLayerRenderer;