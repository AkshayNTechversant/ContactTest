import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Loader: React.FC=(props)  => {
  return (
    <Modal visible={props.visible} transparent={true}>
      <View style={styles.conatinerStyle}>
        <View
          style={styles.loaderContainer}>        
          <ActivityIndicator size="large" color="#80f502" />
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  conatinerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  headingStyle: {
    color: '#000',
    fontSize: 18,
    fontWeight:'bold'
  },
  loaderContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    marginBottom: 30,
    marginTop: 30,
    backgroundColor:'transparent',
    height:hp('20%'),
    width:wp('30%'),
    borderRadius: 100,
    flexDirection: 'row',
  },
};
export default Loader;