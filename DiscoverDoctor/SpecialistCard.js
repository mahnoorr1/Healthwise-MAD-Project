import React ,{useState,useEffect} from "react";
import { View , Text , StyleSheet, ScrollView ,FlatList,Image, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import database from "@react-native-firebase/database"
import auth from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore"

export const SpecialistCard = ({navigation,route}) => {
    const { value } = route.params;
    const [data, setData] = useState([]);
    const Specialization = value
    useEffect(() => {
      const drList = firestore().collection('DoctorRecord')
      .where('Specialization', '==', Specialization);

      drList.get().then((querySnapshot) => {
        let data = [];
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        setData(data);
        }).catch((error) => {
            console.log("Error getting documents: ", error);
        });

       } )

    return(
        <View style = {styles.container}>
                <Text style = {styles.mainHeading}>
                    Specialist Doctor
                </Text>
                <View style={styles.line}></View>
                <Text style = {styles.subHeading}>
                    {value} Specialist
                </Text>
                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                    if (item !== null) {
                        return (
                        <View style={styles.card}>
                            <TouchableOpacity 
                                style={{flexDirection:"row"}}
                                onPress = {() => navigation.navigate("DoctorDetail" , {
                                    id : item.id
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
                            <Text style={styles.nameText}>{item.fullName}</Text>
                            <Text style={styles.occupationText}>{item.Specialization}</Text>
                            <Text style = {styles.locationText}>{item.Email}</Text>

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
