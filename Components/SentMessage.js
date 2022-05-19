import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useSelector } from "react-redux";

const SentMessage = (props) => {

  const messageState = useSelector(state => state.message.value);

  const styles = StyleSheet.create({
    messageContainer: {
      marginTop: 10,
      marginBottom: 5,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginLeft: 'auto',
      backgroundColor: '#5bc0eb',
      borderRadius: 25,
    },
    messageText: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      fontSize: 18,
      color: 'white',
    },
    textTime: {
      paddingHorizontal: 20,
      marginBottom: 10,
      fontSize: 12,
      color: 'grey',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginLeft: 'auto',
    },
  });

  return (
    <View>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{props.text}</Text>
      </View>
      <Text style={styles.textTime}>Sent at {props.time}</Text>
    </View>
  );
};

export default SentMessage;
