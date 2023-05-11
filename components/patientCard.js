import { generalStyles } from "../style/generalStyles"
import { useNavigation } from '@react-navigation/native';
import {View, Text, Image, StyleSheet, TouchableOpacity, } from "react-native"


function EditIcon (){
  const navigation = useNavigation();
  return (
      <TouchableOpacity style = {{
          width: 40,
          height: 40,
          borderRadius: 20,
          alignSelf: 'flex-end',
          marginTop: 2, 
          justifyContent: 'center'
      }}  onPress = {() =>{
            navigation.navigate("EditAppointment")
      }}
      >
          <Image  style={{
              alignSelf: 'center',
              width: 31,
              height: 31
          }} source = {require('../assets/editIcon.png')}></Image>
      </TouchableOpacity>

  )
}

const CancelButton = () =>{
  return (
      <TouchableOpacity style = {generalStyles.cancelButton}>
          <Text style = {generalStyles.cancelText}>cancel</Text>
      </TouchableOpacity>
  )
}

const approveButton = () => {
  return (
    <TouchableOpacity style = {[generalStyles.cancelButton, {borderColor: '#4CD31C'}]}>
          <Text style = {[generalStyles.cancelText, {color: '#4CD31C'}]}>approve</Text>
    </TouchableOpacity>
  )
}


export function PatientCard(props) {
    return(
        <View style = {[styles.card, props.showEdit ? {height: 170} : null]}>
          <Image style = {[styles.image, props.showEdit ? {height: 170} : null]} 
          source = {{uri: "https://reactjs.org/logo-og.png"}}></Image>

          <View style = {styles.card_text}>
            <View style = {styles.showCancelView}>
                    <Text style = {styles.card_heading}>{props.name}</Text>
                    {
                        approveButton()
                    }
            </View>
            <View style = {styles.showCancelView}>
                    <Text style = {styles.card_text1}>{props.disease}</Text>
                    {
                        props.showCancel ? CancelButton() : null
                    }
            </View>
            <Text style = {styles.card_text1}>{props.gender}</Text>
            <Text style = {styles.card_text1}>Budget: {props.budget} </Text>
            <View style = {generalStyles.timeView}>
            <View style = {generalStyles.timeButton}>
                <Text style = {generalStyles.timeText}>{props.startTime}</Text>
            </View>
            <Text style = {[styles.timeText, {color: '#9D9D9D'}]}>to</Text>
            <View style = {[generalStyles.timeButton, {marginLeft: 10}]}>
                <Text style = {generalStyles.timeText}>{props.endTime}</Text>
            </View>
          </View>
              {
                  //props.showEdit ? 
                  <EditIcon/> 
                  //: null
              }
          </View>
          
        </View>
    )
  }

  const styles = StyleSheet.create({
    card: {
        alignSelf: "center",
        width: '95%',
        marginBottom: 5,
        marginTop: 5,
        backgroundColor: 'white',
        borderRadius: 15,
        height: 160,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 10
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
        width: 120,
        height: 160,
        position: 'relative',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
    },
      showCancelView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
      
  })