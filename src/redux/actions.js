import * as ActoinTypes from './types';

export const AddTodoTask = (title) => ({
    type: ActoinTypes.Add_TASK_To_List,
    payload: title,
});

export const EditTodoTask = (id) => ({
    type: ActoinTypes.EDIT_TASK_IN_LIST,
    payload: id,
});

export const RemoveTodoTask = (id) => ({
    type: ActoinTypes.REMOVE_TASK_FROM_LIST,
    payload: id,
});

