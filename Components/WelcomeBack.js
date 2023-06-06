import React ,{ useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'


const WelcomeBack = ({navigation}) => {

    const [HideShow, setHideShow] = useState(true)

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
                    <View style={[styles.Input, styles.InputArea]}>
                        <Image style={styles.Icon} source={require("./lock2.png")} />
                        <TextInput secureTextEntry={HideShow} style={styles.TextInput} value='Abdulrehman' />
                        <TouchableOpacity onPress={() => setHideShow(!HideShow)}>
                            <Image style={[styles.Icon, styles.PasswordIcon]} source={HideShow ? require("./eye.png") : require("./see.png")} />
                        </TouchableOpacity>
                    </View>


                    <TouchableOpacity onPress={() => navigation.navigate('Passages')}>
                        <Image style={styles.SignIn} source={require('./SignInbtn.png')} />
                    </TouchableOpacity>
                    <Text style={styles.ForgotPassword}>Forgot Password?</Text>
                    <Text style={styles.SignUpwith}>Sign Up With</Text>
                    <View style={styles.systemlogo}>
                        <Image style={styles.Icon} source={require("./Google.png")} />
                        <Image style={styles.Icon} source={require("./Apple.png")} />
                        <Image style={styles.Icon} source={require("./Facebook.png")} />
                    </View>
                    <View style={styles.Alreadyaccount}>
                        <Text>Already have an account? </Text>
                        <TouchableOpacity>
                            <Text style={styles.txtclr}>Sign In here!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>

    )
}

export default WelcomeBack

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
    InputArea: {
      flexDirection: 'row',
      justifyContent: 'space-between',
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
    PasswordIcon: {
        width: 22,
        height:16,
    },
    Icon: {
        marginHorizontal: 14,
        marginTop: 10,
        fontSize: 30,
        fontWeight: '500',
    },
    TextInput: {
        flex: 3,
        color: '#9C2B2E',
        fontSize: 16,
        fontWeight: '500',
    },
    RowInput: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 24,
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 40,
    },
    SignIn: {
        marginTop: 30,
        alignSelf: 'center',
    },
    ForgotPassword: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
    SignUpwith: {
        alignSelf: 'center',
        fontWeight: '600',
        fontSize: 14,
        marginTop: 20,
    },
    systemlogo: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    Icon: {
        marginHorizontal: 14,
        marginTop: 10,
        fontSize: 30,
        fontWeight: '500',
    },
    Alreadyaccount: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    txtclr: {
        color: '#9C2B2E',
    }
})