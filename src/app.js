/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

import PeopleComponent from './containers/peopleComponent'
import UserContainer from './containers/userContainer'

export default class App extends React.Component {
    render() {
        return (
            <UserContainer/>
        )
    }
}