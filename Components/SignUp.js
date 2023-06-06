import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native'
// import { CheckBox } from '@react-native-community/checkbox'

const SignUp = ({navigation}) => {
  const [HideShow , setHideShow] = useState(true)
  const [visible , setvisible] = useState(true)


  return (
    <ScrollView>
      <View>
        <Text style={styles.Head}>Create your account</Text>
        <View style={styles.Input}>
          {/* <Icon style={styles.Icon} name='rowing' /> */}
          <Image style={styles.Icon} source={require("./user.png")} />
          <TextInput style={styles.TextInput} value='Jon Doe' />
        </View>
        <View style={styles.Input}>
          <Image style={styles.Icon} source={require("./email.png")} />
          <TextInput style={styles.TextInput} value='jondoe@gmail.com' />
        </View>
        <View style={styles.Password}>
          <View style={styles.InputArea}>
            <Image style={styles.Icon} source={require("./lock1.png")} />
            <TextInput secureTextEntry={visible} style={styles.TextInput} value='Abdulrehman' />
            <TouchableOpacity onPress={() => setvisible(!visible)}>
            <Image style={[styles.Icon , styles.PasswordIcon]} source={ visible ? require("./eye.png") : require("./see.png")} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Password}>
          <View style={styles.InputArea}>
            <Image style={styles.Icon} source={require("./lock2.png")} />
            <TextInput secureTextEntry={HideShow} style={styles.TextInput} value='Abdulrehman' />
            <TouchableOpacity onPress={() => setHideShow(!HideShow)}>
            <Image style={[styles.Icon , styles.PasswordIcon]} source={ HideShow ? require("./eye.png") : require("./see.png")} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Input}>
          <Image style={styles.Icon} source={require("./code.png")} />
          <TextInput style={styles.code} />
          <TextInput style={styles.code} />
          <TextInput style={styles.code} />
          <TextInput style={styles.code} />
        </View>
        {/* <CheckBox /> */}
        <TouchableOpacity onPress={() => navigation.navigate('Instructions')}>
          <Image style={styles.btn} source={require('./Button.png')} />
        </TouchableOpacity>
      </View>
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FBFCFE',
  },
  Head: {
    color: '#9C2B2E',
    fontSize: 29,
    fontWeight: '700',
    marginHorizontal: 43,
    marginTop: 35,
  },
  TextInput: {
    flex: 3,
    color: '#9C2B2E',
    fontSize: 16,
    fontWeight: '500',
  },
  Icon: {
    marginHorizontal: 14,
    marginTop: 10,
    fontSize: 30,
    fontWeight: '500',
  },
  PasswordIcon: {
    width: 22,
    height: 16,
  },
  Input: {
    flexDirection: 'row',
    marginVertical: 16,
    marginHorizontal: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#9C2B2E',
    borderColor: '#000000',
  },
  Password: {
    marginVertical: 16,
    marginHorizontal: 40,
    borderBottomWidth: 1,
    borderColor: '#000000',
  },
  InputArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    alignSelf: 'center',
  },
  code: {
    borderWidth: 1,
    borderColor: '#9C2B2E',
    marginLeft: 17,
    marginBottom: 20,
    height: 35,
    borderRadius: 5,
  },
  SignUpwith: {
    alignSelf: 'center',
    color: '#2C2540',
    fontWeight: '600',
    fontSize: 14,
  },
  systemlogo: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  Alreadyaccount: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  txtclr: {
    color: '#9C2B2E',
  }
})

export default SignUp