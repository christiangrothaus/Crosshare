import { contextBridge, ipcRenderer } from 'electron';
import LocalStorageChannels from './channels/local-storage.channels';
import CrosshairModel from './models/crosshair.model';
import PreferencesModel from './models/preferences.model';

// Add api to window object typing
declare global {
  interface Window {
    api: typeof api;
  }
}

export const api = {
  loadPreferences: async (): Promise<PreferencesModel> => await ipcRenderer.invoke(LocalStorageChannels.LoadPreferences),
  savePreferences: async (preferences: PreferencesModel): Promise<void> => await ipcRenderer.invoke(LocalStorageChannels.SavePreferences, preferences),
  loadAllCrosshairs: async (): Promise<Array<CrosshairModel>> => await ipcRenderer.invoke(LocalStorageChannels.LoadAllCrosshairs),
  saveCrosshair: async (crosshair: CrosshairModel): Promise<void> => await ipcRenderer.invoke(LocalStorageChannels.SaveCrosshair, crosshair)
};

contextBridge.exposeInMainWorld('api', api);