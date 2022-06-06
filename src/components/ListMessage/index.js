import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, Dimensions, TextInput, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import FriendsHome from "../Features/FriendsHome";
import { FETCH_USERS, INSERT_USER, FETCH_MESSAGES } from "../../request/MockApi";
import { fetchDataMessageSuccess, fetchDataUsersSuccess } from "./ListMesSlice";

const ListMessage = ({ navigation }) => {

  const listMessage = useSelector((state) => state.message)
  const currentUser = useSelector((state) => state.inforuser.user)
  const dispatch = useDispatch()

  useEffect(() => {
    FETCH_USERS()
    .then(res => {
      dispatch(fetchDataUsersSuccess(res.data))
    })

    FETCH_MESSAGES()
    .then(res => {
      dispatch(fetchDataMessageSuccess(res.data))
    })

  }, [])

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View>
          <TextInput style={styles.inputSearch} placeholder="Tìm kiếm" />
        </View>
        <FriendsHome dataUser={listMessage.users} showTitle={false} styles={styles} />
        {
          listMessage.users.map((user) =>
          user.id !== currentUser.id && 
            <TouchableOpacity onPress={() => navigation.navigate('Conversation', { friendId: user.id })} key={user.id}>
              <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                <View>
                  <Image
                    source={{ uri: "https://taimienphi.vn/tmp/cf/aut/hinh-nen-vit-avatar-anh-vit-cute-ngoc-nghech-1.jpg" }}
                    style={styles.image}
                    resizeMode="cover" />
                </View>
                <View style={{ paddingLeft: 10, }}>
                  <Text style={{ fontWeight: 'bold' }}>{user.username}</Text>
                  {/* <Text>Xin chao ban nha</Text> */}
                </View>
                <View style={{ position: 'absolute', right: 10 }}>
                  <Text style={{ color: '#999' }}>23:10</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
      </View>
    </ScrollView>

  )
}

export default ListMessage

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
  inputSearch: {
    backgroundColor: "#eee",
    padding: 10,
    margin: 10,
    paddingLeft: 20,
    borderRadius: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  postInput: {
    margin: 10,
    height: 40,
    paddingTop: 9,
    width: (Dimensions.get('window').width) - 80,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
  },
  postName: {
    marginLeft: 10,
    fontWeight: 'bold'
  },
  online: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 0,
    right: 2,
    borderColor: 'white',
    borderWidth: 2,
  }
})