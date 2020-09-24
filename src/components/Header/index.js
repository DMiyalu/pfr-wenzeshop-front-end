import React from 'react'
import Screen from './Screen'
import PanierScreen from '../PanierScreen'
import Accueil from '../Accueil'
import Compte from '../Compte'
import Apropos from '../Apropos'


export const AccueilScreen = ({navigation}) => <Screen 
    navigation={navigation} 
    name={Accueil}
/>

export const CompteScreen = ({navigation}) => <Screen 
    navigation={navigation} 
    name={Compte}
/>

export const Panier = ({navigation}) => <Screen 
    navigation={navigation} 
    name={PanierScreen}
/>

export const AproposScreen = ({navigation}) => <Screen 
    navigation={navigation} 
    name={Apropos}
/>

