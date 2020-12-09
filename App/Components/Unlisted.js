import React, { Component } from 'react'
import { Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native'
import { GREY, NO_IMG, PRIMARY, WHITE } from '../Values/Constant'

export default class Unlisted extends Component {

    render() {
        const title = this.props.route?.params?.item?.title ?  this.props.route.params.item.title : '';
        const publishDate = this.props.route?.params?.item?.publishDate ?  this.props.route.params.item.publishDate : '';

        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date} numberOfLines={1} ellipsizeMode='tail'>{publishDate}</Text>
                <Image style={styles.image} source={{ uri: NO_IMG}} />
            </ScrollView>
        )
    }
}

const {width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: WHITE
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 16
    },
    date: {
        fontSize: 16,
        color: GREY,
        paddingBottom: 16
    },
    image: {
        alignItems: 'center',
        width: width - 32,
        height: width * 0.6
    }
})
