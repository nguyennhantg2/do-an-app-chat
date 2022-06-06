import React from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, Button } from 'react-native'
import { useSelector } from 'react-redux'


const FriendsHome = (props) => {

  const { dataUser, styles, showTitle } = props
  const currentUser = useSelector((state) => state.inforuser.user)

  return (
    <View style={FHStyles.container}>
      {
        showTitle &&
        < Text style={FHStyles.title}>Bạn bè</Text>
      }
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          dataUser.map((user, index) => (
            currentUser.id !== user.id &&
            <TouchableOpacity onPress={() => console.log(user)} key={user.id}>
              <View style={FHStyles.imageContainer} key={user} >
                <Image source={{ uri: user?.avatar || "https://genvita.vn/resources/avatar/1322e982-086b-44d2-ad10-87aaa3f0f0fc?width=119&height=119&mode=crop" }} style={styles.image} resizeMode="cover"></Image>
                {
                  true && <View style={styles.online}></View>
                }
              </View>
              <Text ellipsizeMode='tail' numberOfLines={1} style={{ width: 70, display: 'flex', alignItems: 'center', justifyContent: "center" }}>{user.username}</Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View >
  )
}

export default FriendsHome

const FHStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  imageContainer: {
    margin: 5
  }
})

