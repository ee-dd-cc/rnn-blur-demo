/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
  View,
  ImageBackground
} from 'react-native';

import { Header } from 'react-native/Libraries/NewAppScreen';

import { BlurView } from '@sbaiahmed1/react-native-blur';


function App(): React.JSX.Element {

  return (
    <View style={{flex: 1}}>
      <Header />
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
          }}
          style={{ flex: 1, padding: 50 }}
        >
          <BlurView
              style={{
                margin: 20,
                padding: 20,
                borderRadius: 20,
              }}
              blurAmount={20}
              blurType="light"
            >
              <Text>Blur View Demo</Text>
            </BlurView>
        </ImageBackground>
      </View>
    </View>
  );
}

export default App;
