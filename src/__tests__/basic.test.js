import sortByHealth from '../index';

const characterInfoFirst = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 90 },
  { name: 'лучник', health: 80 },
];

const characterInfoSecond = [
  { name: 'мечник', health: 100 },
  { name: 'маг', health: 20 },
  { name: 'лучник', health: 50 },
];

const characterInfoThird = [
  { name: 'мечник', health: 90 },
  { name: 'маг', health: 90 },
  { name: 'лучник', health: 80 },
];


test('sorting characterInfoFirst', () => {
  expect(characterInfoFirst.sort(sortByHealth)).toEqual(characterInfoFirst);
});

test('sorting characterInfoSecond', () => {
  expect(characterInfoSecond.sort(sortByHealth)).toEqual(characterInfoSecond);
});

test('sorting characterInfoThird', () => {
  expect(characterInfoThird.sort(sortByHealth)).toEqual(characterInfoThird);
});