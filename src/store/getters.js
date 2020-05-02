export const note = (state) => state.note;
export const notes = (state) => state.notes.sort((a, b) => a.lastSaved - b.lastSaved);
