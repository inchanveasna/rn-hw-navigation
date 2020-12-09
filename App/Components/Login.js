import React, { Component } from 'react'
import { Text, View,Dimensions, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Hey App</Text>
                <TextInput placeholder="Email" style={styles.input} />
                <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.handleLogin(this.props.navigation)}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }

    handleLogin = (navigation) => {
        navigation.navigate('Home')
    }

    componentDidMount(){
        
    }
}

export default Login


const { width } = Dimensions.get('screen')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    title: {
        fontSize: 60,
        fontWeight: 'bold',
        marginBottom: 50,
        color: '#6AC045'
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        width: width - 80,
        height: 50,
        padding: 10,
        marginBottom: 16,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6AC045',
        width: width - 80,
        padding: 10,
        marginTop: 8,
        height: 50,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    }
})

