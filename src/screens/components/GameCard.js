import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {Card, CardItem, Text} from 'native-base';
import useHttps from '../../common/useHttps';
import GameCardInformation from './GameCardInformation';
import CardFlip from 'react-native-card-flip';


export default function (card) {
  const {name, img} = card;
  const [isDetailVisible, setDetailVisibility] = useState(false);

  const toggle = () => {
    setDetailVisibility(!isDetailVisible);
  };

  const image = img
    ? {uri: useHttps(img)}
    : require('../../assets/noImageFound.png');

  return (
    <Card>
      <CardItem header bordered>
        <Text style={styles.text}>{name}</Text>
      </CardItem>
      <TouchableWithoutFeedback onPress={toggle}>
        <CardItem style={styles.imageContainer}>
          {isDetailVisible ? (
            <GameCardInformation card={card}/>
          ) : (
            <Image source={image} style={styles.image} resizeMode="contain"/>
          )}
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
    width: width,
    height: height,
    alignItems: 'flex-start',
  },
});
