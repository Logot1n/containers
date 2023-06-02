import Team from '../js/set';
import ErrorRepository from '../js/Map';
import Settings from '../js/MapStar';

describe('Team', () => {
  class Character {
    constructor(type, lvl) {
        this.type = type;
        this.lvl = lvl;
    }
  }
  
  test('check add character', () => {
    
    const team = new Team();
    const user1 = new Character('Warrior', 10);
  
    team.add(user1);
    expect(team.toArray()).toEqual([user1]);
  })
  
  test('check add all characters and toArray', () => {
  
    const team = new Team();
    const user2 = new Character('Archer', 5);
    const user3 = new Character('Mage', 1);
  
    team.addAll(user2, user3);
    expect(team.toArray()).toEqual([user2, user3]);
  })
})

describe('ErrorRepository', () => {
  const repository = new ErrorRepository();
  test('add errors and translate them', () => {

    repository.addError(404, 'Неприкольная ошибка');
    repository.addError(403, 'Прикольная ошибка');

    expect(repository.translate(404)).toBe('Неприкольная ошибка');
    expect(repository.translate(403)).toBe('Прикольная ошибка');
  })

  test('should return "Unknown Error"', () => {
    expect(repository.translate(400)).toBe('Unknown Error');
  })
})

describe('Settings', () => {
  const user = new Settings();

  test('check default settings', () => {
    expect(user.resetDefault()).toEqual(new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]));
  })

  test('check user set settings and get settings', () => {
    user.setSettings('language', 'English')
    expect(user.getSettings()).toEqual(new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
      ['language', 'English'],
    ]))
  })
})