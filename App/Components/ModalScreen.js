import React from 'react'
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { PRIMARY, WHITE } from '../Values/Constant'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'native-base';


export default function ModalScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.btnClose} onPress={() => navigation.goBack()}>
                    <Icon type='Ionicons' name='md-close' style={{color:'white', fontSize: 40, paddingHorizontal: 4, paddingVertical: 25}} />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Unlimited Reading.</Text>
            <Text style={styles.title}>Free for 1 Month.</Text>
            <Text style={{textAlign:'center'}} >Read on any device, ad-free, and offline.</Text>
            <Text style={{textAlign:'center', marginBottom: 8}} >We'll remind you 3 days before your trial ends. Cancel anytime.</Text>
            <PricingCard price='$5 / month' />
            <PricingCard price='$50 / year' />
        </View>
    )
}

const PricingCard = ({price}) => {
    return (
        <View style={styles.pricingCard}>
            <Text style={styles.price}>{price}</Text>
            <Text>First month free</Text>
            <Button title='Start your free tial' />
        </View>
    )
}


const {width} = Dimensions.get('window')
const styles = StyleSheet.create({
    header:{
        justifyContent: 'center',
        backgroundColor: PRIMARY,
        width: width,
        marginBottom: 16,
        height: 80
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: WHITE,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 4
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: 4,
    },
    pricingCard: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 20,
        margin: 4,
        borderWidth: 1,
        borderColor: 'lightgray'
    },
    btnClose:{
        padding: 8
    }
})
