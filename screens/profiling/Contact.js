import React from "react";
import {View,Text,SafeAreaView, StyleSheet,TouchableOpacity, TextInput } from "react-native";



export default function Contact () {
  
  const [name, onChangename] = React.useState(null);
  const [email, onChangeemail] = React.useState(null);
  const [ms, onChangems] = React.useState(null);
  return (

<View style={{ backgroundColor: '#ffffff',}}>

    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangename}
        value={name}
        placeholder="Name"
        
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeemail}
        placeholder="Email"
        value={email}
      
      />
       <TextInput
        style={styles.input2}
        onChangeText={onChangems}
        value={ms}
        placeholder="Type your message here"
         

       
      />
      <TouchableOpacity style={{marginRight: 30,
        marginLeft: 30,
        marginTop: 30,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#28282B',
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#fff',
   }}>
    <Text style={{
        color: '#fff',
        textAlign: 'center',
        fontWeight:'bold'
        }}>SEND MESSAGE</Text>
</TouchableOpacity>

    </SafeAreaView>
    </View>
  );
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    marginLeft: 30,
    marginTop:30,
    marginRight:30,
    borderWidth: 3,
    padding: 10,
    borderColor: ' #f2f2f2',
    
  },

  input2: {
    height: 200,
    margin: 30,
    borderWidth: 3,
    padding: 10,
    borderColor: ' #f2f2f2',
    
  },
 
});

