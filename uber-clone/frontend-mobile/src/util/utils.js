import { Platform, PixelRatio } from 'react-native';

export function getPixelSize(pixels){

    Platform.select({

        ios: pixels,

        android: PixelRatio.getPixelSizeForLayoutSize(pixels)
    });
}