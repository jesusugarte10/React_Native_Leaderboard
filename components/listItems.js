import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

const ListItems = ({name, symbol, currentPrice, priceChangePercentage7d, logoUrl, onPress}) => {
    const priceChangeColor = priceChangePercentage7d > 0 ? 'green' : 'red';    
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.itemWrapper}>
                {/*Left Side*/}
                <View style={styles.leftWrapper}>
                    <Image source= {{uri: logoUrl}} style= {styles.image}/>
                    <View style={styles.titlesWrapper}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
                    </View>
                </View>

                {/*Right Side*/}
                <View style={styles.rightWrapper}>
                    <Text style={styles.title}>${currentPrice.toLocaleString('en-US', {currency: 'USD'})}</Text>
                    <Text style={[styles.subtitle, {color: priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text>
                </View>
           </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    
    itemWrapper: {
        paddingHorizontal:16,
        marginTop: 24,
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
    title: {
        fontSize: 18,
    },
    subtitle: {
        marginTop: 4,
        fontSize: 14,
        color: "gray"
    },
})

export default ListItems
