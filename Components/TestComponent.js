import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeCount} from '../Features/message';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  redText: {
    fontSize: 100,
    color: 'red',
  },
  countButtons: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 50,
  },
});

const TestComponent = () => {
  const countState = useSelector(state => state.count.value);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(
      changeCount({
        ...countState,
        currentCount: countState.currentCount + 1,
      }),
    );
  };

  const decrement = () => {
    dispatch(
      changeCount({
        ...countState,
        currentCount: countState.currentCount - 1,
      }),
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.countButtons} onPress={increment}>
        <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>

      <Text style={styles.redText}>{countState.currentCount}</Text>

      <TouchableOpacity style={styles.countButtons} onPress={decrement}>
        <Text style={styles.buttonText}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestComponent;
