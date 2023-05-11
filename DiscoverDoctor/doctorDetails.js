import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AppButton } from './Compnents/button'
import { ImageHeader } from './Compnents/header'

export function DoctorDetail({navigation}) {
  return (
    <View style={styles.container}>
      <ImageHeader></ImageHeader>
      <View style = {{ marginTop: '24%', alignItems: 'center'}}>
        <Text style = {styles.name}>Dr. Gigi</Text>
        <Text style = {styles.profile_text}>Eye Specialist</Text>
        <Text style = {styles.profile_text}>gigihadid@gmail.com</Text>
        <View style = {styles.line}></View>
        <View style = {styles.info_box}>
          <View style = {{marginLeft: 10}}>
            <Text style = {styles.info_heading}>Address</Text>
            <Text style = {styles.info_text}>HNO 685 Lane 03 Green Villas</Text>
            <Text style = {styles.info_heading}>Experience</Text>
            <Text style = {styles.info_text}>5 years</Text>
            <Text style = {styles.info_heading}>Hourly Wage</Text>
            <Text style = {styles.info_text}>20 $</Text>
          </View>
        </View>
      </View>
      {/* {onPress={()=>navigation.navigate("Chat")}} */}
      <AppButton onPress = {()=>{
        navigation.navigate('GetAppointment')
      }} name = 'Get Appointment'></AppButton>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6F0',
  },
  
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#24282C',
  }, 
  profile_text: {
    marginTop: 3,
    fontSize: 16,
    color: '#9D9D9D',
    fontWeight: '600',
  },
  line: {
    marginTop: 10,
    marginBottom: 10,
    height: 2,
    width: '92%',
    backgroundColor: '#CDCBCB',
  },
  info_box: {
    marginTop: 10, 
    width: '90%',
    height: 160,
    backgroundColor: 'white'
  },
  info_heading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#24282C',
    marginTop: 5
  },
  info_text: {
    fontSize: 14,
    marginTop: 3,
    fontWeight: '450',
    color: '#9D9D9D',
    marginLeft: 10,
  },
 
});
