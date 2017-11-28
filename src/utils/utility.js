/**
 * Created by Surajit Sarkar on 6/9/17.
 * Company : Bitcanny Technologies Pvt. Ltd.
 * Email   : surajit@bitcanny.com
 */

import {
    Alert
} from 'react-native';

export default class Utility {

    static showAlert(title, message, positiveStr,negaticeStr,positiveCallback,negativeCallback) {
        Alert.alert(
            title,
            message,
            [
                {
                    text: negaticeStr,
                    onPress: () => negativeCallback(),
                    style: 'cancel'
                },
                {
                    text: positiveStr,
                    onPress: () => positiveCallback()
                },
            ],
            {
                cancelable: false
            }
        );
    }

    static toAppleUuid(uuid) {
        return uuid.replace(/(\S{8})(\S{4})(\S{4})(\S{4})(\S{12})/, "$1-$2-$3-$4-$5").toUpperCase();
    }

}