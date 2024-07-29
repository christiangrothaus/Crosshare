import CrosshairLayerModel from './CrosshairLayer.model';

type CrosshairModel = {
  name: string;
  id: number;
  layerId: number;
  layers: Array<CrosshairLayerModel>
};

export default CrosshairModel;