import * as mutation from './mutations-types';

export const saveNote = ({ commit, dispatch, state }) => {
  commit(mutation.TOUCH_LAST_SAVED);
  if (state.note.id === null) {
    commit(mutation.SET_CURRENT_NOTE_ID, Date.now());
    commit(mutation.PREPERED_TO_NOTES, state.note);
  }
  dispatch('storeNotes');
};

export const startSaveTimeout = ({ commit, dispatch, state }) => {
  if (state.saveTimeout !== null) {
    return;
  }
  commit(mutation.SET_SAVE_TIMEOUT, {
    callback() {
      dispatch('saveNote');
      dispatch('stoptSaveTimeout');
    },
    delay: 1000,
  });
};

export const stoptSaveTimeout = ({ commit, dispatch, state }) => {

};

export const storeNotes = ({ state }) => {
  localStorage.setItem('notes', JSON.stringify(state.notes));
};
