/**
 * Created by Surajit Sarkar on 28/11/17.
 * Company : Bitcanny Technologies Pvt. Ltd.
 * Email   : surajit@bitcanny.com
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';

import UserContainer from './containers/userContainer'
import TodoListContainer from '../containers/todoListContainer'

const UserNavigator = StackNavigator({
    Home: {
        screen: UserContainer,
    },
    Profile: {
        screen: TodoListContainer,
    },
});

export default UserNavigator;