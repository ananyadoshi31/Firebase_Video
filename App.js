import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video style={styles.cont1}
        ref={video}
        
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/fir-video-62114.appspot.com/o/file_example_MP4_480_1_5MG.mp4?alt=media&token=78373b25-b008-4e92-8b8a-cec950e7e11f',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View>
        <Button 
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex: 1, justifyContent: "center"},
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  cont1:{
    width:'100%',
    flex:1,
  }
});
