import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import { PROFILE_IMG } from '../Values/Constant'

export default function Profile() {
    return (
        <View style={styles.container}>
            <Image style={styles.profileImage} source={{uri: PROFILE_IMG}} />
            <Text style={styles.name}>IN CHANVEASNA</Text>
        </View>
    )
}

const {width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    profileImage:{
        width: width / 3,
        height: width / 3,
        borderRadius: width / 3 / 2
    },
    name:{
        fontSize: 22,
        fontWeight:'bold',
        padding: 8
    }
})