import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const prefix = (action) => `ADDPOLL/${action}`;

const ADD_ANSWER = prefix('ADD_ANSWER');
export const addAnswer = createAction(ADD_ANSWER);

const SET_ANSWER = prefix('SET_ANSWER');
export const setAnswer = createAction(SET_ANSWER, (index, text) => text, (index) => ({ index }));
const initialState = Map({
  question: '',
  answers: List([ { value: '' } ])
});

const SET_QUESTION = prefix('SET_QUESTION');
export const setQuestion = createAction(SET_QUESTION);

const DELETE_ANSWER = prefix('DELETE_ANSWER');
export const deleteAnswer = createAction(DELETE_ANSWER, () => null, (index) => ({ index }));

export default handleActions({
  [ADD_ANSWER]: (state) => state.set('answers', state.get('answers').push({ text: '' })),
  [SET_ANSWER]: (state, { payload, meta }) => {
    return state.set('answers',
      state.get('answers').set(meta.index, { value: payload })
    );
  },
  [SET_QUESTION]: (state, { payload }) => state.set('question', payload),
  [DELETE_ANSWER]: (state, { meta }) => state.set('answers', state.get('answers').delete(meta.index))

}, initialState);
