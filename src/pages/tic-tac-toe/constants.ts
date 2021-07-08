//  b0 | b1 | b2
//  b3 | b4 | b5
//  b6 | b7 | b8
export const helperMap: { [key :string]: object } = {
  b0: {
    b1: 'b2', b2: 'b1', b3: 'b6', b6: 'b3', b4: 'b8', b8: 'b4',
  },
  b1: {
    b2: 'b0', b0: 'b2', b7: 'b4', b4: 'b7',
  },
  b2: {
    b1: 'b0', b0: 'b1', b5: 'b8', b8: 'b5', b4: 'b6', b6: 'b4',
  },
  b3: {
    b4: 'b5', b5: 'b4', b0: 'b6', b6: 'b0',
  },
  b4: {
    b6: 'b2', b2: 'b6', b0: 'b8', b8: 'b0', b5: 'b3', b3: 'b5', b1: 'b7', b7: 'b1',
  },
  b5: {
    b4: 'b3', b3: 'b4', b2: 'b8', b8: 'b2',
  },
  b6: {
    b4: 'b2', b2: 'b4', b7: 'b8', b8: 'b7', b0: 'b3', b3: 'b0',
  },
  b7: {
    b4: 'b1', b1: 'b4', b6: 'b8', b8: 'b6',
  },
  b8: {
    b5: 'b2', b2: 'b5', b7: 'b6', b6: 'b7', b0: 'b4', b4: 'b0',
  },
};

export const initialButtonsState = [
  ['b0', 'N'],
  ['b1', 'N'],
  ['b2', 'N'],
  ['b3', 'N'],
  ['b4', 'N'],
  ['b5', 'N'],
  ['b6', 'N'],
  ['b7', 'N'],
  ['b8', 'N'],
];

export const players = [
  { name: 'player-1', value: 'X' },
  { name: 'player-2', value: 'O' },
];

export const initialRefObject : {
  [key in 'X' | 'O']:{ [key :string]: string}
} = { X: {}, O: {} };
