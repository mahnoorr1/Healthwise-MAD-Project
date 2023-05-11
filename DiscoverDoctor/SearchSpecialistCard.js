import React, { useState } from "react";
import { View , Text , StyleSheet, ScrollView ,FlatList,Image, TouchableOpacity,TextInput } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { dashboardStyling } from "./StyleSheet/dashboardStyling";

export const SearchSpecialistCard = ({navigation,route}) => {
    //Check this Value n compare or send it in db
    const [textInputValue,settextInputValue] = useState('')
    const drData = [
        {
            key: 1,
            name: "Hamza",
            occupation: "Eye Specialist",
            image: '../Images/dr1.png',
            location: "Al-Shifa Eye hospital",
            startTime: '2:00 pm',
            endTime: '2:30 pm',
            date: new Date("2023-01-01 00:00:00"),
            isApproved: true
        },
        {
            key: 2,
            name: "Mahnoor",
            occupation: "Cardio Specialist",
            image: '../Images/dr1.png',
            location: "CMH hospital",
            startTime: '2:30 pm',
            endTime: '2:00 pm',
            date: new Date("2023-01-04 00:00:00"),
            isApproved: true
        },
        {
            key: 3,
            name: "Asfand",
            occupation: "Eye Specialist",
            image: '../Images/dr1.png',
            location: "Al-Shifa Eye hospital",
            startTime: '3:00 pm',
            endTime: '3:30 pm',
            date: new Date("2023-01-04 00:00:00"),
            isApproved: false
        },
        {
            key: 4,
            name: "Urooj",
            occupation: "Dental Specialist",
            image: '../Images/dr1.png',
            location: "CMH hospital",
            startTime: '2:00 pm',
            endTime: '2:30 pm',
            date: new Date("2023-01-06 00:00:00"),
            isApproved: true
        },
        {
            key: 5,
            name: "Khezar",
            occupation: "Dental Specialist",
            image: '../Images/dr1.png',
            location: "Al-Shifa hospital",
            startTime: '2:00 pm',
            endTime: '2:30 pm',
            date: new Date("2023-01-01 00:00:00"),
            isApproved: true
        },
      ]
      //data
   // const { value } = route.value;
    return(
        <View style = {styles.container}>
            <ScrollView>
                <TextInput
                    placeholder="Search Doctor"
                    style = {
                        {
                            backgroundColor:'#DBDBDB',
                            borderRadius:10,
                            marginTop:25,
                            marginLeft:12,
                            marginRight:12
                    
                        }
                    }
                    placeholderTextColor="black" 
                    keyboardType="default"
                    onChangeText={settextInputValue}
                    value={textInputValue}
                    
                />
                <View style={styles.line}></View>
                <Text style = {styles.subHeading}>
                    Result
                </Text>
                <FlatList
                    data={drData}
                    renderItem={({ item }) => {
                    if (item !== null) {
                        return (
                        <View style={styles.card}>
                            <TouchableOpacity 
                                style={{flexDirection:"row"}}
                                onPress = {() => navigation.navigate("DoctorDetail" , {
                                    id : 1
                                })}
                                >
                            <Image 
                                source = {require('../Images/dr1.png')} 
                                    style = {{
                                        width:100,
                                        height:110,
                                        borderBottomLeftRadius:20,
                                        borderTopLeftRadius:20
                                    }}
                            />
                            <View>
                            <Text style={styles.nameText}>{item.name}</Text>
                            <Text style={styles.occupationText}>{item.occupation}</Text>
                            <Text style = {styles.locationText}>{item.location}</Text>
                            <Ionicons 
                                name="chevron-forward" 
                                style = {{
                                fontSize:25,
                                marginLeft:"70%",
                                color:"#D3F36B",
                                backgroundColor:"black",
                                width :25,
                                borderRadius:20
                                }}    
                            />
                            </View>
                            
                            </TouchableOpacity>
                        </View>
                        );
                    }
                    }}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F7F6F0',
        padding : 8
    },
    mainHeading :{
        paddingTop:15,
        fontWeight:"bold",
        fontSize : 28,
        color : 'black',
        marginLeft:10
    },
    line:{
        paddingTop:15,
        borderBottomColor: 'grey',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    subHeading :{
        paddingTop:15,
        fontSize : 20,
        color : 'black',
        marginLeft:10
    },
    card : {
        margin: 15,
        flex:1,
        flexDirection:"row",
        borderRadius: 20,
        backgroundColor: 'white',
    },
    nameText:{
        paddingLeft:20,
        paddingTop:10,
        fontSize:20,
        color:'black'
    },
    occupationText:{
        paddingLeft:20,
        color:'grey',
    },
    locationText:{
        paddingLeft:20,
        paddingBottom:0,
        marginBottom:0,
        color:'grey'
    }


 })
