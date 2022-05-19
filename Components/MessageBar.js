import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {send} from '@giantmachines/redux-websocket';
import {changeMessage} from '../Features/message';

const windowHeight = Dimensions.get('window').height;

const containerHeight = windowHeight * 0.06;

const MessageBar = () => {

  const dispatch = useDispatch();
  const messageState = useSelector(state => state.message.value);

  const handleChange = text => {
    dispatch(
      changeMessage({
        ...messageState,
        message: text,
      }),
    );
  };

  const handleSubmit = event => {
    event.preventDefault();
    const date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    seconds = seconds <= 9 ? '0' + seconds : seconds;
    minutes = minutes <= 9 ? '0' + minutes : minutes;
    hours = hours <= 9 ? '0' + hours : hours;

    const messageObject = {
      text: messageState.message,
      time: hours + ':' + minutes + ':' + seconds,
    };

    dispatch(send(messageObject));

    dispatch(
      changeMessage({
        ...messageState,
        sentMessages: [...messageState.sentMessages, messageObject],
        message: '',
      }),
    );
  };

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0.7, y: 0}}
      colors={['#6564db', '#5bc0eb']}
      style={styles.container}>
      <TextInput
        defaultValue={messageState.message}
        onChangeText={handleChange}
        selectionColor={'#6564db'}
        style={styles.messageInput}
      />
      <TouchableOpacity style={styles.sendButton} onPress={handleSubmit}>
        <Image style={styles.sendImage} source={require('./send_icon.png')} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: containerHeight,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  messageInput: {
    height: '70%',
    width: '75%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginLeft: '5%',
    color: '#000',
    paddingHorizontal: 10,
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '5%',
  },
  sendImage: {
    height: 30,
    width: 30,
  },
});

export default MessageBar;
