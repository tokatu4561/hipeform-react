import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { IEditTask, ITag } from '../types';


export interface TaskState {
  editedTask: IEditTask;
  editedTag: ITag
}

const initialState: TaskState = {
    editedTask: {
        id: 0,
        title: '',
        tag: 0,
      },
      editedTag: {
        id: 0,
        name: '',
      },
};


export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setEditedTask: (state, action:PayloadAction<IEditTask>) => {
        state.editedTask = action.payload
    },
    resetEditedTask: (state) => {
        state.editedTask = initialState.editedTask
    },
    setEditedTag: (state, action:PayloadAction<ITag>) => {
        state.editedTag = action.payload
    },
    restEditedTag: (state) => {
        state.editedTag = initialState.editedTag
    },
  },
});

export const { setEditedTag, setEditedTask,resetEditedTask, restEditedTag} = taskSlice.actions;


export const selectTask = (state: RootState) => state.task.editedTask;
export const selectTag = (state: RootState) => state.task.editedTag;


export default taskSlice.reducer;
