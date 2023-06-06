import React from 'react'
import { View,
     Text,
      Image,
       StyleSheet,
        SafeAreaView,
         TouchableOpacity,
          ScrollView,
         } from "react-native"
function Instructions({navigation}) {
  

    return (
        <SafeAreaView style={styles.Container}>
            <Image style={styles.logo} source={require("./Frame.png")} />
            <Image style={styles.Image} source={require('./Background.png')} />
            <View style={styles.box}>
                <Text style = {styles.heading}>Free</Text>
                <Text style = {styles.Text}>PASSAGES is FREE to Join so everyone can capture their story</Text>
                <View style = {styles.list}>
                    <Image style = {styles.Dot} source={require('./ListDot.png')} />
                    <Text style = {styles.listText}>1 GB of Storage</Text>
                </View>
                <View style = {styles.list}>
                    <Image style = {styles.Dot} source={require('./ListDot.png')} />
                    <Text style = {styles.listText}>Personal Vault</Text>
                </View>
                <View style = {styles.list}>
                    <Image style = {styles.Dot} source={require('./ListDot.png')} />
                    <Text style = {styles.listText}>3 Digital Safe's with Life  Story Timelines</Text>
                </View>
                <View style = {styles.list}>
                    <Image style = {styles.Dot} source={require('./ListDot.png')} />
                    <Text style = {styles.listText}>Virtual Time is Capsules for Future Messages</Text>
                </View>
                <View style = {styles.list}>
                    <Image style = {styles.Dot} source={require('./ListDot.png')} />
                    <Text style = {styles.listText}>No Advertising</Text>
                </View>
                <TouchableOpacity style = {styles.selectbtn} onPress={() => navigation.navigate('Card_Details')}>
                <Image source={require('./SelectButton.png')}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#2C2540',
        alignItems: "center",
    },
    logo: {
        width: 100,
        height: 100,
        top: 49,
    },
    Image: {
        height: 194,
        width: 390,
        top: 374,
    },
    box: {
        backgroundColor: '#FBFCFE',
        width: 319,
        height: 441,
        borderRadius: 38,
        bottom: 80,
    },
    heading: {
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 28,
        color: '#9C2B2E',
        marginTop: 35,
    },
    Text: {
        alignSelf: 'center',
        textAlign: 'center',
        width: 247,
        margin: 22,
        fontWeight: '500',
        color: '#2C2540',
    },
    list: {
        flexDirection: 'row',
        // marginTop: 20,
        marginHorizontal: 45,
        width: 244,
        // backgroundColor: 'red' ,
    },
    Dot: {
        color: '#9C2B2E',
        marginTop: 10,
        marginRight: 14,
    },
    listText: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 28,
        color: '#2C2540',
    },
    selectbtn: {
        alignSelf: 'center',
        marginTop: 48,
    }

})

export default Instructions