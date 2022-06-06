import React, { useState, useEffect } from "react";
import { Alert, View, Text, Button, TextInput, FlatList, ActivityIndicator } from 'react-native'
import MessageC from "./message";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataMessageSuccess } from "../ListMessage/ListMesSlice";
import axios from "axios";
import { BASE_URL } from "../../configs/Config";
import { FETCH_MESSAGES } from "../../request/MockApi";


const Conversation = ({ navigation, route }) => {

  const currentUser = useSelector((state) => state.inforuser.user)
  const listMessage = useSelector((state) => state.message)
  const dispatch = useDispatch()
  const friendId = route.params.friendId

  const [text, setText] = useState('');
  const [isLoading, setLoading] = useState(false)
  const hasUnsavedChanges = Boolean(text);

  const [listMes, setListM] = useState([])

  useEffect(() => {
    console.log('currentUser currentUser', currentUser)
    console.log('currentUser friendId', friendId)
    console.log('currentUser listMessage', listMessage)
    const arr = listMessage.message.reduce((arr, m) => {
      if(m.userID == currentUser.id && m.FriendID == friendId || m.userID == friendId && m.FriendID == currentUser.id)
        arr.push(m)
      return arr
    }, [])
    setListM(arr)
  }, [])

  const handleSendMessage = () => {
    if(!text) return
    setLoading(true)
    let url = BASE_URL + 'message'
    axios.post(url, {
      userID: currentUser.id,
      FriendID: friendId,
      Message: text,
      IdChanel: null,
      timeSend: new Date()
    })
    .then(res => {
      FETCH_MESSAGES()
      .then(r => {
        dispatch(fetchDataMessageSuccess(r.data))
        setListM([...listMes].concat(res.data))
        setText("")
      })
      .catch(e => console.log(e))
    })
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }


  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        if (!hasUnsavedChanges) {
          return;
        }
        e.preventDefault();
        Alert.alert(
          'Discard changes?',
          'You have unsaved changes. Are you sure to discard them and leave the screen?',
          [
            { text: "Don't leave", style: 'cancel', onPress: () => { } },
            {
              text: 'Discard',
              style: 'destructive',
              onPress: () => navigation.dispatch(e.data.action),
            },
          ]
        );
      }),
    [navigation, hasUnsavedChanges]
  );

  return (
    <View style={{backgroundColor: "#fff", flex: 1}}>
        <FlatList
          data={listMes}
          renderItem={item => <MessageC user={{id: currentUser.id, name: currentUser.username}} message={item.item}/>}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          onEndReached={() => console.log()}
        />
      <TextInput
        value={text}
        placeholder="Type something…"
        onChangeText={setText}
        style={{backgroundColor: '#eee', paddingLeft: 15, paddingRight: 15, padding: 5, color: '#999'}}/>
        {
          isLoading ? 
          <ActivityIndicator size="small" color="#00ff00" /> :
          <Button title="List Message" onPress={handleSendMessage} />
        }
      {/* //navigation.navigate('ListMessage') */}
    </View>
  )
}

export default Conversation