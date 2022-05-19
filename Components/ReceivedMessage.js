import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ReceivedMessage = () => {
  const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      marginBottom: 10,
      marginLeft: '5%',
      marginRight: '35%',
      backgroundColor: '#6564db',
      borderRadius: 25,
    },
    redText: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      fontSize: 18,
      color: 'white',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.redText}>This is a longer message to style the container</Text>
    </View>
  );
};

export default ReceivedMessage;
