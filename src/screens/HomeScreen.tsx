import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Welcome to Sugar Baby Detector</Text>
      <Button title="Start Chat" onPress={() => navigation.navigate('Chat')} />
    </View>
  );
}
export default HomeScreen;