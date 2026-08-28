import terminal from '../pages/uses/content/2026-terminal.png';
import claudeCode from '../pages/uses/content/2026-claude-code.png';
import hunk from '../pages/uses/content/2026-hunk.png';
import zed from '../pages/uses/content/2026-zed.png';
import shell from '../pages/uses/content/2026-shell.png';
import browser from '../pages/uses/content/2026-helium-chrome.png';
import graphics from '../pages/uses/content/2026-image-apps.png';
import raycast from '../pages/uses/content/2026-raycast.jpg';
import macbook from '../pages/uses/content/_macbook-air-m2.jpg';
import monitor from '../pages/uses/content/_monitor.jpg';
import headphones from '../pages/uses/content/2026-sony-xm4.jpg';
import camera from '../pages/uses/content/xt20.jpg';

export type UseImage = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const usesImages: UseImage[] = [
  { id: 'terminal',        src: terminal.src,    alt: 'Ghostty terminal',              width: terminal.width,    height: terminal.height },
  { id: 'ai-coding-agent', src: claudeCode.src,  alt: 'Claude Code',                   width: claudeCode.width,  height: claudeCode.height },
  { id: 'diff-tools',      src: hunk.src,        alt: 'Hunk diff tool',                width: hunk.width,        height: hunk.height },
  { id: 'code-editor',     src: zed.src,         alt: 'Zed code editor',               width: zed.width,         height: zed.height },
  { id: 'shell-prompt',    src: shell.src,       alt: 'Zsh with Starship prompt',      width: shell.width,       height: shell.height },
  { id: 'browser',         src: browser.src,     alt: 'Helium and Chrome browsers',    width: browser.width,     height: browser.height },
  { id: 'graphics',        src: graphics.src,    alt: 'CleanShot X and Pixelmator Pro', width: graphics.width,    height: graphics.height },
  { id: 'productivity-tools', src: raycast.src,  alt: 'Raycast',                       width: raycast.width,     height: raycast.height },
  { id: 'macbook',         src: macbook.src,     alt: '13-inch Macbook Air M2',        width: macbook.width,     height: macbook.height },
  { id: 'monitor',         src: monitor.src,     alt: 'Samsung 28-inch UR55 monitor',  width: monitor.width,     height: monitor.height },
  { id: 'headphones',      src: headphones.src,  alt: 'Sony WH-1000XM4 headphones',    width: headphones.width,  height: headphones.height },
  { id: 'utilities',       src: camera.src,      alt: 'Fujifilm X-T20',                width: camera.width,      height: camera.height },
];
