import { NativeModules } from 'react-native';

type SeekbarIosType = {
  multiply(a: number, b: number): Promise<number>;
};

const { SeekbarIos } = NativeModules;

export default SeekbarIos as SeekbarIosType;
