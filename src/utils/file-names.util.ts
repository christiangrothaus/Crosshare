import CrosshairModel from '../models/crosshair.model';

export const buildCrosshairFileName = (crosshair: CrosshairModel) => {
  return `${crosshair.name}-${crosshair.id}`;
};