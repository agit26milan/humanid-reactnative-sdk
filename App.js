import * as React from 'react';
import {View} from 'react-native';
import Core from './Core';
import {HumanIDProvider} from '@human-id/react-native-humanid';

const App = () => {
  return (
    <View>
      <HumanIDProvider />
      <Core />
    </View>
  );
};

export default App;