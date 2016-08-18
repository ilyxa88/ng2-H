export class InMemoryDataService {
  createDb() {
    let users = [
      {id: 1, name: 'ilya', password: 12},
      {id: 2, name: 'Narco', password: 12},
      {id: 3, name: 'Bombasto', password: 12},
      {id: 4, name: 'Celeritas', password: 12},
      {id: 5, name: 'Magneta', password: 12},
      {id: 6, name: 'RubberMan', password: 12},
      {id: 7, name: 'Dynama', password: 12},
      {id: 8, name: 'Dr IQ', password: 12},
      {id: 9, name: 'Magma', password: 12},
      {id: 10, name: 'Tornado', password: 12}
    ];
    let heroes = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];
    let powers = ['Really Smart', 'Super Flexible',
      'Super Hot', 'Weather Changer'];
    return {users, heroes, powers};
  }
}
