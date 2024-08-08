import { ipcMain } from 'electron';
import LocalStorageChannels from '../channels/local-storage.channels';
import { loadAllCrosshairs, loadPreferences, saveCrosshair, savePreferences } from '../utils/local-storage.util';

const buildStorageHandlers = (): void => {
  ipcMain.handle(LocalStorageChannels.LoadPreferences, async () => {
    return loadPreferences();
  });
  
  ipcMain.handle(LocalStorageChannels.SavePreferences, async (event, args) => {
    return savePreferences(args[0]);
  });
  
  ipcMain.handle(LocalStorageChannels.LoadAllCrosshairs, async () => {
    return loadAllCrosshairs();
  });

  ipcMain.handle(LocalStorageChannels.SaveCrosshair, async (event, args) => {
    return saveCrosshair(args[0]);
  });
};

export default buildStorageHandlers;