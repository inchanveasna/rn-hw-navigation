
import { Icon } from 'native-base'
import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions, StyleSheet, Image, Linking, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native'
import { PRIMARY, GREY, WHITE, YOUTUBE } from '../Values/Constant'

export class MovieDetail extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: true
        }
    }


    componentDidMount() {
        this.props.navigation.setOptions({
            title: this.props.route.params.mov.title,
        })
    }

    render() {
        const {
            title_long,
            background_image_original,
            medium_cover_image,
            description_full,
            runtime,
            date_uploaded,
            year,
            genres,
            rating,
            yt_trailer_code,
        } = this.props.route.params.mov
        const genre = genres.join(' / ')



        return (
            <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: WHITE }}>
                <ScrollView style={styles.container}>
                    <View style={styles.header}>
                        {
                            <ImageBackground style={styles.cover} resizeMode='stretch' source={{ uri: background_image_original }}
                                onLoadStart={(e) => this.setState({ isLoading: true })}
                                onLoadEnd={(e) => this.setState({ isLoading: false })} />
                        }
                        {
                            this.state.isLoading ? <ActivityIndicator size='large' /> : null
                        }
                    </View>

                    <View style={styles.body}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View>
                                <Image style={styles.thumbnail} resizeMode="stretch" source={{ uri: medium_cover_image }} />
                            </View>

                            <View style={{ flex: 1 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 8 }}>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => Linking.openURL(`${YOUTUBE}${yt_trailer_code}`)}>
                                        <Icon type='Ionicons' name='play-outline' style={{ fontSize: 15, color: PRIMARY }} />
                                        <Text style={{ color: PRIMARY }}> Trailer</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.button}>
                                        <Icon type='Ionicons' name='add-outline' style={{ fontSize: 15, color: PRIMARY }} />
                                        <Text style={{ color: PRIMARY }}> Add favorite</Text>
                                    </TouchableOpacity>
                                </View>


                                <View>
                                    <Text style={styles.title}>{title_long}</Text>
                                    <Text style={{ color: GREY, paddingBottom: 10 }}>{genre}</Text>

                                    <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon type='Ionicons' name='ios-time-outline' style={styles.rating} />
                                            <Text style={styles.rating}> {runtime}min</Text>
                                        </View>

                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon type='Ionicons' name='ios-star-half-outline' style={styles.rating} />
                                            <Text style={styles.rating}>  {rating}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <Text style={{ paddingVertical: 10, fontSize: 20, color: GREY, fontWeight: 'bold' }}>Summary</Text>
                        <Text style={styles.summary}>{description_full}</Text>
                        <View style={{ flex: 1, paddingVertical: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.detailTitle}>Release</Text>
                                <Text style={styles.detail}>: {year}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.detailTitle}>Upload</Text>
                                <Text style={styles.detail}>: {date_uploaded}</Text>
                            </View>


                        </View>

                    </View>

                </ScrollView>
                <View style={styles.footer}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', padding: 10 }}>
                        <TouchableOpacity>
                            <Icon type='Ionicons' name='logo-facebook' style={{ color: WHITE }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon type='Ionicons' name='logo-twitter' style={{ color: WHITE }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default MovieDetail

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        alignItems: 'center',
    },

    body: {
        flex: 4,
        backgroundColor: WHITE,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingVertical: 30,
        paddingHorizontal: 30,
        marginTop: -((width * 0.6) - (width * 0.4))
    },

    footer: {
        justifyContent: 'flex-end',
        backgroundColor: PRIMARY,
        height: 77
    },

    cover: {
        width: width,
        height: width * 0.6
    },

    thumbnail: {
        width: width / 4,
        height: width / 4 * 1.5,
        borderRadius: 10,
        overflow: "hidden",
        marginRight: 20,
        marginBottom: 12,
    },
    title: {
        color: PRIMARY,
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 10
    },
    summary: {
        color: GREY,
        fontSize: 16,
    },
    rating: {
        color: PRIMARY,
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 10
    },
    detailTitle: {
        color: GREY,
        fontSize: 16,
        fontWeight: 'bold'
    },
    detail: {
        color: GREY,
        fontSize: 16,
    },
    button: {
        borderColor: PRIMARY,
        borderWidth: 1,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 40
    }

})