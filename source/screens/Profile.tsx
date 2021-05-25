import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { mainAppBackgroundColor } from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Profile: React.FC = ({

}) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.profileContainer}>
              <Icon name='user' size={90} color={'green'}/>
            <Text style={styles.textStyle}>Profile</Text>
            <Button
            title="Upload Profile Picture"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: mainAppBackgroundColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: hp('3%'),
        fontWeight: 'bold',
        color: '#ffff'
    },
    profileContainer:{
        height: hp('50%'),
        width:wp('95%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#ffff',
        borderRadius:10
    }
})

export default Profile;