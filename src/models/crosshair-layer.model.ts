import CrosshairDotModel from './crosshair-dot.model';
import CrosshairPlusModel from './crosshair-plus.model';

type CrosshairLayerModel = {
  name: string;
  zIndex: number;
  dot: CrosshairDotModel;
  plus: CrosshairPlusModel;
  xOffset: number;
  yOffset: number;
};

export default CrosshairLayerModel;