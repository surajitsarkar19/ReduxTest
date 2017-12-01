/**
 * Created by Surajit Sarkar on 28/11/17.
 * Company : Bitcanny Technologies Pvt. Ltd.
 * Email   : surajit@bitcanny.com
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';
import Color from '../utils/color'
import UserContainer from '../containers/userContainer'
import TodoListContainer from '../containers/todoListContainer'

const navigationOptions = {
    headerStyle: {
        backgroundColor: Color.Blue_500
    },
    headerTitleStyle:{
      color:Color.White
    },
    headerTitle: "ReduxTest",
    headerTintColor: Color.white,
};

const UserNavigator = StackNavigator({
    Home: {
        screen: UserContainer,
    },
    Profile: {
        screen: TodoListContainer,
    },
},{navigationOptions:navigationOptions});

export default UserNavigator;