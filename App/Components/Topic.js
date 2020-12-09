import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { PRIMARY, WHITE, DATA_TOPICS } from '../Values/Constant'

export default class Topic extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: DATA_TOPICS
        }
    }


    render() {
        return (
            <ScrollView>
                {
                    this.state.data.map((item, index) =>
                        <this.RenderItem index={index} item={item} />
                    )
                }
            </ScrollView>
        )
    }


    RenderItem = ({index, item}) => {
        return (
            <View key={index} style={styles.itemContainer}>
                <Text style={styles.text}>{item.genre}</Text>
                <TouchableOpacity style={item.isFollow ? styles.buttonSelected : styles.button}
                    onPress={() => this.handleFollow(index, item)}>
                    <Text
                        style={item.isFollow ? styles.buttonTextSelected : styles.buttonText}>
                        {item.isFollow ? 'Following' : 'Follow'}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }


    handleFollow = (index, item) => {
        item.isFollow = !item.isFollow
        let newData = this.state.data
        newData[index] = item
        this.setState({
            data: newData
        })
    }
}



const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: WHITE,
    },
    text: {
        fontSize: 18,
    },
    button: {
        borderWidth: 1,
        borderColor: PRIMARY,
        borderRadius: 8,
        backgroundColor: WHITE,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonSelected: {
        borderWidth: 1,
        borderColor: PRIMARY,
        borderRadius: 8,
        backgroundColor: PRIMARY,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: PRIMARY
    },
    buttonTextSelected: {
        color: WHITE
    }
})
