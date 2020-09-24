import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './style'
import CardProduct from './CardProduct'


export default class Accueil extends React.Component {
    constructor(props) {
        super(props)
        this.state ={}
    }

    render() {
        return (
            <View style={styles.main} >
                <CardProduct />
            </View>
        )
    }
}