import React, { useState } from 'react'
import { TouchableOpacity, View, Text, Image, Modal, TextInput, Button, StyleSheet, Platform } from 'react-native'
import {
  Ionicons
} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import { storeHighScore } from '../../firebase';

const SendPost = (props) => {

  const { user, styles } = props
  const [isShowPost, setShowPost] = useState(false)
  const [text, setText] = useState("")
  const [image, setImage] = useState(null);

  const onPost = () => {
    // storeHighScore("user123", 333)
    // setShowPost(false)
    console.log('text, ', text)
    console.log('iamges', image)
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View>
      <Modal
        presentationStyle="pageSheet"
        visible={isShowPost}
        onRequestClose={() => console.log('')}>
        <View style={styleSendPost.header}>
          <View style={styleSendPost.titlePost}>
            <TouchableOpacity onPress={() => setShowPost(false)}>
              <Ionicons name="ios-arrow-back" size={24} color="#525750"></Ionicons>
            </TouchableOpacity>
            <Text style={{ fontSize: 24 }}>Tạo bài viết</Text>
          </View>
          <Button title='Đăng' onPress={onPost} disabled={!text} />
        </View>
        <View style={[styles.postHeader, { padding: 10 }]}>
          <Image source={{ uri: user.avatar }} style={styles.postAvatar} resizeMode="center"></Image>
          <Text style={styles.postName}>{user.name}</Text>
        </View>
        <View style={{ padding: 10 }}>
          <TextInput
            style={styleSendPost.inputPostContent}
            multiline={true}
            numberOfLines={10}
            onChangeText={(text) => setText(text)}
            value={text}
            placeholder="Bạn đang nghĩ gì?"
          />
        </View>

        <View style={{ padding: 10 }}>
          <View style={styleSendPost.tagName}>
            <TouchableOpacity onPress={pickImage}>
              <Text><Ionicons name="md-images" size={24} color="#525750"></Ionicons> Chọn ảnh/video</Text>
            </TouchableOpacity>
          </View>
          <View style={styleSendPost.tagName}>
            <TouchableOpacity>
              <Text><Ionicons name="md-happy-outline" size={24} color="#525750"></Ionicons> Cảm xúc/hoạt động</Text>
            </TouchableOpacity>
          </View>
          <View style={styleSendPost.tagName}>
            <TouchableOpacity>
              <Text><Ionicons name="ios-person-add-sharp" size={24} color="#525750"></Ionicons> Gán thẻ bạn bè</Text>
            </TouchableOpacity>
          </View>

          {image && <Image source={{ uri: image }} style={{ width: null, height: 250 }} />}
        </View>
      </Modal>
      <View style={styles.postContent}>
        <View style={styles.postHeader}>
          <Image source={{ uri: user.avatar }} style={styles.postAvatar} resizeMode="center"></Image>
          <TouchableOpacity onPress={() => setShowPost(true)}>
            <Text style={styles.postInput}>Bạn đang nghĩ gì?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SendPost

const styleSendPost = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  titlePost: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputPostContent: {
    borderColor: '#eee',
    borderWidth: 1,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  tagName: {
    borderColor: '#eee',
    borderWidth: 1,
    padding: 10
  }
})
