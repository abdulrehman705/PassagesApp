import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native'
import Video from 'react-native-video'
import Orientation from 'react-native-orientation'

const Videos = ({navigation}) => {


  const fullScreen = () => {
    Orientation.getOrientation((err, orientation) => {
      if (orientation == 'LANDSCAPE') {
        Orientation.lockToPortrait();
      } else {
        Orientation.lockToLandscape();
      }
    });

  }


  return (
    <View style={styles.Container}>
      {/* <Video
        source={require(
          "./FigmaVideo.mp4"
        )}
        style={styles.BackgroundVideo}
        onPress={() => { fullScreen }}
         /> */}
        <TouchableOpacity
        // transparent={true}
        // onPress={() => { fullScreen }}
        onPress={() => navigation.navigate('Passages')}
      >
        <Image style={styles.play} source={require("./Play.png")} />
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BackgroundVideo: {
    flex: 1,
    // width: '500%',
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }
})

export default Videos