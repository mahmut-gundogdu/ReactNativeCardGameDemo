import React from 'react';
import {CardItem, Right, Icon, Text, Body} from 'native-base';
import {TouchableWithoutFeedback} from 'react-native';

export default function MechanicItem({name, click}) {
  return (
    <TouchableWithoutFeedback onPress={() => click(name)}>
      <CardItem>
        <Body>
          <Text>{name}</Text>
        </Body>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </CardItem>
    </TouchableWithoutFeedback>
  );
}
