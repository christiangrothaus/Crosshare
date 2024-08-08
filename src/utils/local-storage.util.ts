import fs from 'fs';
import CrosshairModel from '../models/crosshair.model';
import PreferencesModel from '../models/preferences.model';
import { buildCrosshairFileName } from './file-names.util';

export const saveCrosshair = (crosshair: CrosshairModel) => {
  try {
    fs.writeFileSync(`crosshairs/${buildCrosshairFileName(crosshair)}.json`, JSON.stringify(crosshair));
  } catch (error) {
    console.error(error);
  }
};

export const loadAllCrosshairs = (): Array<CrosshairModel> => {
  try {
    return fs.readdirSync('crosshairs').map((file) => {
      return JSON.parse(fs.readFileSync(`crosshairs/${file}`).toString());
    });
  } catch (error) {
    return [];
  }
};

export const loadPreferences = (): PreferencesModel => {
  try {
    return JSON.parse(fs.readFileSync('preferences.json').toString());
  } catch (error) {
    return {
      currentCrosshairFileName: ''
    };
  }
};

export const savePreferences = (preferences: PreferencesModel) => {
  try {
    fs.writeFileSync('preferences.json', JSON.stringify(preferences));
  } catch (error) {
    console.error(error);
  }
};