import React from 'react'
import { 
  Ionicons,
} from '@expo/vector-icons'
import Message from '../Message';
import NewFeeds from '../NewFeeds';
import MenuScreen from '../MenuScreen';
import Profile from '../Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="NewFeeds"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'NewFeeds') {
            iconName = focused ? 'home' : 'home-outline';
          }
          else if (route.name === 'Message') {
            iconName = focused ? 'md-chatbox-ellipses' : 'md-chatbox-ellipses-outline';
          }
          else if (route.name === 'MenuScreen'){
            iconName = focused ? 'ios-reorder-three-sharp' : 'ios-reorder-three-outline'
          }
          else if (route.name === 'Profile'){
            iconName = focused ? 'person-circle' : 'person-circle-outline'
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="NewFeeds" component={NewFeeds} />
      <Tab.Screen name="MenuScreen" component={MenuScreen}/>
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default Home
