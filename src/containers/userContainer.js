/**
 * Created by Surajit Sarkar on 1/11/17.
 * Company : Bitcanny Technologies Pvt. Ltd.
 * Email   : surajit@bitcanny.com
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {UserActions} from '../actions';
import {
    AppRegistry,
    StyleSheet,
    View,
    FlatList,
    TouchableHighlight,
    Text,
    ActivityIndicator
} from 'react-native';

import Color from '../utils/color';


class UserListItem extends Component {

    static colorArray = [
        Color.Red_500, Color.Blue_500, Color.Pink_500, Color.Purple_500, Color.Indigo_500,
        Color.Light_Blue_500, Color.Cyan_500, Color.Green_500, Color.Yellow_500, Color.Orange_500,
        Color.Grey_500, Color.Blue_Grey_500, Color.Brown_500, Color.Teal_500, Color.Light_Green_500,
        Color.Amber_500, Color.Deep_Purple_500,
        //repeat
        Color.Red_500, Color.Blue_500, Color.Pink_500, Color.Purple_500, Color.Indigo_500,
        Color.Light_Blue_500, Color.Cyan_500, Color.Green_500, Color.Yellow_500,
    ];

    constructor(props) {
        super(props);
    }

    renderImage(name) {
        let text = name.substring(0, 1).toUpperCase();
        let color = UserListItem.colorArray[text.charCodeAt(0) - 65];
        return (
            <View
                style={{
                    borderWidth: 1,
                    borderColor: 'rgba(0,0,0,0.2)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    backgroundColor: color,
                    borderRadius: 100,
                }}
            >
                <Text style={{color: 'white',fontWeight:'bold',fontSize:17}}>{text}</Text>
            </View>
        );
    }

    render() {
        return (
            <TouchableHighlight
                onPress={() => this.props.onItemClicked(this.props.user)}
                underlayColor='#F1F1F1'>

                <View style={{flexDirection: 'row', paddingTop: 10, paddingBottom: 10}}>

                    {this.renderImage(this.props.user.name)}

                    <View style={{
                        marginLeft: 10
                    }}>

                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 16,
                                color: "#000000"
                            }}>
                            {this.props.user.name}
                        </Text>

                        <Text
                            style={{
                                fontSize: 16,
                                color: "#000000"
                            }}>
                            {this.props.user.email}
                        </Text>

                    </View>

                </View>

            </TouchableHighlight>
        );
    }
}

class UserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {};
    }

    componentDidMount() {
        this.props.getUser();
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
                        <UserListItem
                            user={item}
                            onItemClicked={(user) => {
                                alert(user.name)
                                this.props.selectUser(user.id)
                            }}
                        />
                    )}
                />
                <ActivityIndicator
                    animating={this.props.user.isFetching}
                    color='#bc2b78'
                    size="large"
                    style={styles.activityIndicator}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    }
});

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(UserActions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserComponent)