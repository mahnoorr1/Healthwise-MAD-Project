import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, } from "react-native";
import { DoctorCard } from "./doctorCard";


export function List({data, type}) {

    const [Day, setDay] = useState(0)
     data.sort((a,b) => {
        return (a.date.getDay() - b.date.getDay())
    })
    const updateDate = (day, date) => {
        return(
            <View>
                <Text style = {styles.date}>{date.toString()}</Text>
                {
                useEffect(() =>{
                    setDay(day)
                })  
            }
            </View>
        )
        }
        return(
            <ScrollView>
    {data.map((item, index) => {
        let day = item.date.getDay()+1;
        let month = item.date.getMonth()+1;
        let year = item.date.getFullYear()+1;
        let date = day +"/"+month+"/"+year;
        let today = new Date();
        return (
            <View>
                {
                    (day) == Date ? null : updateDate(day, date)
                }
                <DoctorCard key = {index} name = {item.name} Specialization = {item.Specialization}
                    uri = {item.image} location = {item.location}
                    startTime = {item.startTime} endTime = {item.endTime} 
                    /> 
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