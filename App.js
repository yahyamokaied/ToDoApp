import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Dimensions
} from 'react-native';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import ToDoList from './src/ToDoList';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const App = () => {

  return (
    <SafeAreaView style={styles.container}>

      {/* Redux Store */}
      <Provider store={store}>
        {/* Redux Persistor */}
        <PersistGate persistor={persistor}>

          {/* ToDo List */}
          <ToDoList />

        </PersistGate>
      </Provider>

    </SafeAreaView >
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
