import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TextInput } from 'react-native';
import { AppButton } from '../components/button';
import SelectBox from '../components/selectionBox';
import { generalStyles } from '../style/generalStyles';


export default function GetAppointment({navigation}) {
  const startList = ['2:30', '3:30', '4:30', '5:30']
  const endList = ['2:30', '3:30', '4:30', '5:30']
  const [budget, setBudget] = useState()
  const [description, setDescription] = useState()
  const [date, setDate] = useState()

  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState()
  return (
    <ScrollView  style = {styles.main_view}>
      <Text style = {styles.main_heading}>Get Appointment</Text>
      <View style = {styles.line}></View>
      {/* Card */}
      <View style = {styles.card}>
        <Image style = {styles.image} source = {{uri: "https://reactjs.org/logo-og.png"}}></Image>
        <View style = {styles.card_text}>
          <Text style = {styles.card_heading}>Dr. Mahnoor Hashmi</Text>
          <Text style = {styles.card_text1}>Eye Specialist</Text>
          <Text style = {styles.card_text1}>Health ways hospital sadar</Text>
          <Text style = {styles.card_text1}>Rates: 30$ </Text>
        </View>
      </View>
      {/* Card End */}
      <View style = {styles.line}></View>

      {/* Time */}
      <View style = {styles.timeRow}>
          <View style = {{margin: 5,}}>
            <Text style = {generalStyles.grayText}>Start Time</Text>
            <SelectBox list = {startList} setItem = {setStartTime} current = {startTime}></SelectBox>
          </View>
          <View style = {{margin: 5,}}>
            <Text style = {generalStyles.grayText}>End Time</Text>
            <SelectBox list = {endList} setItem = {setEndTime} current = {endTime}></SelectBox>
          </View>
      </View>
  
      <View>
        <Text style = {generalStyles.grayText}>Budget</Text>
        <TextInput style = {[styles.input, {marginTop: 0}]}
         value= {budget} onChangeText = {setBudget}  
         placeholder='Enter Budget... /-'>
        </TextInput>
      
      </View>
      <View>
        <Text style = {generalStyles.grayText}>Date</Text>
        <TextInput style = {[styles.input, {marginTop: 0}]}
         value= {budget} onChangeText = {setBudget}  
         placeholder='12/10/2022'>
        </TextInput>
      
      </View>
      <View>
      <Text style = {generalStyles.grayText}>Issue Description</Text>
        <TextInput multiline = {true} numberOfLines = {2} style = {[styles.input, {marginTop: 0}]}
         value= {description} onChangeText = {setDescription}  
         placeholder='Enter Description...'>
        </TextInput>

      </View>

      <AppButton name = "Send Request" 
      onPress = {()=> {}}></AppButton>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main_view:{
    backgroundColor: '#F7F6F0',
    padding: 10,
    height: '100%'
  },
  main_heading: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#24282C',
  },
  line: {
    height: 2,
    width: '98%',
    marginLeft: '1%',
    marginRight: '1%',
    backgroundColor: '#CDCBCB',
  },
  card: {
    marginLeft: '3%',
    marginRight: '3%',
    marginBottom: 30,
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card_text: {
    flexDirection: 'column',
    margin: 10,
  },
  card_heading: {
    marginTop: 5,
    marginRight: 10,
    fontSize: 18,
    fontWeight: '700',
    color: '#24282C',
  },
  card_text1: {
    fontSize: 14,
    color: '#9D9D9D',
  },
  image: {
    height:100, 
    width: 100,
    borderBottomLeftRadius:15,
    borderTopLeftRadius: 15,
    marginRight: 10,
  },
  timeRow: {
    margin: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  grayText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#9D9D9D',
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    width: '90%',
    marginTop: 30,
    padding: 3,
    fontSize: 16,
    color: 'grey',
    height: 50,
    borderRadius: 15,
    paddingLeft: 20,
    alignSelf: 'center'
  }

});
