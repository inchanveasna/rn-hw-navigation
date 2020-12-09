import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { GREY, PRIMARY, WHITE } from '../Values/Constant'

export default class Draft extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [
                { title: '7 things you should never do in the morning', publishDate: '13 Dec 2020' },
                { title: 'When the love is good, you wait', publishDate: '13 Dec 2020' },
                { title: 'The 15 foods you should be eating every single day and why', publishDate: '13 Dec 2020' }
            ]
        }
    }



    render() {
        return (
            <View>
                <ScrollView>
                    {
                        this.state.data.map((item, index) =>
                            <this.renderItem key={index} item={item} />
                        )
                    }
                </ScrollView>
            </View>
        )
    }


    renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <View style={styles.titelContainer}>
                    <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>{item.title}</Text>
                    <Text style={styles.date} numberOfLines={1} >{item.publishDate}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.jumpTo('Unlisted', { item: item })} >
                        <Text style={styles.buttonText}>More</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 16,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: WHITE,
        marginBottom: 1
    },
    titelContainer: {
        flex: 1,
        paddingRight: 12,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 12
    },
    date: {
        fontSize: 16,
        color: GREY
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: PRIMARY
    }
})
