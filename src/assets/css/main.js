import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "'Roboto', sans-serif"
    },
    "theme-btn": {
        "border": "none",
        "color": "white",
        "fontWeight": "bold",
        "position": "relative",
        "width": 35,
        "height": 35
    },
    "controls": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "position": "fixed",
        "top": "30%",
        "width": 175,
        "border": "1px solid #ddd",
        "background": "#fff",
        "zIndex": 1
    },
    "controls h2": {
        "fontSize": 14,
        "fontWeight": "bold",
        "marginBottom": 5
    },
    "common-title": {
        "height": 18,
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "common-title h1": {
        "fontSize": 18,
        "fontFamily": "'Roboto', sans-serif",
        "textTransform": "uppercase",
        "fontWeight": "700",
        "float": "left"
    },
    "h1": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "h2": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "footer": {
        "marginTop": 20
    }
});