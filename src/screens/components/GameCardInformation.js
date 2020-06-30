import React from 'react';
import {StyleSheet, View, TouchableHighlight} from 'react-native';
import {Text, CardItem, Body} from 'native-base';

export default function ({card}) {
  const {cardSet, type, text, name, locale} = card;

  return (
    <View style={styles.container}>
      <CardItem bordered>
        <Body>
          <Text style={styles.text}> Name: {name}</Text>
        </Body>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text style={styles.text}> Type: {type}</Text>
        </Body>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text style={styles.text}> Card Set: {cardSet}</Text>
        </Body>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text style={styles.text}> locate: {locale}</Text>
        </Body>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text style={styles.text}>Text: {text}</Text>
        </Body>
      </CardItem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {},
  bold: {
    fontWeight: 'bold',
  },
});
