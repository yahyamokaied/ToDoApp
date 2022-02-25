import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Dimensions
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import ToDoList from './src/ToDoList';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;



const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <ToDoList />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3e3e3',
  },
});

export default App;
