import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Text, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import AdvancedVideo from "./AdvanceVideo";

const Post = (props, { navigation }) => {
  const { user } = props
  const [listLike, setListLike] = useState([1, 2, 3, 4, 5, '3ac68afc-c605-48d3-a4f8-fbd91aa97f63'])
  const [upTop, setUpTop] = useState([1, 2, 3, 4, 5, '3ac68afc-c605-48d3-a4f8-fbd91aa97f63'])

  const onHandleLike = () => {
    listLike.includes(user.id) ?
      setListLike(listLike.filter(el => el != user.id)) :
      setListLike(listLike.concat(user.id))
  }

  const onHandleUptop = () => {
    upTop.includes(user.id) ?
      setUpTop(upTop.filter(el => el != user.id)) :
      setUpTop(upTop.concat(user.id))
  }

  return (
    <View style={styles.postContent} key={user.id}>
      <View style={styles.postHeader}>
        <Image source={{ uri: user.avatar }} style={styles.postAvatar} resizeMode="center"></Image>
        <TouchableOpacity onPress={() => console.log('okok')}>
          <Text style={styles.postName}>{user.name}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text>
          {user.post}
        </Text>
      </View>
      {
        user.video && user.video.length > 0 &&
        <View>
          <AdvancedVideo uriVideo={user.video?.[0]}/>
        </View>
      }

      <View style={styles.postFooter}>
        <View>
          <TouchableOpacity onPress={onHandleLike}>
            <Ionicons
              name={listLike.includes(user.id) ? "ios-heart" : "ios-heart-outline"}
              color={listLike.includes(user.id) ? "#f66" : "#525750"}
              size={24}>
              <Text>1</Text>
            </Ionicons>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Ionicons name="md-chatbox-outline" size={24} color="#525750">
              <Text>1</Text>
            </Ionicons>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={onHandleUptop}>
            <Ionicons
              name={upTop.includes(user.id) ? "md-arrow-up-circle" : "md-arrow-up-circle-outline"}
              color={upTop.includes(user.id) ? "#f66" : "#525750"}
              size={24}>
              <Text>1</Text>
            </Ionicons>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  postContent: {
    backgroundColor: "white",
    marginTop: 10,
    padding: 15
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  postName: {
    marginLeft: 10,
    fontWeight: 'bold'
  },
  postFooter: {
    borderTopColor: "#525750",
    borderTopWidth: 1,
    marginTop: 10,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

export default Post