import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";


const RootStack = createStackNavigator();

const RootStackScreen = ({navigation})=>(
    <RootStack.Navigator
    screenOptions={{ 
        showLabel:false,
        headerShown: false,
    }}>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
    </RootStack.Navigator>

);
export default RootStackScreen;