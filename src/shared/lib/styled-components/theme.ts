const defaultTheme = {
  mode: 'default',
  fontSizes: {
    8: '0.5rem',
    12: '0.75rem',
    16: '1rem',
    20: '1.25rem',
    24: '1.5rem',
    28: '1.75rem',
    32: '2rem',
    36: '2.25rem',
    40: '2.5rem',
    44: '2.75rem',
    48: '3rem',
    52: '3.25rem',
    56: '3.5rem',
    60: '3.75rem',
    64: '4rem',
    68: '4.25rem',
    72: '4.5rem',
    76: '4.75rem',
    80: '5rem',
    84: '5.25rem',
    88: '5.5rem',
    160: '10rem',
    200: '12.5rem',
  },
  fontWeights: {
    body: 400,
    subheading: 500,
    link: 600,
    bold: 700,
    heading: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.3,
    code: 1.6,
  },
  colors: {
    lightBlue: '#9dbefd',
    blue: '#3877ee',
    blackBlue: '#42567a',
    purple: '#ef5da8',
    independence: '#42567a',
    subhead: '#ff0002',
  },
};

export const lightTheme = {
  ...defaultTheme,
  mode: 'light',
  bg: {
    primary: '#f9fafc',
    surface: '#ffffff',
    inset: '#f1f2f4',
    input: '#e1e2e6', // approx rgba(65, 67, 78, 0.08)
    vice: '#e2e4e8',
    transparent: '#ffffff00',
    logo: '#171717',
  },
  text: {
    primary: '#42567a', // blackBlue
    secondary: '#2f3037',
    tertiary: '#5c5f6e',
    placeholder: '#d2d3d8', // approx rgba(82, 85, 96, 0.5)
    onPrimary: '#ffffff',
    link: '#3877ee', // blue
    accent: '#ef5da8', // purple
    lightBlue: '#9dbefd',
    blue: '#3877ee',
    blackBlue: '#42567a',
    purple: '#ef5da8',
    independence: '#42567a',
    inverse: '#e6e8ec',
    shine: '#adcfff',
  },
};

export const darkTheme = {
  ...defaultTheme,
  mode: 'dark',
  bg: {
    primary: '#121212',
    surface: '#1d1d1d',
    inset: '#2a2a2e',
    input: '#2e2e2e', // approx rgba(255, 255, 255, 0.08)
    vice: '#2f3037',
    transparent: '#ffffff00',
    logo: '#171717',
  },
  text: {
    primary: '#e6e8ec', // bright neutral for main text
    secondary: '#c1c3c9', // slightly dimmer
    tertiary: '#a3a5b2',
    placeholder: '#c8cad2', // soft gray (rgba(200, 200, 210, 0.4) in hex)
    onPrimary: '#ffffff',
    inverse: '#42567a', // for use on light surfaces (like cards in dark mode)
    blue: '#7ca7ff', // lighter tone for visibility on dark bg
    lightBlue: '#adcfff', // softer but still legible
    purple: '#ff77c2', // brightened from #ef5da8
    blackBlue: '#9baacf', // lightened #42567a
    independence: '#9baacf', // same as blackBlue if keeping same identity
    accent: '#ff77c2', // alias of purple for now
    link: '#7ca7ff', // alias of blue
    shine: '#adcfff',
  },
};

export default lightTheme;
