import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { GREY, PRIMARY, WHITE, DATA_PUBLIC } from '../Values/Constant'

const numberOfColumns = 2
const numberOfMargin = 1

export default class Public extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: DATA_PUBLIC
        }
    }

    render() {
        return (
            <View style={{ flex: 1, margin: 8 }}>
                {
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.data}
                        renderItem={({ item }) =>
                            <this.renderItem item={item} />}
                        numColumns={numberOfColumns}
                    />
                }
            </View>
        )
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <View style={styles.titelContainer}>
                    <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>{item.title}</Text>
                    <Text style={styles.date} numberOfLines={1} >{item.publishDate}</Text>
                    <View style={{ alignItems: 'flex-end' }}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        borderColor: 'lightgray',
        borderWidth: 1,
        margin: numberOfMargin,
        backgroundColor: WHITE
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
