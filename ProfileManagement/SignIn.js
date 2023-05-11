import React , {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,Alert
} from 'react-native';
import styles from './styling/SignUPPatient'
import database from "@react-native-firebase/database"
import auth from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore"

const SignIn = ({navigation,route}) => {
  const [Email,setEmail]  = useState('')
  const[Pw,setPW] = useState('')
  

  const checkEmail = ()=>{
      auth().signInWithEmailAndPassword(Email, Pw).
    
      then(() => {
          Alert.alert("Logged In with email: ", Email)
          firestore().collection('users').where('Email', '==', Email).get()
          .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              const usertype = doc.get('UserType')
              if(usertype == 'Pateint'){
                  navigation.navigate("DrDiscover" , { value : Email})
              }
          });
      })
      .catch((error) => {
      console.log(error);
      });
  
  }).
    
    catch((error) => Alert.alert("Error: ", error.code))
  }
  return(
      <View style = {[styles.container, {flex: 1, alignContent: 'center', justifyContent: 'center', alignItems: 'center'}]}>
            
          <View style = {{marginBottom: 20}}>
              <Text style = {styles.Heading}>
                  HealthWise 
              </Text>
          </View>
          <Image source = {require('./../assets/appLogo.png')} style = {{width: 100, height: 100, alignSelf: 'center'}}></Image>
          <View style = {styles.Logo} >
          </View>
          <View>
              <Text style = {styles.signInText}>
                  Sign In 
              </Text>
          </View>
          <View style = {styles.blocks}>
              <TextInput 
                  placeholder='Email'  
                  placeholderTextColor="grey" 
                  style = {styles.TextInput}
                  value = {Email}
                  onChangeText = {setEmail}
              />
          </View>
          <View style = {styles.blocks}>
              <TextInput 
                  placeholder='Password' 
                  secureTextEntry={true} 
                  placeholderTextColor="grey" 
                  style = {styles.TextInput}
                  value = {Pw}
                  onChangeText = {setPW}
              />
          </View>
          <TouchableOpacity 
              style = {styles.Button}
              onPressIn = {checkEmail}
          >
              <Text style = {styles.ButtonText}>
                  SIGN IN
              </Text>
          </TouchableOpacity>
          <TouchableOpacity style = {{alignSelf:'flex-end'}} onPress={()=> navigation.navigate("SecurityCode")}>
                        <Text style = {{fontSize:15,fontWeight:'bold',color:'black',marginTop:10,marginRight:22, alignSelf: 'center'}}>
                            Forget Password?
                        </Text>
            </TouchableOpacity>
          <View style = {{color:"black",fontWeight:'bold',alignSelf:'center',marginTop:10,flex:1,flexDirection:'row'
             ,fontSize:15}}>
              <Text style={{color:'black',fontSize:15}}>
                  Or SignUp as :
              </Text>
              <TouchableOpacity onPress={()=> navigation.navigate("SignUP")}>
                  <Text style={{color:"black",fontWeight:'bold' , marginStart:5,fontSize:15}}>
                       Patient 
                  </Text>
            </TouchableOpacity>
            <Text style={{color:'black' , marginStart:5,fontSize:15}}>
                    Or as :
                </Text>
          <TouchableOpacity onPress={()=> navigation.navigate("SignUPd")}>
              <Text style = {{color:"black",fontWeight:'bold' , marginStart:5,fontSize:15}}>
                        Doctor
              </Text>
          </TouchableOpacity>
          </View>
          
        
      </View>
  )
}
export default SignIn;