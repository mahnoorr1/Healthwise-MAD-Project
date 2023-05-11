import { useState, useEffect } from 'react';
import { Text, StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { TabNavigation } from './tabNavigation';
import { generalStyles } from './generalStyles';
import { Eye } from './Eye';
import { Cardio } from './Cardio';
import { Dental } from './Dental';


const data = [
  {
      key: 1,
      name: "Hamza",
      Specialization: "Eye Specialist",
      image: 'https://reactjs.org/logo-og.png',
      location: "Al-Shifa Eye hospital",
      startTime: '2:00 pm',
      endTime: '2:30 pm',
      date: new Date("2023-01-01 00:00:00"),
      isApproved: true
  },
  {
      key: 2,
      name: "Mahnoor",
      Specialization: "Cardio Specialist",
      image: 'https://reactjs.org/logo-og.png',
      location: "CMH hospital",
      startTime: '2:30 pm',
      endTime: '2:00 pm',
      date: new Date("2023-01-04 00:00:00"),
      isApproved: true
  },
  {
      key: 3,
      name: "Asfand",
      Specialization: "Eye Specialist",
      image: 'https://reactjs.org/logo-og.png',
      location: "Al-Shifa Eye hospital",
      startTime: '3:00 pm',
      endTime: '3:30 pm',
      date: new Date("2023-01-04 00:00:00"),
      isApproved: false
  },
  {
      key: 4,
      name: "Urooj",
      Specialization: "Dental Specialist",
      image: 'https://reactjs.org/logo-og.png',
      location: "CMH hospital",
      startTime: '2:00 pm',
      endTime: '2:30 pm',
      date: new Date("2023-01-06 00:00:00"),
      isApproved: true
  },
  {
      key: 5,
      name: "Khezar",
      Specialization: "Dental Specialist",
      image: 'https://reactjs.org/logo-og.png',
      location: "Al-Shifa hospital",
      startTime: '2:00 pm',
      endTime: '2:30 pm',
      date: new Date("2023-01-01 00:00:00"),
      isApproved: true
  },
]


const navigationItems = [
    {
        status: 'Eye',
    },
    {
        status: 'Cardio',
    },
    {
        status: 'Dental',
    },
];

export default function ManageDoctors () {
    const [activeTab, setActiveTab] = useState('Eye');
    const [Day, setDay] = useState(0);
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
    return (
        <SafeAreaView style = {styles.container}>
            <View style = {generalStyles.header}>
                <Text style = {generalStyles.main_heading}>Recommnded Doctors</Text>
                <TabNavigation callback={setActiveTab} type = "Doctor"
                 data = {data} navigationItems={navigationItems}></TabNavigation>
                
            </View>
            <ScrollView>
            {
                activeTab == 'Eye' ? <Eye data = {data} type = 'Doctor'></Eye> 
                : activeTab == 'Cardio' ? <Cardio data = {data} type = 'Doctor'></Cardio> 
                : activeTab == 'Dental' ? <Dental data = {data} type = 'Doctor'></Dental>
                : null
            }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F6F0'
    },

})