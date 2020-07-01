import React, {useState, useEffect} from 'react';
import {FlatList, Text, TouchableWithoutFeedback} from 'react-native';
import {getCardsByMechanics} from '../../services/card.service';
import {recordError} from '../../common/log';
import {Card, CardItem} from 'native-base';
import GameCard from '../components/GameCard';
import {LoadingComponent} from '../../common/LoadingComponent';

export default function CardListScreen({route}) {
  const {mechanic} = route.params;
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCardsByMechanics(mechanic)
      .then(data => setCards(data))
      .catch(recordError);
  }, [mechanic]);

  const keyExtractor = item => item.cardId;
  const renderItem = ({item, index}) => <GameCard {...item} index={index} />;

  return (
    <>
      <LoadingComponent>
        <Card>
          <CardItem header bordered>
            <Text>
              Cards of '{mechanic}" ({cards.length})
            </Text>
          </CardItem>
        </Card>

        <FlatList
          data={cards}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </LoadingComponent>
    </>
  );
}
