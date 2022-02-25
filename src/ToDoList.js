import React, { useState, useEffect } from "react";
import { FlatList, TextInput, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import * as todoActions from './redux/actions';
import * as constants from './constants/constants';
import TaskItem from './TaskItem';


const ToDoList = () => {
    const dispatch = useDispatch();
    const reduxList = useSelector(state => state.todo.todos);

    const [text, setText] = useState('');

    const saveTask = (text) => {
        setText('');
        dispatch(todoActions.AddTodoTask(text));
    }


    useEffect(() => {
        console.log('reduxList: ', reduxList);
    }, [reduxList]);

    const renderItem = ({ item }) => {
        return (
            <TaskItem
                item={item}
                onPress={item.id}
            />
        );
    };

    return (
        <View style={styles.Container}>

            <Text style={styles.textTask}>{constants.addTxt}</Text>

            <TextInput
                style={styles.input}
                placeholder={constants.addTxt}
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />

            <TouchableOpacity
                style={styles.addBtn}
                onPress={() => text.length < 1 ? null : saveTask(text)} >
                <Text style={styles.btnTxt} >+</Text>
            </TouchableOpacity>

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
    operationsRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
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
    textDescription: {
        fontSize: 16,
        padding: 1
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
    }, removeTxt: {
        fontSize: 16,
        color: 'red'
    }, editTxt: {
        fontSize: 16,
    }
});

export default ToDoList;