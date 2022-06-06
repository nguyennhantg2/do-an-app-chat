import React, { useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListMessage from "../ListMessage";
import Conversation from "../Conversation";
import ForYou from "../ForYou";

const Stack = createNativeStackNavigator();

const MenuScreen = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ForYou" component={ForYou} options={{ headerShown: false }} />
      <Stack.Screen name="Conversation" component={Conversation} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default MenuScreen