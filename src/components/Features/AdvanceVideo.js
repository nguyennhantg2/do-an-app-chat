
import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Dimensions } from 'react-native';

const AdvancedVideo = (props) => {

  const { uriVideo } = props

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: uriVideo,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  );
}

export default AdvancedVideo

const styles = StyleSheet.create({
  video: {
    marginTop: 0,
    padding: 10,
    alignSelf: 'center',
    width: (Dimensions.get('window').width) - 20,
    height: 320,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});