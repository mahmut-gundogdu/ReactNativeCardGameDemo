import searchData from './search.json';

export const mockResponse = {
  data: {
    a: [
      {
        cardId: 'GAME_004',
        dbfId: '1740',
        name: 'AFK',
        cardSet: 'Basic',
        type: 'Enchantment',
        text: 'Your turns are shorter.',
        playerClass: 'Neutral',
        locale: 'enUS',
      },
    ],
    b: [
      {
        cardId: 'CS2_041e',
        dbfId: '1853',
        name: 'Ancestral Infusion',
        cardSet: 'Basic',
        type: 'Enchantment',
        text: 'Taunt.',
        playerClass: 'Shaman',
        locale: 'enUS',
        mechanics: [
          {
            name: 'Taunt',
          },
        ],
      },
      {
        cardId: 'CS2_046e',
        dbfId: '1096',
        name: 'Bloodlust',
        cardSet: 'Basic',
        type: 'Enchantment',
        text: '+3 Attack this turn.',
        playerClass: 'Shaman',
        locale: 'enUS',
        mechanics: [
          {
            name: 'OneTurnEffect',
          },
          {
            name: 'Taunt',
          },
        ],
      },
    ],
  },
};

export const mockResponseForGetAllMechanics = {
  data: {
    a: [{mechanics: [{name: 'Taunt'}]}],
    b: [
      {mechanics: [{name: 'OneTurnEffect'}]},
      {mechanics: [{name: 'Taunt'}, {name: 'OneTurnEffect'}]},
    ],
  },
};

export const mockResponseForGetCardsByName = searchData;
