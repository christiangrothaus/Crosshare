import CrosshairDotModel from './CrosshairDot.model';
import CrosshairPlusModel from './CrosshairPlus.model';

type CrosshairLayerModel = {
  id: number;
  name: string;
  zIndex: number;
  dot: CrosshairDotModel;
  plus: CrosshairPlusModel;
  xOffset: number;
  yOffset: number;
};

export default CrosshairLayerModel;