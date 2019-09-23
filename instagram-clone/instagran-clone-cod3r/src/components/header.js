import React from 'react';
import { connect } from 'react-redux';
import { Gravatar } from 'react-native-gravatar';
import { View, StyleSheet, Text, Platform, Image } from 'react-native';

import icon from '../../assets/imgs/icon.png';

import If from './common/If';

class Header extends React.Component {

    render() {

        const name = this.props.user.name || 'Anonymous';
       
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>

                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}>
                        Instagran Clone
                    </Text>

                </View>
                <View style={styles.userContainer}>

                    <Text style={styles.user}>
                        {name}
                    </Text>
                    <If test={(this.props.user.email)}>
                        <Gravatar 
                            options={{ email: this.props.user.email, secure: true }} 
                            style={styles.avatar} 
                        />
                    </If>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    userContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    user: {
        fontSize: 10,
        color: '#888'
    },

    avatar: {
        width: 30,
        height: 30,
        marginLeft: 10
    },

    image: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },

    title: {
        color: '#000',
        fontFamily: 'shelter',
        height: 30,
        fontSize: 28
    }
});

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Header);