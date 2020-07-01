import React from 'react';
import {StyleSheet} from 'react-native';
import {Spinner} from 'native-base';
import {Dimensions} from 'react-native';
import {useLoader} from '../../axios.config';

let ScreenHeight = Dimensions.get('window').height;

export const LoadingComponent = ({children}) => {
  const [loading] = useLoader();

  const content = loading ? <Spinner style={styles.spinner} /> : children;
  return <>{content}</>;
};

const styles = StyleSheet.create({
  spinner: {
    height: ScreenHeight,
  },
});
