import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react"
import {View, Image} from 'react-native'

//Importing Screens
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileSceen";
import SecondScreen from "../screens/SecondScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions={{ 
                showLabel:false,
                headerShown: false,
                tabBarActiveTintColor: '#009387',
            }}
        >
            <Tab.Screen 
                name="World" 
                component={HomeScreen}
                options={{
                    tabBarIcon:({focused}) => (
                        <View>
                            <Image
                                source={require('../assets/world.png')}
                                resizeMode='contain'
                                style={{
                                    height:25,
                                    width:25,
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen 
                name="Friends" 
                component={SecondScreen}
                options={{
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems:'center', justifyContent:'center'}}>
                            <Image
                                source={require('../assets/friends.png')}
                                resizeMode='contain'
                                style={{
                                    height:30,
                                    width:30,
                                }}
                                
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems:'center', justifyContent:'center'}}>
                            <Image
                                source={require('../assets/profile.png')}
                                resizeMode='contain'
                                style={{
                                    height:20,
                                    width:20,
                                }}
                                
                            />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
        
    );
}
export default Tabs