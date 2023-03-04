import { getAllNotificationsByUser, normalized } from './notifications';

describe('notifications', () => {
  it('read data from a json', () => {
    const data = [
        {
          guid: '2d8e40be-1c78-4de0-afc9-fcc147afd4d2',
          isRead: true,
          type: 'urgent',
          value:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        },
        {
          guid: '280913fe-38dd-4abd-8ab6-acdb4105f922',
          isRead: false,
          type: 'urgent',
          value:
            'Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed',
        },
      ],
      allContext = getAllNotificationsByUser('5debd764a7c57c7839d722e9');

    expect(allContext).toEqual(expect.arrayContaining(data));
  });
  /*
  it('normalized - result', () => {
    const data = [
      '5debd76480edafc8af244228',
      '5debd764507712e7a1307303',
      '5debd76444dd4dafea89d53b',
      '5debd76485ee4dfd1284f97b',
      '5debd7644e561e022d66e61a',
      '5debd7644aaed86c97bf9d5e',
      '5debd76413f0d5e5429c28a0',
      '5debd7642e815cd350407777',
      '5debd764c1127bc5a490a4d0',
      '5debd7646ef31e0861ec1cab',
      '5debd764a4f11eabef05a81d',
      '5debd764af0fdd1fc815ad9b',
      '5debd76468cb5b277fd125f4',
      '5debd764de9fa684468cdc0b',
    ];

    const result = normalized.result;

    expect(result).toEqual(expect.arrayContaining(data));
  });
*/
  /*
  it('normalized - users', () => {
    const data = {
      age: 25,
      email: 'poole.sanders@holberton.nz',
      id: '5debd764a7c57c7839d722e9',
      name: { first: 'Poole', last: 'Sanders' },
      picture: 'http://placehold.it/32x32',
    };

    const user = normalized.entities.users['5debd764a7c57c7839d722e9'];

    expect(user).toEqual(data);
  });
*/
  /*
  it('normalized - messages', () => {
    const data = {
      guid: 'efb6c485-00f7-4fdf-97cc-5e12d14d6c41',
      isRead: false,
      type: 'default',
      value: 'Cursus risus at ultrices mi.',
    };

    const message =
      normalized.entities.messages['efb6c485-00f7-4fdf-97cc-5e12d14d6c41'];

    expect(message).toEqual(data);
  });
  */
  /*
  it('normalized - notifications', () => {
    const data = {
      author: '5debd764f8452ef92346c772',
      context: '3068c575-d619-40af-bf12-dece1ee18dd3',
      id: '5debd7642e815cd350407777',
    };

    const notification =
      normalized.entities.notifications['5debd7642e815cd350407777'];

    expect(notification).toEqual(data);
  });
*/
});
