import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Card_Details = ({navigation}) => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.Container}>
                <Image style={styles.logo} source={require('./Frame.png')} />
                <View style={styles.InnerContainer}>
                    <Text style={styles.heading}>Add card details</Text>
                    <View style={styles.Input}>
                        <Image style={styles.Icon} source={require("./user.png")} />
                        <TextInput style={styles.TextInput} placeholder='Card holder name' />
                    </View>
                    <View style={styles.Input}>
                        <Image style={styles.Icon} source={require("./card.png")} />
                        <TextInput style={styles.TextInput} placeholder='Card number' />
                    </View>
                    <View style={styles.RowInput}>
                        <View style={styles.InnrInput}>
                            <Image style={styles.Icon} source={require("./card.png")} />
                            <TextInput style={styles.TextInput} placeholder='***' />
                        </View>
                        <View style={styles.InnrInput}>
                            <Image style={styles.Icon} source={require("./Calander.png")} />
                            <TextInput style={styles.TextInput} placeholder='00/00' />
                        </View>
                    </View>
                    <View style = {styles.btn}>
                        <TouchableOpacity onPress={() => navigation.navigate('WelcomeBack')}>
                        <Image source={require('./Pay.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Instructions')}>
                        <Image source={require('./Back.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>

    )
}

export default Card_Details

const styles = StyleSheet.create({
    Container: {
        flex: 3,
        backgroundColor: '#2C2540',
    },
    logo: {
        alignSelf: 'center',
        width: 100,
        height: 100,
        marginVertical: 30,
    },
    InnerContainer: {
        flex: 2,
        backgroundColor: 'white',
        borderTopLeftRadius: 53,
        borderTopRightRadius: 53,
    },
    heading: {
        fontWeight: '700',
        fontSize: 28,
        color: '#9C2B2E',
        margin: 35,
    },
    Input: {
        flexDirection: 'row',
        marginVertical: 16,
        marginHorizontal: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#9C2B2E',
        borderColor: '#000000',
    },
    InnrInput: {
        flexDirection: 'row',
        marginVertical: 16,
        marginHorizontal: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#9C2B2E',
        borderColor: '#000000',
        width: 110,
    },
    Icon: {
        marginHorizontal: 14,
        marginTop: 10,
        fontSize: 30,
        fontWeight: '500',
    },
    TextInput: {
        color: '#9C2B2E',
        fontSize: 16,
        fontWeight: '500',
      },
    RowInput: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // justifyContent: 'space-around',
        // justifyContent: 'space-between',
        // width: 90,
        marginHorizontal: 24,
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 40,
    }
})