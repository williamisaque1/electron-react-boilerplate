import { contextBridge, ipcRenderer } from 'electron';
import { Channels } from 'main/preload';

import all from '../models/querys';
const getItems = () => {
  alert('jj');
  return all.getAll();
};
contextBridge.exposeInMainWorld('api', {
  getAll: () => ipcRenderer.send('do-a-thing'),
  getgg: () => ipcRenderer.send('eiii'),
});

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        sendMessage(channel: Channels, args: unknown[]): void;
        on(
          channel: string,
          func: (...args: unknown[]) => void
        ): (() => void) | undefined;
        once(channel: string, func: (...args: unknown[]) => void): void;
      };
    };
    api: {
      ipcRenderer: {
        getgg(): string;
        on(): void;
        once(channel: string, func: (...args: unknown[]) => void): void;
      };
    };
  }
}

export {};
