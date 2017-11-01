/**
 * Created by Surajit Sarkar on 1/11/17.
 * Company : Bitcanny Technologies Pvt. Ltd.
 * Email   : surajit@bitcanny.com
 */

import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { UserActions } from '../actions';
import {
    AppRegistry,
    StyleSheet,
    View,
    FlatList,
    TouchableHighlight,
    Text
} from 'react-native';

import HttpClient from '../api/httpClient'


class UserListItem extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <TouchableHighlight
                onPress={() => this.props.onItemClicked(this.props.user)}
                underlayColor='#F1F1F1'>

                <View style={{flexDirection:'row',paddingTop:10,paddingBottom:10}}>

                    <Text
                        style={{flex:1,fontWeight:'bold',
                            fontSize: 16,
                            color: "#000000"}}>
                        {this.props.user.name}
                    </Text>

                </View>

            </TouchableHighlight>
        );
    }
}

class UserComponent extends Component {

    constructor(props) {
        super(props)
        this.state= {
            user:JSON.parse("[\n" +
                "     {\n" +
                "         \"key\": 1,\n" +
                "         \"name\": \"Leanne Graham\",\n" +
                "         \"username\": \"Bret\",\n" +
                "         \"email\": \"Sincere@april.biz\",\n" +
                "         \"address\": {\n" +
                "             \"street\": \"Kulas Light\",\n" +
                "             \"suite\": \"Apt. 556\",\n" +
                "             \"city\": \"Gwenborough\",\n" +
                "             \"zipcode\": \"92998-3874\",\n" +
                "             \"geo\": {\n" +
                "                 \"lat\": \"-37.3159\",\n" +
                "                 \"lng\": \"81.1496\"\n" +
                "             }\n" +
                "         },\n" +
                "         \"phone\": \"1-770-736-8031 x56442\",\n" +
                "         \"website\": \"hildegard.org\",\n" +
                "         \"company\": {\n" +
                "             \"name\": \"Romaguera-Crona\",\n" +
                "             \"catchPhrase\": \"Multi-layered client-server neural-net\",\n" +
                "             \"bs\": \"harness real-time e-markets\"\n" +
                "         }\n" +
                "     }\n" +
                " ]")
        };
    }

    componentDidMount() {
        //this.props.getUser();
        client = new HttpClient();
        client.get("https://jsonplaceholder.typicode.com/users",false)
            .then((data)=>console.log(data))
    }

    componentWillUnmount() {

    }

    render() {

        return (
            <View style={styles.container}>
                <FlatList
                          data={this.props.user}
                          renderItem={({item}) => (
                              <UserListItem
                                  user={item}
                                  onItemClicked={(user) => {
                                      alert(user.name)
                                      //this.onSSIDSelected(ssid);
                                  }}
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
        backgroundColor: '#F5FCFE',
    }
});

function mapStateToProps (state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(UserActions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserComponent)