import React, { useState, useEffect } from "react";
import { FlatList, TextInput, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import * as todoActions from './redux/actions';
import * as constants from './constants/constants';
import TaskItem from './TaskItem';


const ToDoList = () => {
    const dispatch = useDispatch();

    // ToDos from Redux
    const reduxList = useSelector(state => state.todo.todos);

    // For TextInput
    const [text, setText] = useState('');


    const saveTask = (text) => {
        //Empty TextInput
        setText('');
        //Save Task in Redux
        dispatch(todoActions.AddTodoTask(text));
    }

    //Task renderItem
    const renderItem = ({ item }) => {
        return (
            <TaskItem
                item={item}
                onPress={item.id}
            />
        );
    };

    //Re-render when list in redux been updated.
    useEffect(() => {
        console.log('reduxList: ', reduxList);
    }, [reduxList]);


    return (
        <View style={styles.Container}>

            {/* New task TextInput */}
            <Text style={styles.textTask}>{constants.addTxt}</Text>

            {/* New task TextInput */}
            <TextInput
                style={styles.input}
                placeholder={constants.addTxt}
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />

            {/* Add Button */}
            <TouchableOpacity
                style={styles.addBtn}
                onPress={() => text.length < 1 ? null : saveTask(text)} >
                <Text style={styles.btnTxt} >+</Text>
            </TouchableOpacity>

            {/*  ToDO List */}
            <FlatList
                data={reduxList}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                style={styles.listStyle}
                contentContainerStyle={styles.content}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={() => (<View style={styles.header} ><Text style={styles.textTask}>{constants.HeaderTitle}</Text></View>)}
                ItemSeparatorComponent={() => (<View style={styles.separator} />)}
                ListEmptyComponent={() => (<View style={styles.empty} ><Text>{constants.EmptyTitle}</Text></View>)}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        paddingTop: 10
    },
    input: {
        height: 50,
        borderColor: 'green',
        borderWidth: 1,
        width: '90%',
        borderRadius: 14,
        padding: 14,
        marginBottom: 5

    },
    listStyle: {
        height: '100%',
        width: '90%',
    },
    content: {
        justifyContent: 'center',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    taskColumn: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    empty: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    separator: {
        height: 1,
        margin: 5,
        opacity: 0.5
    },
    textTask: {
        fontWeight: 'bold',
        fontSize: 18,
        padding: 4,
        letterSpacing: 1
    },
    addBtn: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        marginBottom: 6,
        borderRadius: 25
    },
    btnTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
});

export default ToDoList;