import CrosshairSectionModel from './crosshair-section.model';

type CrosshairPlusModel = {
  length: number;
  width: number;
  gap: number;
  rotation: number;
  borderEnabled: boolean;
  borderWidth: number;
  borderColor: string;
  topEnabled: boolean;
  rightEnabled: boolean;
  bottomEnabled: boolean;
  leftEnabled: boolean;
} & CrosshairSectionModel;

export default CrosshairPlusModel;