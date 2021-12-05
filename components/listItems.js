import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import * as Animatable from 'react-native-animatable';

const ListItems = ({name, score, position, onPress}) => {
    
    var quote;
    var numberColor;
    if (position==1){
        numberColor = "gold"
        quote = "The Big Boss"
    }
    else if (position==2){
        numberColor = "silver"
        quote = "Never Say Never"
    }
    else if (position==3){
        numberColor = "brown"
        quote = "Almost There"
    }
    else{
        numberColor = "black"
        quote = ""
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <View animation="fadeInUpBig" style={styles.itemWrapper}>
                {/*Left Side*/}
                <View style={styles.leftWrapper}>
                    <Text style={{fontSize: 50,fontWeight: "bold", color: numberColor}}>{position}</Text>
                    <View style={styles.titlesWrapper}>
                        <Text style={{fontSize: 20}}>{name}</Text>
                        <Text style={{fontSize: 15, color: numberColor}}>{quote}</Text>
                    </View>
                </View>

                {/*Right Side*/}
                <View style={styles.rightWrapper}>
                    <Text style={styles.titleRight}>{score}</Text>
                </View>
           </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    leadNumber: {
        fontSize: 50,
        fontWeight: "bold"
    },
    
    itemWrapper: {
        paddingHorizontal:20,
        marginTop: 30,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center"
    },

    leftWrapper: { 
        flexDirection: "row",
        alignItems: "center"
    },

    image: {
        height: 48,
        width: 48,

    },

    titlesWrapper:{
        marginLeft: 8,
    },
    rightWrapper: {
        alignItems: 'flex-end',
    },

    titleLeft: {
        fontSize: 20,
    },
    titleRight: {
        fontSize: 35,
        fontWeight: "bold",
    },
    subtitle: {
        marginTop: 4,
        fontSize: 14,
        color: "gray"
    },
})

export default ListItems
