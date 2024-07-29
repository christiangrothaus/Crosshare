import CrosshairSectionModel from './CrosshairSection.model';

type CrosshairPlusModel = {
  enabled: boolean;
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
} | CrosshairSectionModel;

export default CrosshairPlusModel;