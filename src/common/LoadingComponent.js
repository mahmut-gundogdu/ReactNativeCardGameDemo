import React from 'react';
import {StyleSheet} from 'react-native';
import {Spinner} from 'native-base';
import {Dimensions} from 'react-native';

let ScreenHeight = Dimensions.get('window').height;

export default function LoadingComponent() {
  return <Spinner style={styles.spinner} />;
}

const styles = StyleSheet.create({
  spinner: {
    height: ScreenHeight,
  },
});
