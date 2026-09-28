/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 */

import { Platform } from 'react-native';

const tintColorLight = '#007F89';
const tintColorDark = '#77E2D7';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    iconDisabled: '#ccc',
    tabIconDefault: '#687076',
    tabIconSselected: tintColorLight,
    border: "#ddd",
  },
  dark: {
    text: '#ECEDEE',
    background: '#063B43',
    tint: tintColorDark,
    icon: '#9BA1A6',
    iconDisabled: '#333',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    border: "#1B626A",
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  }
});
