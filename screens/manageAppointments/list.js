import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, } from "react-native";
import { DoctorCard } from "../../components/doctorCard";
import { PatientCard } from "../../components/patientCard";
import { getAllPatientAppointments, getPatientFromFirestore } from "../../firebase/auth";


export function List({data, type}) {

    const [DayOfMonth, setDay] = useState()
     data.sort((a,b) => {
        return (a.date.getDay() - b.date.getDay())
    })
    const updateDate = (day, date) => {
        return(
            <View>
                <Text style = {styles.date}>{date}</Text>
                {
                useEffect(() =>{
                    setDay(day)
                })  
            }
            </View>
        )
        }
    const patient = getAllPatientAppointments();
    console.log(patient)
    return(
        <ScrollView>
            
        {data.map((item, index) => {
            let day = item.date.getDay()+1;
            let month = item.date.getMonth()+1;
            let year = item.date.getFullYear();
            let date = day +"/"+month+"/"+year;
            let today = new Date();
            return (
                <View>
                    {
                        updateDate(day, date)
                    }
                    {
                        type == 'Doctor' ? 
                            <DoctorCard key = {index} name = {item.name} occupation = {item.occupation}
                            uri = {item.image} location = {item.location}
                            startTime = {item.startTime} endTime = {item.endTime} 
                            showCancel = {DayOfMonth == today.getDay()+1 ? false : true}
                            showChat = {false}/> 
                            : <PatientCard name = {item.name} disease = {item.disease} 
                            gender = {item.gender} budget = {item.budget} startTime = {item.startTime}
                            endTime = {item.endTime} showCancel = {DayOfMonth == today.getDay() + 1 ? false : true}
                            showEdit = {DayOfMonth == today.getDay()+1 ? false : true}></PatientCard>
                    }
                    
                </View>
            )
        })
            
    }
    </ScrollView>
)
      
}   
const styles = StyleSheet.create({
    date: {
        fontSize: 18,
        fontWeight: '500',
        color: '#9D9D9D',
        marginTop: 10,
    }
})