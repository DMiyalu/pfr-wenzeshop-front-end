import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {Dimensions} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {
  AccueilScreen as Accueil,
  CompteScreen as Compte,
  Panier,
  AproposScreen as Apropos
} from './src/components/Header'

const DrawerNavigator = createDrawerNavigator({
  Accueil,
  Compte,
  Panier,
  Apropos
})

export default createAppContainer(DrawerNavigator)