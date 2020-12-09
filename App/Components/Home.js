
import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import { API_URL, PRIMARY } from '../Values/Constant'
import MovieCard from './MovieCard'

export default class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            movies: [],
            page: 1,
            total: 0,
        }
    }

    render() {
        return (
            <View>
                {
                    <ScrollView>
                        <Text style={styles.latestMovie}>Latest Movies</Text>
                        {
                            this.state.movies.map((item, index) =>
                                <MovieCard key={index} mov={item} />
                            )
                        }
                    </ScrollView>
                }
                { this.state.isLoading ? <ActivityIndicator size='large' /> : null }
            </View>
        )
    }

    handleLoadMore = async () => {
        const { page, total } = this.state
        if (page <= total / 15) {
            this.setState({ page: page + 1 }, this.fetchData)
        }
    }

    fetchData = async () => {
        this.setState({ isLoading: true })
        fetch(`${API_URL}`, {
            method: 'GET',
            headers: {
                'Accept': 'Application/json',
            }
        })
            .then(res => res.json())
            .then(result => {
                this.setState({ movies: this.state.movies.concat(result.data.movies), total: result.data.movie_count, isLoading: false })
            })
            .catch(err => alert(err))
    }

    componentDidMount() {
        this.fetchData()
    }
}



const styles = StyleSheet.create({
    latestMovie: {
        fontSize: 30,
        fontWeight: 'bold',
        padding: 16,
        color: PRIMARY
    }
})