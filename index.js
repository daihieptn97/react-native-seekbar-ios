import {requireNativeComponent} from 'react-native';
import React from 'react';

const CircularSeekerNative = requireNativeComponent('SeekbarIos', null);


export default function CircularSeeker({onUpdate, style, startAngle, endAngle, currentAngle, maxVal, minVal, onComplete, seekBarColor, thumbColor}) {
  return <CircularSeekerNative
    style={style}
    startAngle={startAngle}
    endAngle={endAngle}
    currentAngle={currentAngle}
    maxVal={maxVal}
    minVal={minVal}
    onUpdate={e => onUpdate(e.nativeEvent.progressVal)}
    onComplete={e => onComplete(e.nativeEvent.progressVal)}
    seekBarColor={seekBarColor}
    thumbColor={thumbColor}
  />;
}
