import CrosshairModel from '../models/Crosshair.model';
import CrosshairLayerRenderer from './CrosshairLayerRenderer';

type Props = {
  crosshair: CrosshairModel;
};

const CrosshairRenderer = ({crosshair}: Props) => {
  return (
    <div>
      {crosshair.layers.map((layer) => (
        <CrosshairLayerRenderer key={layer.id} layer={layer} />
      ))}
    </div>
  );
};

export default CrosshairRenderer; 