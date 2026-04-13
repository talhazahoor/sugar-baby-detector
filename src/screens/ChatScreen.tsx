import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../utils/supabase';
function ChatScreen() {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const handleSendMessage = async () => {
    try {
      const { data, error } = await supabase.from('chat_log').insert({ message });
      if (data) {
        setChatLog([...chatLog, data[0]]);
        setMessage('');
      } else if (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text>Chat Log:</Text>
      {chatLog.map((log, index) => (
        <Text key={index}>{log.message}</Text>
      ))}
      <TextInput value={message} onChangeText={setMessage} />
      <Button title="Send" onPress={handleSendMessage} />
    </View>
  );
}
export default ChatScreen;