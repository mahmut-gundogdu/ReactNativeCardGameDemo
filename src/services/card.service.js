import axios from 'axios';
import {getUniqueArray} from '../common/toolkit';

import {AsyncStorage} from 'react-native';

export async function getCardAllCards() {
  // //TO DO DELETE ASYNCStorage. it is only for fast development.
  // const storedCards = await AsyncStorage.getItem('cards');
  // if (storedCards) {
  //   return JSON.parse(storedCards);
  // }
  const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards';
  const {data} = await axios.get(url);
  const cards = Object.keys(data).reduce((totalItems, key) => {
    return [...totalItems, ...data[key]];
  }, []);
  const result = cards.filter(x => !!x.mechanics);
  // await AsyncStorage.setItem('cards', JSON.stringify(result));
  return result;
}

export async function getAllMechanics() {
  const cards = await getCardAllCards();
  const rawMechanicList = cards.map(x => x.mechanics.map(y => y.name)).flat();

  return getUniqueArray(rawMechanicList);
}

export async function getCardsByMechanics(mechanic) {
  const cards = await getCardAllCards();
  return cards.filter(x => x.mechanics.some(y => y.name === mechanic));
}

export async function getCardsByName(name) {
  if (!name) {
    return;
  }
  const url = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${name}`;
  const {data} = await axios.get(url);
  return data.filter(x => !!x.mechanics);
}
