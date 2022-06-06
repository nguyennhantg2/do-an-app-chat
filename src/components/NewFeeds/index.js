import React, { useState } from "react";
import { StyleSheet, View, FlatList, ScrollView, Dimensions } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Post from "../Features/Post";
import SendPost from "../Features/SendPost";
import FriendsHome from "../Features/FriendsHome";

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
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoC_QURr12dy_ZhxkOjzAPwmvJ-q7qy3Y2ZQ&usqp=CAU",
    name: "Nhan Nguyen",
    post: "Xin chao cac ban",
    img: [],
    video: [],
    like: [],
    top: []
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    avatar: "https://taimienphi.vn/tmp/cf/aut/hinh-nen-vit-avatar-anh-vit-cute-ngoc-nghech-1.jpg",
    name: "Nhan Nguyen",
    post: "Xin chao cac ban",
    img: [],
    video: [],
    like: [],
    top: []
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoC_QURr12dy_ZhxkOjzAPwmvJ-q7qy3Y2ZQ&usqp=CAU",
    name: "Nhan Nguyen",
    post: "Xin chao cac ban",
    img: [],
    video: [],
    like: [],
    top: []
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d752',
    avatar: "https://taimienphi.vn/tmp/cf/aut/hinh-nen-vit-avatar-anh-vit-cute-ngoc-nghech-1.jpg",
    name: "Nhan Nguyen",
    post: "Xin chao cac ban",
    img: [],
    video: [],
    like: [],
    top: []
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f61',
    avatar: "https://tackexinh.com/wp-content/uploads/2021/01/hinh-anh-dep-chat-luong-001.jpg",
    name: "Nhan Nguyen",
    post: "Xin chao cac ban",
    img: [],
    video: ["https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"],
    like: [],
    top: []
  },
];

const NewFeeds = ({ navigation }, props) => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [dataFeeds, setDataFeeds] = useState(DATA)

  const user = {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    avatar: "https://taimienphi.vn/tmp/cf/aut/hinh-nen-vit-avatar-anh-vit-cute-ngoc-nghech-1.jpg",
    name: "Nhan Nguyen",
    post: "Xin chao cac ban",
    img: [],
    video: [],
    like: [],
    top: []
  }

  const [dataUser, setDataUser] = useState({
    images: [
      "https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-gai-xinh-de-thuong-nhat-1.jpg",
      "https://tackexinh.com/wp-content/uploads/2021/01/hinh-anh-dep-chat-luong-001.jpg",
      "https://taimienphi.vn/tmp/cf/aut/hinh-nen-vit-avatar-anh-vit-cute-ngoc-nghech-1.jpg",
      "https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-gai-xinh-de-thuong-nhat-1.jpg",
      "https://tackexinh.com/wp-content/uploads/2021/01/hinh-anh-dep-chat-luong-001.jpg",
      "https://taimienphi.vn/tmp/cf/aut/hinh-nen-vit-avatar-anh-vit-cute-ngoc-nghech-1.jpg",
      "https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-gai-xinh-de-thuong-nhat-1.jpg",
      "https://tackexinh.com/wp-content/uploads/2021/01/hinh-anh-dep-chat-luong-001.jpg",
      "https://taimienphi.vn/tmp/cf/aut/hinh-nen-vit-avatar-anh-vit-cute-ngoc-nghech-1.jpg",
      "https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-gai-xinh-de-thuong-nhat-1.jpg",
      "https://tackexinh.com/wp-content/uploads/2021/01/hinh-anh-dep-chat-luong-001.jpg",
      "https://taimienphi.vn/tmp/cf/aut/hinh-nen-vit-avatar-anh-vit-cute-ngoc-nghech-1.jpg",
      "https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-gai-xinh-de-thuong-nhat-1.jpg",
      "https://tackexinh.com/wp-content/uploads/2021/01/hinh-anh-dep-chat-luong-001.jpg",
      "https://taimienphi.vn/tmp/cf/aut/hinh-nen-vit-avatar-anh-vit-cute-ngoc-nghech-1.jpg",
      "https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-gai-xinh-de-thuong-nhat-1.jpg",
      "https://tackexinh.com/wp-content/uploads/2021/01/hinh-anh-dep-chat-luong-001.jpg",
      "https://taimienphi.vn/tmp/cf/aut/hinh-nen-vit-avatar-anh-vit-cute-ngoc-nghech-1.jpg",
      "https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-gai-xinh-de-thuong-nhat-1.jpg",
      "https://tackexinh.com/wp-content/uploads/2021/01/hinh-anh-dep-chat-luong-001.jpg",
      "https://taimienphi.vn/tmp/cf/aut/hinh-nen-vit-avatar-anh-vit-cute-ngoc-nghech-1.jpg",
      "https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-gai-xinh-de-thuong-nhat-1.jpg",
      "https://tackexinh.com/wp-content/uploads/2021/01/hinh-anh-dep-chat-luong-001.jpg",
      "https://taimienphi.vn/tmp/cf/aut/hinh-nen-vit-avatar-anh-vit-cute-ngoc-nghech-1.jpg",
      "https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-gai-xinh-de-thuong-nhat-1.jpg",
      "https://tackexinh.com/wp-content/uploads/2021/01/hinh-anh-dep-chat-luong-001.jpg",
      "https://taimienphi.vn/tmp/cf/aut/hinh-nen-vit-avatar-anh-vit-cute-ngoc-nghech-1.jpg",
      "https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-gai-xinh-de-thuong-nhat-1.jpg",
      "https://tackexinh.com/wp-content/uploads/2021/01/hinh-anh-dep-chat-luong-001.jpg",
      "https://taimienphi.vn/tmp/cf/aut/hinh-nen-vit-avatar-anh-vit-cute-ngoc-nghech-1.jpg",
    ]
  })

  return (
    <ScrollView>
      <View>
        <SendPost user={user} styles={styles} showTitle={true} />
        {/* <FriendsHome dataUser={dataUser} styles={styles} /> */}
        {
          dataFeeds.map(f => <Post user={f} />)
        }
      </View>
    </ScrollView >
  )
}

export default NewFeeds

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
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  online: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 0,
    right: 2,
    borderColor: 'white',
    borderWidth: 1,
  }
})