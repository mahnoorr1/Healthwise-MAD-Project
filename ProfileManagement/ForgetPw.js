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



const  ForgetPw = ({navigation,route}) => {
    const { EMAIL } = route.params;
    const [Pw,SetPw]=useState('')
    const[ConfirmPw,SetConfirmPw]=useState('')
const Verify = () => {
    if(Pw.length < 5 || Pw === '' ){
        Alert.alert("Enter correct password( Length should be greater than 5)")
    }
    else if(Pw != ConfirmPw){
        Alert.alert("Passwords should be same")
    }
    else{
        // Update the password for the user with the specified email
        firestore().collection('users').where('Email', '==', EMAIL).get()
            .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                doc.ref.update({
                    Password: Pw
                })
                .then(() => {
                    Alert.alert('Password updated successfully');
                    navigation.navigate("SignIn")
                })
                .catch((error) => {
                    Alert.alert(error);
                });
            });
            })
            .catch((error) => {
            console.log(error);
            });
    }
    
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
                Reset Password
            </Text>
        </View>
        <View style = {styles.blocks}>
            <TextInput 
                placeholder='New Password'  
                secureTextEntry={true}
                placeholderTextColor="grey" 
                style = {styles.TextInput}
                value = {Pw}
                onChangeText = {SetPw}
            />
        </View>
        <View style = {styles.blocks}>
            <TextInput 
                placeholder='Confirm Password' 
                secureTextEntry={true} 
                placeholderTextColor="grey" 
                style = {styles.TextInput}
                value = {ConfirmPw}
                onChangeText = {SetConfirmPw}
            />
        </View>
        <TouchableOpacity 
            style = {styles.Button}
            onPress={Verify}
        >
            <Text style = {styles.ButtonText}>
                SAVE
            </Text>
        </TouchableOpacity>
        </View>
        </View>
        )
    
}
export default ForgetPw;