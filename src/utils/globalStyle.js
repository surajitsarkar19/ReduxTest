import {StyleSheet} from "react-native";

/**
 * Created by Surajit Sarkar on 1/12/17.
 * Company : Bitcanny Technologies Pvt. Ltd.
 * Email   : surajit@bitcanny.com
 */

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFE',
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    },
    primaryText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "#000000"
    },
    secondaryText:{
        fontSize: 16,
        color: "#000000"
    }
});
