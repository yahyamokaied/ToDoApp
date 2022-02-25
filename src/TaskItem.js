import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from 'react-redux';
import * as todoActions from './redux/actions';
import * as constants from './constants/constants';

const TaskItem = ({ item, onPress }) => {

    const dispatch = useDispatch();

    // Edit Task in Redux
    const editTask = (selectedId) => {
        dispatch(todoActions.EditTodoTask(selectedId));
    }
    // Remove Task from Redux
    const removeTask = (selectedId) => {
        dispatch(todoActions.RemoveTodoTask(selectedId));
    }
    return (
        <View style={[styles.itemView, { opacity: item.isDone ? 0.5 : 1 }]} >

            <View style={styles.taskColumn}>

                <Text style={[styles.textTask, { textDecorationLine: item.isDone ? 'line-through' : 'none' }]}>
                    {item.title}
                </Text>

                <View style={styles.operationsRow}>

                    <Text style={styles.textId}>{constants.id}{item.id} </Text>

                    <TouchableOpacity
                        style={[styles.RemoveBtn, { borderColor: item.isDone ? 'grey' : 'green' }]}
                        onPress={() => editTask(onPress)} >
                        <Text style={[styles.editTxt, { color: item.isDone ? 'grey' : 'green' }]} >{item.isDone ? 'Not Yet!' : 'Completed!'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.EditBtn}
                        onPress={() => removeTask(onPress)} >
                        <Text style={styles.removeTxt} >{constants.deleteTxt} </Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    listStyle: {
        height: '100%',
        width: '90%',
    },
    content: {
        justifyContent: 'center',
    },
    itemView: {
        flexDirection: 'row',
        backgroundColor: '#ededed',
        justifyContent: 'center',
        borderRadius: 14,
        padding: 8,
        alignSelf: 'center',
        shadowColor: "grey",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    taskColumn: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    operationsRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    textId: {
        fontSize: 15,
        padding: 1,
        color: 'grey',
        opacity: 0.6
    },
    textTask: {
        fontWeight: 'bold',
        fontSize: 18,
        padding: 4,
        letterSpacing: 1
    },
    RemoveBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'grey',
        borderWidth: 1,
        margin: 4,
        padding: 4,
        borderRadius: 10
    },
    EditBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 1,
        margin: 4,
        padding: 4,
        borderRadius: 10,
    },
    btnTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    removeTxt: {
        fontSize: 16,
        color: 'red'
    },
    editTxt: {
        fontSize: 16,
    }
});

export default TaskItem;