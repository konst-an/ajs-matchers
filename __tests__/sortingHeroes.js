import sortHeroes from '../src/sortingHeroes.js';

const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const sortedHeroes = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('heroes сортируются по здоровью по убыванию', () => {
    const result = sortHeroes(heroes);
    expect(result).toEqual(sortedHeroes);
});