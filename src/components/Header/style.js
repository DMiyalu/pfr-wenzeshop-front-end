import { StyleSheet } from 'react-native'


const charteColor = {
    pinkColor: "rgb(255,107,107)",
    greenColor: "rgb(34, 72, 62)",
    blueColor: "rgb(6, 127, 204)",
}

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFF",
        width: "100%"
    },
    safeAreaViewStyle: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    text: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "500"
    },
    mainHeader: {
        height: 250,
        width: "100%",
        margin: 0,
        backgroundColor: charteColor.greenColor,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        flexFlow: "row wrap",
        alignItems: "center",
        width: "100%",
        marginTop: 5,
    },
    titleApp: {
        width: 305,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    titleAppText: {
        color: "white",
        fontSize: 20,
        fontFamily: "sans-serif",
        fontWeight: "bold",
    },
    searchBar: {
        width: "100%",
        height: 41,
        paddingLeft: 14,
        paddingRight: 14,
        marginTop: 5,
    },
    searchIcon: {
        position: "absolute",
        top: 8,
        left: 29,
        color: charteColor.blueColor,
    },
    input: {
        outline: "none",
        borderWidth: 1,
        borderColor: "black",
        height: "100%",
        width: "100%",
        borderRadius: 5,
        paddingTop: 13,
        paddingBottom: 16,
        paddingLeft: 40,
        cursor: "pointer",
        textDecorationLine: "none",
        textDecorationColor: "none",
        color: "black",
        backgroundColor: "white"
    },
    inputOnFocus: {
        borderColor: "none",
        textDecorationLine: "none",
        borderRadius: 5,
        outline: "none",
        outlineWidth: "0"
    },
    inputOnBlur: {
        borderColor: "none"
    },  
    panier: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 5,
    },
    panierIcone: {
        color: charteColor.pinkColor,   
    },
    qtePanier: {
        color: "white",
        fontSize: 12,
        position: "absolute",
        top: 5,
        left: 7,
        height: 10,
        width: 20,
        textAlign: "center",
    },
    optionsMenu: {
        width: "100%",
        height: "max-content",
        position: "absolute",
        top: 140,
    },
})
