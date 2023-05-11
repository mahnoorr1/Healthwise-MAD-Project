import React , {useEffect, useState} from 'react';



import  Picker  from '@react-native-picker/picker';

import firestore from "@react-native-firebase/firestore"
import auth from '@react-native-firebase/auth';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert
  } from 'react-native';
import styles from './styling/SignUPPatient'



const  SecurityCode = ({navigation,route}) => {
const [EMAIL,SETEMAIL]=useState('')
const [SecCode,SetSecCode]=useState(null)
const Verify = () => {
    
    const emailRef = firestore().collection('users').where('Email', '==', EMAIL);
    console.log(SecCode)
    emailRef.get().then((querySnapshot) => {
        if (querySnapshot.empty) {
        Alert.alert('Email is not Entered or Incorrect');
      } else {
        querySnapshot.forEach((doc) => {
            const securityCode = doc.get('SecurityCode');
            if (securityCode == SecCode) {
              Alert.alert('Security code matches');
              navigation.navigate("ForgetPw" , { Email : EMAIL})
            } else {
              Alert.alert('Security code does not match');
            }
          });
      }
    
  })
  .catch((error) => {
    console.log(error);
  });

}
    return(
        
            <View style = {styles.container}>
            <View>
                <Text style = {styles.Heading}>
                    HealthWise
                </Text>
            <View 
                style = {styles.Logo} >
            </View>
           
            <View>
                <Text 
                    style={{
                        color:'black',
                        fontSize:15,
                        fontWeight:'bold',
                        marginLeft:'7%'
                    }}
                >
                    Verification
                </Text>
            </View>
            <View style = {styles.blocks}>
                <TextInput 
                    placeholder='Enter Email'  
                    value={EMAIL}
                    onChangeText = {SETEMAIL}
                    placeholderTextColor="grey" 
                    style = {styles.TextInput}
                />
            </View>
            <View style = {styles.blocks}>
                <TextInput 
                    placeholder='Enter your security code' 
                    secureTextEntry={true} 
                    value = {SecCode}
                    onChangeText = {SetSecCode}
                    placeholderTextColor="grey" 
                    style = {styles.TextInput}
                    keyboardType = 'number-pad'           
                 />
            </View>
            <TouchableOpacity 
                style = {styles.Button}
                onPressIn = {Verify}>
                <Text style = {styles.ButtonText}>
                    NEXT
                </Text>
            </TouchableOpacity>
            </View>
            </View>
        )
    
}

export default SecurityCode