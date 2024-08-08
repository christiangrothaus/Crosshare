import CrosshairLayerModel from './crosshair-layer.model';

type CrosshairModel = {
  name: string;
  id: number;
  layers: Array<CrosshairLayerModel>
};

export default CrosshairModel;