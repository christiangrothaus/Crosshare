import CrosshairSectionModel from './crosshair-section.model';

type CrosshairDotModel = {
  diameter: number;
  borderEnabled: boolean;
  borderWidth: number;
  borderColor: string;
} & CrosshairSectionModel;

export default CrosshairDotModel;