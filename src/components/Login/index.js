import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from "react-native";
import InputTextField from "../Features/InputTextField";
import { FETCH_USERS, INSERT_USER } from "../../request/MockApi";
import styles from "./styles";
import { firestore } from "../../firebase";
import { setDoc, doc } from 'firebase/firestore';
import { useDispatch } from "react-redux";
import { loginSuccess } from "./SliceLogin";

const Login = ({ navigation }) => {

  const [user, setUser] = useState({ email: null, password: null });
  const [loginScreen, setLoginScreens] = useState(true)
  const [isLoading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const [users, setUsers] = useState([])


  useEffect(() => {
    FETCH_USERS()
      .then(res => {
        if (res && res.data) {
          setUsers(res.data)
        }
      })
      .catch(err => console.log(err))
  }, [])

  const handleLogin = async () => {
    const { email, password } = user
    console.log('useruseruseruseruser', user)
    if (!email || !password) {
      return Alert.alert(
        "Bạn phải nhập đủ thông tin",
        "Bạn phải nhập đủ thông tin",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
    setLoading(true)
    FETCH_USERS()
      .then(res => {
        if (res && res.data) {
          if (loginScreen) {
            const user = res.data.find(u => u.username == email && u.password == password)
            if (user) {
              dispatch(loginSuccess(user))
              navigation.navigate("Home")
            } else {
              Alert.alert(
                "Đăng nhập thất bại",
                "Vui lòng kiểm tra lại tài khoản hoặc mật khẩu",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
            }
          } else {
            if (users) {
              if (users.find(el => el.Email == email))
                return Alert.alert(
                  "Đăng ký thất bại",
                  "Tài khoản này đã được đăng ký",
                  [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ]
                );
            }
            INSERT_USER({
              "username": email,
              "password": password,
              "name": null,
              "avatar": null,
              "Email": null,
              "createAt": new Date(),
              "is_banned": false,
            })
              .then(r => {
                if (r) {
                  Alert.alert(
                    "Đăng ký thành công",
                    "Đăng ký thành công",
                    [
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                  );
                  setLoginScreens(true)
                }
              })
              .catch(er => {
                Alert.alert(
                  "Đăng ký thất bại",
                  er?.message,
                  [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ]
                );
              })
              .finally(() => setLoading(false))

            // await setDoc(doc(firestore, "users", Date.now().toString()), {
            //   email: email,
            //   password: password,
            //   phone: null,
            //   firstname: null,
            //   lastname: null,
            //   avatar: [],
            //   is_banned: false
            // })
          }
        }
      })
      .catch(err => {
        Alert.alert(
          "Đăng nhập thất bại",
          "err?.message,"
          [
          { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
      })
      .finally(() => setLoading(false))
  }

  const onChangeText = (value, name) => {
    setUser({ ...user, [name]: value })
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={{ marginTop: 60, marginBottom: 48, alignItems: "center", justifyContent: "center" }}>
          <Image source={{ uri: "https://bifina.vn/wp-content/uploads/2015/05/icon-bifina-1.png" }} style={styles.logoApp} />
          <Text style={[styles.text, { marginTop: 10, fontSize: 22, fontWeight: "500" }]}>TuoiThoEm</Text>
        </View>

        <InputTextField style={styles.inputTitle} title="Email" value={user.email} onChangeText={onChangeText} />
        <InputTextField style={{ marginTop: 32, marginBottom: 8 }} title="Password" isSecure={true} value={user.password} onChangeText={onChangeText} />

        <TouchableOpacity>
          <Text style={[styles.text, styles.link, { textAlign: "right", marginTop: 10 }]}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitContainer} onPress={() => handleLogin()}>
          {
            isLoading ?
              <ActivityIndicator size="small" color="#00ff00" />
              :
              <Text style={[styles.text, { color: "#FFF", fontWeight: "600", fontSize: 16 }]}>
                {loginScreen ? "Login" : "Register"}
              </Text>
          }
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
          <Text style={[styles.text, { fontSize: 14, color: "#ABB4BD", textAlign: "center", marginTop: 10, alignItems: 'center', marginRight: 5 }]}>
            {loginScreen ? "Don't have an account?" : "Have an account?"}
          </Text>
          <TouchableOpacity onPress={() => setLoginScreens(!loginScreen)}>
            <Text style={[styles.text, styles.link, { marginTop: 10 }]}>{loginScreen ? "Register Now" : "Login Now"}</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.text, { color: "#ABB4BD", fontSize: 15, textAlign: "center", marginVertical: 20 }]}>or</Text>

        <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity>
            <View style={styles.socialButton}>
              <Image source={{ uri: "https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png" }} style={styles.socialLogo} />
              <Text style={styles.text}>Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image source={{ uri: "https://freesvg.org/img/1534129544.png" }} style={styles.socialLogo} />
            <Text style={styles.text}>Google</Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  );
}

export default Login

