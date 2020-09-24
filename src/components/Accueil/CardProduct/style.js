import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    main: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "left",
        paddingLeft: 10,
        boxSizing: "border-box",
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    titleProduct: {
        color: "rgb(44,43,43)",
    },
    priceProduct: {
        color: "rgb(44,43,43)",
        fontWeight: 300,
    }
})
