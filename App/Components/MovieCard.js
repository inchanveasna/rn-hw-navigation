import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
import { Body, Card, CardItem, Icon } from 'native-base'
import { PRIMARY, GREY } from '../Values/Constant'
import { useNavigation } from '@react-navigation/native';


export default function MovieCard({ mov }) {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity
                style={{ flex: 1, flexDirection: 'column', marginRight: 8, marginLeft: 8 }}
                onPress={() => navigation.navigate('Movie', { mov: mov})}>
                <Card>
                    <CardItem>
                        <Body>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Image style={styles.thumbnail} resizeMode="stretch" source={{ uri: mov.medium_cover_image }} />
                                <View style={{ flex:1, justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text
                                            style={styles.title}
                                            ellipsizeMode='tail'
                                            numberOfLines={2}
                                            selectable={true}>
                                            {mov.title}</Text>
                                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.genres}>
                                            {mov.genres.join(' / ')}</Text>
                                        <Text
                                            style={styles.summary}
                                            numberOfLines={3}
                                            ellipsizeMode='tail'
                                            selectable={true}>
                                            {mov.summary}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'column' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                <Icon type='Ionicons' name='ios-calendar-outline' style={{ fontSize: 15 }} />
                                                <Text style={{ color: GREY }}> {mov.year}</Text>
                                            </View>

                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                <Icon type='Ionicons' name='ios-time-outline' style={{ fontSize: 15 }} />
                                                <Text style={{ color: GREY }}> {mov.runtime}mn</Text>
                                            </View>

                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                <Icon type='Ionicons' name='ios-star-half-outline' style={{ fontSize: 15 }} />
                                                <Text style={{ color: GREY }}> {mov.rating}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Body>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        </View>
    )
}

const { width } = Dimensions.get('screen')
const thumbnailWidth = width / 3
const thumbnailHeight = width / 3 * 1.2

const styles = StyleSheet.create({
    card: {
        padding: 0
    },
    title: {
        fontSize: 18,
        color: PRIMARY,
        fontWeight: 'bold',
        marginBottom: 0
    },
    genres: {
        color: GREY,
        fontWeight: 'bold',
        marginBottom: 8
    },
    summary: {
        fontSize: 15,
        color: GREY,
    },
    thumbnail: {
        borderWidth: 1,
        borderColor: PRIMARY,
        width: thumbnailWidth,
        height: thumbnailHeight,
        marginRight: 8,
    }
})
