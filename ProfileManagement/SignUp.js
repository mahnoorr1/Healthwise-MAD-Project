import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Alert,
    Image
  } from 'react-native';
import { useState } from "react"
import { Picker } from '@react-native-picker/picker';
import database from "@react-native-firebase/database"
import auth from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore"
import styles from './styling/SignUPPatient'
//Import firestore here


import { 
    NavigationContainer
 } from '@react-navigation/native';
import { 
    createNativeStackNavigator
 } from '@react-navigation/native-stack';

//Is main Value or on change Text ni hain


const SignUP = ({navigation,routes}) => {
    const [fullName,setfullName] = useState('')
const [selectedGender,setSelectedGender] = useState('')
const [Age,setAge] = useState();
const [Phone,setPhone] = useState();
const [Email,setEmail] = useState('');
const [Pw,setPw] = useState('');
const [CPw , setCPw] = useState('')

const submitForm = ()=>{
    const phoneRegex = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
    //Check if the phone number is valid
    const isValid = phoneRegex.test(Phone);
    
    if( fullName !== '' && 
        Age != null &&
        selectedGender !== '' && 
        isValid  &&
        Email !== '' &&
        Pw.length > 5 &&
        Pw !== '' &&
        Pw === CPw){
        var value = Math.floor(1000 + Math.random() * 9000)
        const user = {
            fullName : fullName,
            Age : Age,
            Gender: selectedGender,
            Phone : Phone,
            Email : Email,
            Password : Pw,
            SecurityCode : value,
            UserType : 'Pateint'
        }
        auth()
        .createUserWithEmailAndPassword(Email, Pw)
        .then(() => {
             const collection =  firestore()
                                .collection('users')
                                .add(user)
                                .then(()=>{console.log("added")})
            Alert.alert('Your security code is ' + value + ' Signup successfully!')
            navigation.navigate("SignIn")
            })
            .catch(error => {
                console.log(error.code);
                Alert.alert(error.code)
            });
        }
    else{
        Alert.alert(
            'Fill all Inputs.Format the number correctly,match both Passwords')
    }
}
    return(
        <ScrollView >
            <SafeAreaView style = {styles.container}>
            <View>
                <Text style = {styles.Heading}>
                    HealthWise 
                </Text>
            </View>
            <Image source = {require('./../assets/appLogo.png')} style = {{width: 100, height: 100, alignSelf: 'center'}}></Image>
          
            <View style = {styles.Logo} >
            </View>
            <View>
                <Text style = {styles.des}>
                    Sign up as Patient to get Started
                </Text>
            </View>
            <View style = {styles.blocks}>
                <TextInput 
                    style = {styles.TextInput}
                    placeholder='Enter Full Name' 
                    placeholderTextColor="grey"
                    value={fullName}
                    onChangeText={setfullName}
                    
                />
            </View>

            
            
            <View style = {styles.blocks}>
                <Picker
                selectedValue={selectedGender}
                style={{ height: 50, alignItems: 'flex-end' }}
                onValueChange={(itemValue) => setSelectedGender(itemValue)}
                >
                <Picker.Item  
                    label="Select Gender" 
                    value=''   
                    color="grey"
                    textStyle ={{ 
                        fontSize: 20, 
                        fontWeight: 'bold',
                        width:200
                    }}
                    itemStyle={{ width: 500 }} 
                />
                <Picker.Item  
                    label="Male" 
                    value="Male"    
                    color="black"
                    textStyle ={{ 
                        fontSize: 20, 
                        fontWeight: 'bold',
                        width:200
                    }}
                    itemStyle={{ width: 500 }} 
                />
                <Picker.Item label="Female" value="Female"
                    color="black"
                    textStyle ={{ 
                        fontSize: 20, 
                        fontWeight: 'bold'
                    }} 
                 />
                
                </Picker>
                {/* <TextInput
                    style = {styles.TextInput} 
                    placeholder='Gender'  
                    placeholderTextColor="grey" 

                /> */}
            </View>
            <View style = {styles.blocks}>
                <TextInput
                    style = {styles.TextInput} 
                    placeholder='Age' 
                    placeholderTextColor="grey" 
                    keyboardType="number-pad"
                    value={Age}
                    onChangeText={setAge} 
                />
            </View>
            <View style = {styles.blocks}>
                <TextInput
                    style = {styles.TextInput} 
                    placeholder='Phone(Format:03xx-xxxxxxx' 
                    placeholderTextColor="grey"
                    keyboardType="number-pad"
                    value={Phone}
                    onChangeText={setPhone} 
                />
            </View>
            <View style = {styles.blocks}>
                <TextInput
                    style = {styles.TextInput} 
                    placeholder='Email'  
                    placeholderTextColor="grey"
                    value = {Email}
                    onChangeText = {setEmail} 
                />
            </View>
            <View style = {styles.blocks}>
                <TextInput
                    style = {styles.TextInput} 
                    placeholder='Password(should be greater than 5 digits)' 
                    secureTextEntry={true} 
                    placeholderTextColor="grey" 
                    value = {Pw}
                    onChangeText = {setPw}
                />
            </View>
            <View style = {styles.blocks}>
                <TextInput 
                    style = {styles.TextInput}
                    placeholder='Confirm Password' 
                    secureTextEntry={true} 
                    placeholderTextColor="grey"
                    value = {CPw}
                    onChangeText = {setCPw} 
                />
            </View>
            <TouchableOpacity 
                style = {styles.Button}
                onPressOut = {submitForm}
            >
                <Text style = {styles.ButtonText}>
                    SIGN UP
                </Text>
            </TouchableOpacity>
            <View style = {styles.login}>
                <Text style={{color:'black'}}>
                    Already have an account?
                </Text>
                <TouchableOpacity onPress={()=> navigation.navigate("SignIn")}>
                    <Text style = {styles.LoginText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
            </SafeAreaView>
        </ScrollView>
    );
  }
  
  
  export default SignUP;