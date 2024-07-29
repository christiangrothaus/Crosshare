import CrosshairSectionModel from './CrosshairSection.model';

type CrosshairDotModel = {
  diameter: number;
  borderEnabled: boolean;
  borderWidth: number;
  borderColor: string;
} | CrosshairSectionModel;

export default CrosshairDotModel;