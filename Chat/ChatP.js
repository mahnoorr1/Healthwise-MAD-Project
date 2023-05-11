import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import database from "@react-native-firebase/database"



// save state of the user that is user is eother a patient or doctor
//thn compare that state with item.item.user

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    
  },
  header:{
    height: '10%', 
    width: '100%', 
    backgroundColor: '#24282C',
    paddingTop:10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
},
main_heading:{
    color:'white',
    fontSize:20,
    
    lineHeight:25,
    
    alignSelf:"center",
    paddingTop:10
    
},
  doctorMessageContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#D3F36B',
    margin: 8,
    padding: 8,
    borderRadius: 8,
  },
  patientMessageContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#D3F36B',
    margin: 8,
    padding: 8,
    borderRadius: 8,
  },
  messageTextD: {
    fontSize: 15,
    color: '#000'
  },
  messageTextP: {
    fontSize: 15,
    color: 'black'
  },
  messageTimestamp: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10
  },
  inputButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#D3F36B'
  },
  inputButtonImage: {
    width: 25,
    height: 25
  }
});

export default function ChatP(){
  // idr????
  const [inputTextValue, setInputTextValue] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = database().ref('messages').on('value', snapshot => {
      const Messages = Object.values(snapshot.val());
 
      setMessages(Messages);
      console.log(messages);
    })
    return () => {
      unsubscribe()
    };
  }, []);
  
  
  // const getDatabase = async ()=>{
  //   try { 
  //     database().ref('messages').on('value', snapshot => {
  //       const messages = snapshot.val();
  //       console.log(messages[1].text);
  //       console.log(messages.length)
  //       setMessages( messages );
  //       console.log(Messages)
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }

  
    
  // }
  
  const sendData = async()=>{
    try {
      const id = messages.length
      console.log(id)

      database().ref(`messages/${id}`).set({
        text: inputTextValue,
        createdAt: Date.now(),
        user: 'patient'
      });
     console.log("data sent")
     setInputTextValue('')
    } 
    catch (error) {
      console.log(error);
    }
  }

    return (
      <View style={styles.container}>
        <View style = {styles.header}>
                <Text style = {styles.main_heading}>
                    Doctor
                </Text>
        </View>
        <FlatList
          style ={{marginTop:10}}
          data={messages}
          renderItem={({ item }) => {
            if (item !== null) {
              const date = new Date(item.createdAt);
              const formattedTime = date.toLocaleTimeString();
              const formattedDate = date.toLocaleDateString();
              return (
                <View >
                  <View style={{alignSelf:'center'}}>
                    <Text style={{color:'grey', fontWeight:'bold'}}>
                      {formattedDate}
                    </Text>
                  </View>
                  <View style={styles.patientMessageContainer}>
                    <Text style={styles.messageTextP}>{item.text}</Text>
                    <Text style={styles.messageTimestamp}>{formattedTime}</Text>
                  </View>
                </View>
              );
            }
          }}
        />
        <View style={styles.inputContainer}>
          <TouchableOpacity>
            <Image source={require('../Images/arr.png')} style={{ width: 40, height: 40,marginRight:7,borderRadius:5 }} />
          </TouchableOpacity>
          <TextInput
            value={inputTextValue}
            onChangeText={setInputTextValue}
            style={styles.input}
            placeholder='Type a message...'
            placeholderTextColor='#999'
          />
          <TouchableOpacity onPress={() => { sendData() }}>
            <Image source={require('../Images/arr.png')} style={{ width: 37, height: 37 ,marginLeft:7,borderRadius:5}} />
          </TouchableOpacity>
        </View>
      </View>
    );
  
}