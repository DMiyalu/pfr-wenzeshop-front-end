import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './style'



export default class CardProduct extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.main} >
                <View style={{width: 230, height: 270}} >
                    <Image style={{width: "100%", height: 200}} source={require('./image.png')} />
                    <Text style={styles.titleProduct} >VIANDE HACHEE</Text>
                    <Text style={styles.priceProduct} >5$ par Kilos</Text>
                </View>
            </View>
        )
    }
}