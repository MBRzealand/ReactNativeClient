import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import MessageBar from './Components/MessageBar';
import MessageList from './Components/MessageList';
import {connect} from '@giantmachines/redux-websocket';
import {useDispatch} from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connect('ws://192.168.50.216:8080'));
  }, []);

  return (
    <View style={styles.outerContainer}>
      <StatusBar backgroundColor="black" barStyle="default" />
      <View style={styles.innerContainer}>
        <MessageList />
        <MessageBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: 'grey',
  },
  innerContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
