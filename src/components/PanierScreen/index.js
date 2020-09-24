import React from 'react'
import { View, Text } from 'react-native'


export default class PanierScreen extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <View style={{flex: 1, width: 100, height: "100%", backgroundColor: "blue"}} >
                <Text>Votre panier est vide !</Text>
            </View>
        )
    }
}