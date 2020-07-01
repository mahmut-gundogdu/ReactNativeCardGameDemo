import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  View,
  Animated,
} from 'react-native';
import {Card, CardItem, Text} from 'native-base';
import useHttps from '../../common/useHttps';
import GameCardInformation from './GameCardInformation';

export default function(card) {
  const {name, img} = card;
  const [isDetailVisible, setDetailVisibility] = useState(false);

  const toggle = () => {
    flipCard();
  };

  const image = img
    ? {uri: useHttps(img)}
    : require('../../assets/noImageFound.png');

  const animatedValue = new Animated.Value(0);
  let value = 0;
  animatedValue.addListener(x => {
    value = x.value;
  });

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });
  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimatedStyle = {
    transform: [{rotateY: frontInterpolate}],
  };

  const backAnimatedStyle = {
    transform: [{rotateY: backInterpolate}],
  };

  const flipCard = () => {
    if (value >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
      }).start();
    }
  };

  return (
    <Card>
      <CardItem header bordered>
        <Text style={styles.text}>{name}</Text>
      </CardItem>
      <TouchableWithoutFeedback onPress={toggle}>
        <CardItem style={styles.imageContainer}>
          <Animated.View
            style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack]}>
            <GameCardInformation card={card} />
          </Animated.View>

          <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
            <Image source={image} style={styles.image} resizeMode="contain" />
          </Animated.View>
        </CardItem>
      </TouchableWithoutFeedback>
    </Card>
  );
}
const imageSize = {w: 307, h: 465};
const width = Dimensions.get('window').width;
const height = (width * imageSize.h) / imageSize.w;

const styles = StyleSheet.create({
  text: {
    flex: 1,
    textAlign: 'center',
  },
  image: {
    width: width,
    height: height,
  },
  imageContainer: {
    flex: 1,
    width: width,
    height: height,
    alignItems: 'flex-start',
  },

  flipCard: {
    width: width,
    height: height,

    backfaceVisibility: 'hidden',
  },
  flipCardBack: {

    position: 'absolute',
    top: 0,
  },
});
