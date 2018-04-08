import { UPDATE_DIAMETERS } from '../actionTypes';

const initState = {
  data: [
    // 一级钢
    {key: 'A6', value: '0.222'},
    {key: 'A8', value: '0.395'},
    {key: 'A10', value: '0.617'},
    {key: 'A12', value: '0.888'},
    {key: 'A14', value: '1.21'},
    {key: 'A16', value: '1.58'},
    {key: 'A18', value: '1.998'},
    {key: 'A20', value: '2.47'},
    {key: 'A22', value: '3'},
    {key: 'A25', value: '3.85'},

    // 二级钢
    {key: 'B6.5', value: 0.222},
    {key: 'B8', value: '0.395'},
    {key: 'B10', value: '0.617'},
    {key: 'B12', value: '0.888'},
    {key: 'B14', value: '1.21'},
    {key: 'B16', value: '1.58'},
    {key: 'B18', value: '1.998'},
    {key: 'B20', value: '2.47'},
    {key: 'B22', value: '3'},
    {key: 'B25', value: '3.85'},

    // 三级钢
    {key: 'C6', value: '0.222'},
    {key: 'C8', value: '0.395'},
    {key: 'C10', value: '0.617'},
    {key: 'C12', value: '0.888'},
    {key: 'C14', value: '1.21'},
    {key: 'C16', value: '1.58'},
    {key: 'C18', value: '1.998'},
    {key: 'C20', value: '2.47'},
    {key: 'C22', value: '3'},
    {key: 'C25', value: '3.85'},
    {key: 'C28', value: '4.85'},
  ],
};

export default (state = initState, action) => {
  switch (action.type) {
    case UPDATE_DIAMETERS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
