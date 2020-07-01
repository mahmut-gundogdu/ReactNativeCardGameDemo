import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {getAllMechanics} from '../../services/card.service';
import {Text, Card, CardItem} from 'native-base';
import {recordError} from '../../common/log';
import MechanicItem from './MechanicItem';
import {LoadingComponent} from '../../common/LoadingComponent';

export default function MechanicsScreen({navigation}) {
  const [mechanics, setMechanics] = useState([]);

  useEffect(() => {
    getAllMechanics()
      .then(data => setMechanics(data))
      .catch(recordError);
  }, []);

  const handleClick = mechanic => {
    navigation.navigate('Cards', {mechanic});
  };

  const renderItem = ({item}) => (
    <MechanicItem name={item} click={handleClick} />
  );
  const keyExtractor = item => item;

  return (
    <LoadingComponent>
      <Card>
        <CardItem header bordered>
          <Text> Mechanics ({mechanics.length})</Text>
        </CardItem>
        <FlatList
          data={mechanics}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </Card>
    </LoadingComponent>
  );
}
