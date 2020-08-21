# react-native-seekbar-ios

Not working in android

## Installation

```sh
yarn install react-native-seekbar-ios
```

## Usage

```js
import CircularSeeker from 'react-native-seekbar-ios';

// ...

<CircularSeeker
            style={{width: 300, height: 300}}
            startAngle={180}
            endAngle={0}
            currentAngle={180}
            maxVal={30}
            minVal={16}
            onUpdate={e => console.log('onUpdate', e)}
            onComplete={e => console.log('onComplete', e)}
            seekBarColor="gray"
            thumbColor="green"
        />
```
## License

HIEP && QUAN
