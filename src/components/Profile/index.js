import React, { useState, useEffect } from 'react'
import {
  Text, View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Modal
} from 'react-native';
import {
  Ionicons,
  MaterialIcons,
  Feather,
} from '@expo/vector-icons'
import styles from "./styles";
import Post from '../Features/Post';
import { useSelector, useDispatch } from 'react-redux'


const DATA = [
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    avatar: "https://tackexinh.com/wp-content/uploads/2021/01/hinh-anh-dep-chat-luong-001.jpg",
    name: "Nhân Nguyễn",
    post: "Xin chào các bạn, rất vui được làm quen",
    img: [],
    video: ["https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"],
    like: [],
    top: []
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    avatar: "https://taimienphi.vn/tmp/cf/aut/hinh-nen-vit-avatar-anh-vit-cute-ngoc-nghech-1.jpg",
    name: "Nguyen Nhan",
    post: "Xin chao cac ban",
    img: [],
    video: ["https://media.istockphoto.com/videos/summertime-travel-concept-dark-silhouette-iconic-retro-wooden-watch-video-id1390331955"],
    like: [],
    top: []
  }
];


const Profile = ({ navigation }) => {

  const currentUser = useSelector((state) => state.inforuser.user)
  const dispatch = useDispatch()

  const id = 2
  const isFriend = false

  const [dataUser, setDataUser] = useState({
    id: 1,
    avatar: "https://taimienphi.vn/tmp/cf/aut/hinh-nen-vit-avatar-anh-vit-cute-ngoc-nghech-1.jpg",
    name: "Nhan Nguyen",
    description: "Student in HDU",
    images: [
      "https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-gai-xinh-de-thuong-nhat-1.jpg",
      "https://i.pinimg.com/originals/ea/cb/51/eacb51a8ff3a695248440de8bdd300b9.jpg",
      "https://taimienphi.vn/tmp/cf/aut/hinh-nen-vit-avatar-anh-vit-cute-ngoc-nghech-1.jpg",
    ]
  })

  const [dataFeeds, setDataFeeds] = useState(DATA)

  const [showModalImage, setShowModalImage] = useState(false)

  // useEffect(() => {

  // }, [])

  const handleChaneAvatar = (img) => {
    setDataUser({
      ...dataUser,
      avatar: img
    })
  }

  const handleSendMessage = () => {
    console.log('handleSendMessage')
    console.log('userrrr', user)
  }

  const handleEditImage = () => {
    console.log('handleEditImage')
  }

  const handleAddFriend = () => {
    console.log('handleAddFriend')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>


        <Modal
          animationType={"slide"}
          transparent={false}
          visible={showModalImage}
          onRequestClose={() => { console.log("Modal has been closed.") }}>
          <View style={styles.modal}>
            <Image
              style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
              source={{ uri: dataUser.avatar }}
            />
            <TouchableHighlight style={{ position: 'absolute', top: 10, right: 10 }}
              onPress={() => setShowModalImage(false)}>
              <Ionicons name="close-sharp" size={24} color="#525750"></Ionicons>
            </TouchableHighlight>
          </View>
        </Modal>


        <View style={styles.titleBar}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 10 }}>
            <Ionicons name="ios-arrow-back" size={24} color="#525750"></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ marginTop: 10 }}>
            {/* <Ionicons name="ellipsis-vertical-sharp" size={24} color="#525750"></Ionicons> */}
            <MaterialIcons name="logout" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ alignSelf: "center" }}>
          <TouchableOpacity onPress={() => setShowModalImage(true)}>
            <View style={styles.profileImage}>
              <Image source={{ uri: dataUser.avatar }} style={styles.image} resizeMode="center"></Image>
            </View>
          </TouchableOpacity>
          {
            id != dataUser.id &&
            <View style={styles.dm}>
              <TouchableOpacity onPress={handleSendMessage}>
                <MaterialIcons name="chat" size={18} color="#DFD8C8"></MaterialIcons>
              </TouchableOpacity>
            </View>
          }
          <View style={styles.active}></View>
          {
            id == dataUser.id ?
              <View style={[styles.add, { opacity: 0.8 }]}>
                <TouchableOpacity onPress={handleEditImage}>
                  <Feather name="edit" size={24} color="white" />
                </TouchableOpacity>
              </View>
              :
              !isFriend &&
              <View style={[styles.add, { opacity: 0.8 }]}>
                <TouchableOpacity onPress={handleAddFriend}>
                  <Ionicons name="ios-add" size={28} color="#DFD8C8" style={{ marginTop: 0, marginLeft: 2 }}></Ionicons>
                </TouchableOpacity>
              </View>
          }
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 32 }]}>{currentUser.name || currentUser.username}</Text>
          <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>{dataUser.description}</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>483</Text>
            <Text style={[styles.text, styles.subText]}>Posts</Text>
          </View>
          <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
            <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
            <Text style={[styles.text, styles.subText]}>Followers</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>302</Text>
            <Text style={[styles.text, styles.subText]}>Following</Text>
          </View>
        </View>

        <View style={{ marginTop: 32 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
              dataUser.images.map((el, index) => (
                <TouchableOpacity onPress={() => handleChaneAvatar(el)} key={index}>
                  <View style={styles.mediaImageContainer} key={el} >
                    <Image source={{ uri: el }} style={styles.image} resizeMode="cover"></Image>
                  </View>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
          <View style={styles.mediaCount}>
            <Text style={[styles.text, { fontSize: 24, color: "#DFD8C8", fontWeight: "300" }]}>{dataUser.images.length}</Text>
            <Text style={[styles.text, { fontSize: 12, color: "#DFD8C8", textTransform: "uppercase" }]}>Photos</Text>
          </View>
        </View>
        <Text style={[styles.subText, styles.recent]}>Recent Activity</Text>
        <View>
          {
            dataFeeds.map(f => <Post user={f} />)
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile