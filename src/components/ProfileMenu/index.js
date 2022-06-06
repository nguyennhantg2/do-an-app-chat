import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../Profile';
import Login from '../Login';

const Drawer = createDrawerNavigator();

function ProfileMenu() {
  return (
      <View></View>
    // <Drawer.Navigator>
    //   <Drawer.Screen name="Profile" component={Profile} />
    //   <Drawer.Screen name="Login" component={Login} />
    // </Drawer.Navigator>
  );
}

export default ProfileMenu