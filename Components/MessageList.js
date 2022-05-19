import React, { useEffect } from "react";
import {ScrollView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import SentMessage from './SentMessage';

const MessageList = props => {
  const messageState = useSelector(state => state.message.value);


  const sentList = messageState.sentMessages.map(message => (
    <SentMessage time={message.time} text={message.text} />
  ));

  return (
    <ScrollView style={styles.container}>
      {sentList}
      {/*<SentMessage/>*/}
      {/*<ReceivedMessage/>*/}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%', // 94%
    width: '100%',
    backgroundColor: '#ffffff',
    paddingHorizontal: '5%',
  },
  redText: {
    fontSize: 100,
    color: 'red',
  },
});

export default MessageList;
