import produce from 'immer';

const INITIAL_STATE = { list: [] };

export default function problems(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@problems/LIST_SUCCESS': {
        draft.list = action.payload;
        break;
      }
      default:
        draft = state;
        break;
    }
  });
}
