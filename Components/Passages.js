import React from "react"
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from "react-native"
import SignUp from "./SignUp"


const Passages = ({navigation}) => {



    return (
        <SafeAreaView style={styles.Container}>
            <Image style={styles.logo} source={require("./Frame.png")} />
            <Image style={styles.Image} source={require('./Background.png')} />
            <View style={styles.box}>
                <View style={styles.video}>
                    <TouchableOpacity onPress={() => navigation.navigate('Videos')}>
                        <Image style={styles.play} source={require("./Play.png")} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.heading}>Step-by-step</Text>
                <Text style={styles.Text}>
                    Watch this Step-by-step guidance video on
                    everything offered on the Passages App.
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Image style={styles.GetStarted} source={require('./GetStarted.png')} />
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
        borderRadius: 0,
    },
    box: {
        backgroundColor: '#FBFCFE',
        width: 319,
        height: 401,
        borderRadius: 38,
    },
    video: {
        backgroundColor: '#C4C4C4',
        height: 241,
        width: 241,
        left: 37,
        bottom: 107,
        borderRadius: 16,
    },
    play: {
        height: 67,
        width: 67,
        left: 90,
        top: 80,
    },
    GetStarted: {
        left: 44,
        top: 120,
    },
    heading: {
        height: 34,
        width: 211,
        left: 90,
        top: 505,
        borderRadius: null,
        position: 'absolute',
        width: 211,
        height: 34,
        left: 75,
        top: 145,
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 28,
        // fontFam: 'Montserrat',
        // line - height: 34,
        // text - align: center;
        color: '#9C2B2E',
    },
    Text: {
        // height: 65,
        // width: 247,
        // left: 71,
        top: 231,
        width: 247,
        borderRadius: null,
        fontSize: 18,
        fontWeight: "400",
        alignSelf: 'center',
        textAlign: 'center',
        lineHeight: 22,
        position: 'absolute',
        color: '#2C2540',
    }

})

export default Passages