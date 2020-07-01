import {axiosInstance} from '../../axios.config';

import {
  mockResponse,
  mockResponseForGetAllMechanics,
  mockResponseForGetCardsByName,
} from './card.service.mock';
import {
  getAllMechanics,
  getCardAllCards,
  getCardsByMechanics,
  getCardsByName,
} from './card.service';

jest.mock('../../axios.config');

describe('Card Service Test', () => {
  describe('getCardAllCards called then', () => {
    describe('When it has twe item. two have "mechanics"', () => {
      let result;
      beforeAll(async () => {
        axiosInstance.get.mockClear();
        axiosInstance.get.mockResolvedValue(mockResponse);
        result = await getCardAllCards();
      });

      it('should return two item"', () => {
        expect(result.length).toBe(2);
      });

      it('should has property that has name "mechanics"', () => {
        expect(result.every(x => !!x.mechanics)).toBeTruthy();
      });

      it('should called axios.get', () => {
        expect(axiosInstance.get).toBeCalled();
      });

      it('should called axios.get one times', () => {
        expect(axiosInstance.get).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('getAllMechanics Test', () => {
    let result;
    beforeAll(async () => {
      axiosInstance.get.mockClear();
      axiosInstance.get.mockResolvedValue(mockResponseForGetAllMechanics);
      result = await getAllMechanics();
    });

    it('should have 2 item', () => {
      expect(result.length).toBe(2);
    });

    it('should be flat array', () => {
      result.forEach(item => {
        expect(typeof item).toBe('string');
      });
    });
    it('should be unique', () => {
      const uniqueArray = result.filter(
        (item, index) => result.indexOf(item) === index,
      );
      expect(uniqueArray.length).toBe(result.length);
    });
  });

  describe('getCardsByMechanics Test', () => {
    let result;
    const mechanic = 'Taunt';
    const expectedItemCount = 2;
    beforeAll(async () => {
      axiosInstance.get.mockResolvedValue(mockResponse);
      result = await getCardsByMechanics(mechanic);
    });

    it(`should have ${expectedItemCount} item/s`, () => {
      expect(result.length).toBe(expectedItemCount);
    });
    it('should has mechanic that name is "${mechanic}"', () => {
      const allIsOk = result.every(x =>
        x.mechanics.some(m => m.name === mechanic),
      );
      expect(allIsOk).toBe(true);
    });
  });
  describe('getCardsByName Test', () => {
    let result;
    const name = 'Ances';
    const expectedItemCount = 5; //there is 7 item. 5 of has "merchanic"
    beforeAll(async () => {
      axiosInstance.get.mockClear();
      axiosInstance.get.mockResolvedValue(mockResponseForGetCardsByName);
      result = await getCardsByName(name);
    });

    it('should called axios.get one times', () => {
      expect(axiosInstance.get).toHaveBeenCalledTimes(1);
    });

    it(`should have ${expectedItemCount} items`, () => {
      expect(result).toBeTruthy();
      expect(result.length).toBe(expectedItemCount);
    });
  });
});
