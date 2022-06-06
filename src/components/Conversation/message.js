import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const MessageC = (props) => {


  const { user, message } = props
  console.log("userrr", user)
  console.log("message", message)


  return (
    <View style={user.id == message.userID ? styles.user : styles.friend}>
      <Text style={user.id == message.userID ? styles.textUser : styles.textFriend}>{message.Message}</Text>
    </View>
  )
}


export default MessageC

const styles = StyleSheet.create({
  friend: {
    backgroundColor: '#eee',
    margin: 5,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    alignSelf: 'flex-start'
  },
  user: {
    backgroundColor: 'blue',
    margin: 5,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    alignSelf: 'flex-end'
  },
  textFriend: {
    color: '#000',
  },
  textUser: {
    color: "#FFF"
  }
})