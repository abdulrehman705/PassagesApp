import React, { useEffect } from 'react'
import Passages from "./Components/Passages"
import SplashScreen from 'react-native-splash-screen'
import SignUp from './Components/SignUp';
import Instructions from './Components/Instructions';
import Card_Details from './Components/Card_Details';
import WelcomeBack from './Components/WelcomeBack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Videos from './Components/Videos';

const Stack = createNativeStackNavigator();

function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, [])


  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }} >
        <Stack.Screen name="Passages" component={Passages} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Instructions" component={Instructions} />
        <Stack.Screen name="WelcomeBack" component={WelcomeBack} />
        <Stack.Screen name="Card_Details" component={Card_Details} />
        <Stack.Screen name="Videos" component={Videos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
