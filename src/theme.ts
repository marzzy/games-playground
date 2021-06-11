type tBreakpointValues = {
  [key : string]: number
};
type tColors = {
  [themeKey in 'light' | 'dark']: {
    [key : string]: {
      [shadeKey: string ]: string
    }
  }
};

const breakpointValues: tBreakpointValues = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

const otherColors = {
  black: '#000',
  white: '#fff',
  gray: {
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
};

const colors: tColors = {
  dark: {
    main: {
      normal: '#022c43', dark30: '#011f2f', light30: '#4e6b7b', contrastColor: otherColors.white,
    },
    secound: {
      normal: '#053f5e', dark30: '#042c42', light30: '#add6de', contrastColor: otherColors.white,
    },
    tertiary: {
      normal: '#115173', dark30: '#0c3951', light30: '#58859d', contrastColor: otherColors.white,
    },
    complementary: {
      normal: '#ffd700', dark30: '#b39700', light30: '#ffe34d', contrastColor: otherColors.black,
    },
    error: { normal: '#d32f2f', contrastColor: otherColors.white },
    warning: { normal: '#f57c00', contrastColor: otherColors.black },
    info: { normal: '#1976d2', contrastColor: otherColors.white },
    success: { normal: '#388e3c', contrastColor: otherColors.white },
  },
  light: {
    main: {
      normal: '#28527a', dark30: '#1c3955', light30: '#6986a2', contrastColor: otherColors.white,
    },
    secound: {
      normal: '#8AC4D0', dark30: '#618992', light30: '#50798e', contrastColor: otherColors.white,
    },
    tertiary: {
      normal: '#f4d160', dark30: '#ab9243', light30: '#f7df90', contrastColor: otherColors.black,
    },
    complementary: {
      normal: '#fbeeac', dark30: '#b0a778', light30: '#fcf3c5', contrastColor: otherColors.black,
    },
    error: { normal: '#e57373', contrastColor: otherColors.black },
    warning: { normal: '#ffb74d', contrastColor: otherColors.black },
    info: { normal: '#64b5f6', contrastColor: otherColors.white },
    success: { normal: '#81c784', contrastColor: otherColors.black },
  },
};

const theme = {
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: (breakpointKey: string) => `@media (min-width:${breakpointValues[breakpointKey]}px)`,
  },
  borders: {
    normal: '1px solid',
  },
  palette: {
    common: {
      ...otherColors,
    },
    ...colors,
    actions: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: '0.04',
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: '0.08',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: '0.38',
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: '0.12',
      activatedOpacity: '0.12',
    },
  },
};

export default theme;
