import React from 'react';
import {StyleSheet, View, TouchableHighlight} from 'react-native';
import {Text, CardItem, Body} from 'native-base';

export default function ({card}) {
  const {cardSet, type, text, name, locale} = card;

  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <Text style={styles.text}> Name: {name}</Text>
        <Text style={styles.text}> Type: {type}</Text>
        <Text style={styles.text}> Card Set: {cardSet}</Text>
        <Text style={styles.text}> locate: {locale}</Text>
        <Text style={styles.text}>Text: {text}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    marginTop: 100,
    backgroundColor: '#212142',
    padding: 20,
    height: 465,
  },
  text: {
    color: 'white',
  },
  bold: {
    fontWeight: 'bold',
  },
});
