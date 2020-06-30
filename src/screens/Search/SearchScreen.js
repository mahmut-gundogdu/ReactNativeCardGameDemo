import React from 'react';
import {FlatList} from 'react-native';
import {Input, Item, Icon, Text} from 'native-base';
import {debounce} from '../../common/toolkit';
import GameCard from '../components/GameCard';
import {getCardsByName} from '../../services/card.service';

export default class SearchComponent extends React.Component {
  state = {filter: '', cards: []};

  constructor() {
    super();
    this.onChangeText = this.onChangeText.bind(this);
    this.search = this.search.bind(this);
    this.search = debounce(this.search, 1000);
  }

  onChangeText(text) {
    this.setState({filter: text});
    this.search();
  }

  async search() {
    const cards = await getCardsByName(this.state.filter);
    this.setState({cards});
  }


  render() {
    const {filter} = this.state;
    const renderItem = ({item}) => (
      <GameCard {...item}/>
    );
    const keyExtractor = item => item.cardId;
    const cards = this.state.cards;

    return (
      <>
        <Text>{filter}</Text>
        <Item>
          <Input
            onChangeText={this.onChangeText}
            value={filter}
            placeholder={'Search'}
          />
          <Icon name="search" />
        </Item>

        <FlatList
          data={cards}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </>
    );
  }
}
