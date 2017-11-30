/**
 * Created by Surajit Sarkar on 28/11/17.
 * Company : Bitcanny Technologies Pvt. Ltd.
 * Email   : surajit@bitcanny.com
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {
    AppRegistry,
    StyleSheet,
    View,
    FlatList,
    TouchableHighlight,
    Text,
    ActivityIndicator
} from 'react-native';

import {UserActions} from '../actions';

class TodoListItem extends Component{
    render(){
        return(
            <View>
                <Text>{this.props.data.title}</Text>
            </View>
        );
    }
}

export default class TodoListContainer extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {

        return (
            <View style={styles.container}>
                <FlatList
                    style={{margin: 5}}
                    data={this.props.user.data}
                    renderItem={({item}) => (
                        <TodoListItem
                            item={item}
                        />
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

function mapStateToProps(state) {
    return {
        todo: state.todo,
        userId: state.user.id
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(UserActions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoListContainer)