import { PixelRatio, Dimensions as RNDimensions } from 'react-native';

const { width, height } = RNDimensions.get('window');

export const dimensions = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};

export function getScaleValueFromWidthPer(widthPercent) {
  const float = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(dimensions.screenWidth * (float / 100));
}

export const statusBarHeight = getScaleValueFromWidthPer('11%');
