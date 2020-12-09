
import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { DATA_PEOPLES, PRIMARY, WHITE } from '../Values/Constant'

export default class People extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: DATA_PEOPLES
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


    RenderItem = ({ index, item }) => {
        return (
            <View key={index} style={styles.container}>
                <Image style={styles.image} resizeMode='cover' source={{ uri: item.image }} />
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ marginRight: 8 }}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text>{item.company}</Text>
                        <Text>{item.country}</Text>
                    </View>

                    <TouchableOpacity style={item.isFollow ? styles.buttonSelected : styles.button}
                        onPress={() => this.handleFollow(index, item)}>
                        <Text style={item.isFollow ? styles.buttonTextSelected : styles.buttonText}>
                            {item.isFollow ? 'Following' : 'Follow'}
                        </Text>
                    </TouchableOpacity>
                </View>
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

const { width } = Dimensions.get('screen')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 8,
        alignItems: 'center',
        backgroundColor: WHITE
    },

    image: {
        width: width / 4,
        height: width / 4,
        marginRight: 8
        , borderRadius: 16
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',

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
