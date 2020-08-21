import { NativeModules } from 'react-native';
// import { CircularSeeker } from "./../index.js"
type SeekbarIosType = {
  multiply(a: number, b: number): Promise<number>;
};

const { SeekbarIos } = NativeModules;

export default SeekbarIos as SeekbarIosType;
// export {CircularSeeker}
