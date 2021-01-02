import { Platform, StatusBar, Dimensions } from 'react-native';
import options from './core/options';
import {Countries, FlagType} from './modules/Login/Login.interface';
import {isIphoneX} from 'react-native-iphone-x-helper';

const countries: Countries = require('../assets/json/countries.json');

export function checkClient() {
  if (
    options.clientId === null ||
    !options.clientId?.length ||
    options.clientSecret === null ||
    !options.clientSecret?.length
  ) {
    throw new Error(
      'ClientId and ClientSecret must filled! get the appId and appSecret by dropping us an email developers@human-id.org.'
    );
  } else if (options.appName === null || !options.appName?.length) {
    throw new Error('HumanID need your application name, please fill your application name');
  } else if (options.Icon === null) {
    throw new Error('HumanID need your application logo, please fill your application logo');
  }
}

export function getDialCode(countryCode: FlagType) {
  return countries[countryCode]?.dialCode;
}

export function getCountry(countryCode: FlagType) {
  return countries[countryCode];
}

const { height, width } = Dimensions.get('window');
const standardLength = width > height ? width : height;

const offset =
  width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait

const deviceHeight =
  Platform.OS === 'android' || isIphoneX()
    ? standardLength - offset!
    : standardLength;

export function RFPercentage(percent: number) {
  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}

// guideline height for standard 5" device screen is 680
export function RFValue(fontSize: number, standardScreenHeight = 720) {
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}
