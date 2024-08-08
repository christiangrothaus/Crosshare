import CrosshairModel from '../models/crosshair.model';
import CrosshairLayerRenderer from './CrosshairLayerRenderer';

type Props = {
  crosshair: CrosshairModel;
};

const CrosshairRenderer = ({ crosshair }: Props) => {
  return (
    <div>
      {crosshair.layers.map((layer) => (
        <CrosshairLayerRenderer key={layer.name} layer={layer} />
      ))}
    </div>
  );
};

export default CrosshairRenderer; 