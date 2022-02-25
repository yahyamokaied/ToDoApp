import * as ActoinTypes from './types';

var initalState = {
    todos: [{
        id: 0,
        title: 'Test not completed',
        isDone: false
    },
    {
        id: 1,
        title: 'Test completed',
        isDone: true
    },
    ]
};


function todoReducer(state = initalState, action) {
    switch (action.type) {

        case ActoinTypes.Add_TASK_To_List:

            var newTask =
            {
                id: (state.todos[state.todos.length - 1].id) + 1,
                title: action.payload,
                isDone: false
            };
            return {
                todos: state.todos.concat(newTask)
            };

        case ActoinTypes.EDIT_TASK_IN_LIST:
            let idToEdit = action.payload;
            var newTasksEdit = state.todos.map(todo => todo.id === idToEdit ? {
                id: todo.id,
                title: todo.title,
                isDone: !todo.isDone
            } : todo);
            return {
                todos: newTasksEdit
            };
        case ActoinTypes.REMOVE_TASK_FROM_LIST:
            let idToRemove = action.payload;
            var newTasksRemove = state.todos.filter(item => item.id !== idToRemove);
            return {
                todos: newTasksRemove
            };
        default:
            return state;
    }
};
export default todoReducer;
