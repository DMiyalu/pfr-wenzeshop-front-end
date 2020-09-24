import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { Octicons } from '@expo/vector-icons'
import { SimpleLineIcons } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'
import { styles } from './style'
import Panier from '../PanierScreen'


export default class Screen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            styleInput: {},
        }
    }

    onFocus() {
        this.setState({ styleInput: styles.inputOnFocus })
    }

    onBlur() {
        this.setState({ styleInput: styles.inputOnBlur })
    }
    render() {
        return (
            <View style={styles.container} >
                <SafeAreaView style={styles.safeAreaViewStyle} >
                    <View style={styles.mainHeader} >
                        <View style={styles.header} >
                            <TouchableOpacity 
                                style={{margin: 16}}
                                onPress={this.props.navigation.openDrawer}
                            >
                                <Octicons name="three-bars" size={24} color="white" />
                            </TouchableOpacity>  
                            <View style={styles.titleApp}>
                                <Text style={styles.titleAppText} >Wenzeshop</Text>
                            </View>
                            <View style={styles.panier}>
                                <Text style={styles.qtePanier} >
                                    13
                                </Text>
                                <TouchableOpacity
                                    style={styles.panierIcone}
                                    onPress={this.props.getBasket}
                                >
                                    <SimpleLineIcons style={styles.panierIcone} name="basket" size={26} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.searchBar}>
                            <AntDesign style={styles.searchIcon} name="search1" size={20} />
                            <TextInput
                                onFocus={ () => this.onFocus() }
                                onBlur={ () => this.onBlur() }
                                style= {[styles.input, this.state.styleInput]}
                                placeholder="Que cherchez-vous..."
                            />
                        </View>
                    </View>
                    <View style={styles.optionsMenu} >
                        <Text style={styles.text} >{<this.props.name />}</Text>  
                    </View>
                </SafeAreaView>
            </View>
        )
    }
}
