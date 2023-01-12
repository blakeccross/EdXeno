import { getScaleValueFromWidthPer } from './dimensions';

export const spacing = {
  none: 0,
  tiny: getScaleValueFromWidthPer('1%'),
  smaller: getScaleValueFromWidthPer('2%'),
  small: getScaleValueFromWidthPer('3%'),
  medium: getScaleValueFromWidthPer('5%'),
  mediumPlus: getScaleValueFromWidthPer('7%'),
  large: getScaleValueFromWidthPer('9%'),
  huge: getScaleValueFromWidthPer('10%'),
  massive: getScaleValueFromWidthPer('12%'),
};
