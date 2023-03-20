const sizeUnit: number = 16;

const sizes = {
  text: {
    xs: sizeUnit / 4,
    sm: sizeUnit * .75,
    md: sizeUnit,
    lg: sizeUnit * 2,
  },
  heading: {
    xs: (sizeUnit * 2) / 4,
    sm: (sizeUnit * 2) / 2,
    md: (sizeUnit * 2),
    lg: (sizeUnit * 2) * 2,
  },
  borderRadius: {
    xs: sizeUnit / 4,
    sm: sizeUnit / 2,
    md: sizeUnit,
    lg: sizeUnit * 2,
  },
  spacing: {
    xs: sizeUnit / 4,
    sm: sizeUnit / 2,
    md: sizeUnit,
    lg: sizeUnit * 2,
    xl: sizeUnit * 4,
  },
  inputHeight: {
    sm: 20,
    md: 40,
    lg: 80,
  }
};
export default sizes;
