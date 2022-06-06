import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListMessage from "../ListMessage";
import Conversation from "../Conversation";

const Stack = createNativeStackNavigator();

const Message = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListMessage" component={ListMessage} options={{ headerShown: false }} />
      <Stack.Screen name="Conversation" component={Conversation} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Message