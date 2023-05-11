import React , {useState} from 'react';
import { View, Text,TextInput,TouchableOpacity,ScrollView, Alert, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styling/SignUPPatient'
import { Picker } from '@react-native-picker/picker';
import database from "@react-native-firebase/database"
import auth from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore"

const SignUPd = () => {

    const [fullName,setfullName] = useState('')
    const [MinCharges,setMinCharges] = useState();
    const [Address,setAddress] = useState('');
    const [Email,setEmail] = useState('');
    const [Pw,setPw] = useState('');
    const [CPw , setCPw] = useState('')
    const [selectedGender,setSelectedGender] = useState('')
    const [selectedSpecialization, setselectedSpecialization] = useState('')

    const submitForm =  ()=>{
        
        if( fullName !== '' && 
            selectedGender !== '' && 
            selectedSpecialization !== ''  &&
            Email !== '' &&
            Address !== '' &&
            MinCharges != null &&
            Pw.length > 5 &&
            Pw !== '' &&
            Pw === CPw){
                var value = Math.floor(1000+Math.random()*9000)
                
            const user = {
                fullName : fullName,
                MinCharges : MinCharges,
                Gender: selectedGender,
                Specialization : selectedSpecialization,
                Email : Email,
                Password : Pw,
                SecurityCode : value,
                UserType : 'Doctor'
            }
            console.log("above")
            console.log(user);
            auth()
            .createUserWithEmailAndPassword(Email, Pw)
            .then(() => {
                console.log('User account created & signed in!');
                const collection =  firestore()
                                    .collection('users')
                                    .add(user)
                                    .then(()=>{console.log("added")})
                const DrRecord = firestore()
                                .collection('DoctorRecord')
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
                'Fill all Inputs and also match both Passwords')
        }
    }
    return(
        <SafeAreaView style = {styles.container}>
            <ScrollView >
                <View>
                    <Text style = {styles.Heading}>
                        HealthWise 
                    </Text>
                </View>
                <Image source = {require('./../assets/appLogo.png')} style = {{width: 100, height: 100, alignSelf: 'center'}}></Image>
          
                <View>
                    <Text style = {styles.des}>
                        Sign up as Doctor to get Started
                    </Text>
                </View>
                <View style = {styles.blocks}>
                    <TextInput 
                        placeholder='Enter Full Name' 
                        placeholderTextColor="grey"
                        style = {styles.TextInput}
                        value={fullName}
                        onChangeText={setfullName}
                    />
                </View>
                
                <View style = {styles.blocks}>
                    <Picker
                    selectedValue={selectedSpecialization}
                    style={{ height: 50, alignItems: 'flex-end' }}
                    onValueChange={(itemValue) => setselectedSpecialization(itemValue)}
                    >
                    <Picker.Item  
                        label="selected Specialization" 
                        value=''   
                        color="grey"
                        textStyle ={{ 
                            fontSize: 20, 
                            fontWeight: 'bold',
                            width:200
                        }}
                        itemStyle={{ width: 500 }} 
                    />
                    <Picker.Item label="Eye Specialist" value="Eye Specialist"
                        color="black"
                        textStyle ={{ 
                            fontSize: 20, 
                            fontWeight: 'bold'
                        }} 
                    />
                    <Picker.Item label="Skin Specialist" value="Skin Specialist"
                        color="black"
                        textStyle ={{ 
                            fontSize: 20, 
                            fontWeight: 'bold'
                        }} 
                    />
                    <Picker.Item label="Dental" value="Dental"
                        color="black"
                        textStyle ={{ 
                            fontSize: 20, 
                            fontWeight: 'bold'
                        }} 
                    />
                    <Picker.Item label="Cardio Specialist" value="Cardio Specialist"
                        color="black"
                        textStyle ={{ 
                            fontSize: 20, 
                            fontWeight: 'bold'
                        }} 
                    />
                    
                    </Picker>
                
            
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
                        placeholder='Min-Charges' 
                        placeholderTextColor="grey"
                        style = {styles.TextInput}
                        keyboardType = "number-pad"
                        value={MinCharges}
                        onChangeText={setMinCharges} 
                        
                    />
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
                        placeholder='Address'  
                        placeholderTextColor="grey" 
                        style = {styles.TextInput}
                        value = {Address}
                        onChangeText = {setAddress} 
                    />
                </View>
                <View style = {styles.blocks}>
                    <TextInput 
                        placeholder='Password(Length should be greater than 5)' 
                        secureTextEntry={true} 
                        placeholderTextColor="grey" 
                        style = {styles.TextInput}
                        value = {Pw}
                        onChangeText = {setPw}
                    />
                </View>
                <View style = {styles.blocks}>
                    <TextInput 
                        placeholder='Confirm Password' 
                        secureTextEntry={true} 
                        placeholderTextColor="grey" 
                        style = {styles.TextInput}
                        value = {CPw}
                        onChangeText = {setCPw} 
                    />
                </View>
                <TouchableOpacity 
                    style = {styles.Button}
                    onPress = {submitForm}
                >
                    <Text style = {styles.ButtonText}>
                        SIGN UP
                    </Text>
                </TouchableOpacity>
                <SafeAreaView style = {styles.login}>
                    <Text style = {{color:'black'}} >
                        Already have an account?
                    </Text>
                    <TouchableOpacity onPress={()=> navigation.navigate("SignIn")}>
                        <Text style = {styles.LoginText}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ScrollView>
        </SafeAreaView>
    
    )
}

export default SignUPd;