import { dark } from '@/theme/dark';
import { vscodeDarkInit } from '@uiw/codemirror-theme-vscode';
export const cmOptions = {
    className: 'text-base',
    maxHeight: '100%',
    height: '100%',
    theme: vscodeDarkInit({ settings: dark }),
};