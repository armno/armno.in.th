import terminal from '../pages/uses/content/_terminal.jpg';
import vscode from '../pages/uses/content/_vscode.jpg';
import macbook from '../pages/uses/content/_macbook-air-m2.jpg';
import monitor from '../pages/uses/content/_monitor.jpg';
import keyboard from '../pages/uses/content/_corne-low-profile-mbk-keycaps.jpg';
import headphones from '../pages/uses/content/_headphones.jpg';
import bike from '../pages/uses/content/_lapierre-xelius-sl-2016.jpg';

export type UseImage = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const usesImages: UseImage[] = [
  { id: 'terminal',    src: terminal.src,    alt: 'Ghostty terminal',              width: terminal.width,    height: terminal.height },
  { id: 'code-editor', src: vscode.src,      alt: 'Cursor code editor',            width: vscode.width,      height: vscode.height },
  { id: 'macbook',     src: macbook.src,     alt: '13-inch Macbook Air M2',        width: macbook.width,     height: macbook.height },
  { id: 'monitor',     src: monitor.src,     alt: 'Samsung 28-inch UR55 monitor',  width: monitor.width,     height: monitor.height },
  { id: 'keyboard',    src: keyboard.src,    alt: 'Corne wireless split keyboard', width: keyboard.width,    height: keyboard.height },
  { id: 'headphones',  src: headphones.src,  alt: 'Headphones',                    width: headphones.width,  height: headphones.height },
  { id: 'bike',        src: bike.src,        alt: '2016 Lapierre Xelius SL',       width: bike.width,        height: bike.height },
];
