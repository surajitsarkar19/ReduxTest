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

import {TodoListActions} from '../actions';
import GlobalStyles from "../utils/globalStyle";
import Color from '../utils/color'
import {Card,Icon} from 'react-native-elements'

class TodoListItem extends Component {
    render() {
        let iconName = (this.props.item.completed)?"done":"remove";
        let color = (this.props.item.completed)?Color.Green_500:Color.Red_500;
        return (
            <Card flexDirection='row'
                  containerStyle={{
                      margin: 5
                  }}>
                <Icon
                    name={iconName}
                    color={Color.Blue_500}
                    size={30}
                    style={{flex: 0.1}}/>
                <Text style={{
                    marginLeft:10,
                    fontSize:16,
                    color:color,
                    textDecorationLine:(this.props.item.completed)?'line-through':'none'
                }}>{this.props.item.title}</Text>
            </Card>
        );
    }
}

class TodoListContainer extends Component {

    static navigationOptions = ({navigation}) => ({
        headerTitle: "Todo List",
    });

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.userId = this.props.navigation.state.params.userId;
        this.props.fetchTodoList(this.userId);
    }

    componentWillUnmount() {

    }

    render() {

        let todoList = this.props.todo[this.userId];
        return (
            <View style={styles.container}>
                <FlatList
                    style={{margin: 5}}
                    data={(todoList) ? todoList.data : []}
                    renderItem={({item}) => (
                        <TodoListItem
                            item={item}
                        />
                    )}
                />
                <ActivityIndicator
                    animating={(todoList) ? todoList.isFetching : true}
                    color='#bc2b78'
                    size="large"
                    style={GlobalStyles.activityIndicator}/>
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
        todo: state.todo
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(TodoListActions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoListContainer)