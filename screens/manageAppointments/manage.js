import { All } from './all';
import { Pending } from './pending';
import { Requestss } from './requests';
import { Upcoming } from './upcoming';
import { data } from '../../assets/data';
import { useState, useEffect } from 'react';
import { generalStyles } from '../../style/generalStyles';
import { TabNavigation } from '../../components/tabNavigation';
import { appointments } from "../../assets/patientAppointments"
import { NavigationContainer } from '@react-navigation/native';
import EditAppointment from '../editAppointment/editAppointment';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';

const patientNavigationItems = [
    {
        status: 'All',
    },
    {
        status: 'Upcoming',
    },
    {
        status: 'Pending',
    },
];
const doctorNavigationItems = [
    {
        status: 'All',
    },
    {
        status: 'Upcoming',
    },
    {
        status: 'Requests',
    },
]

export default function ManageAppointment () {
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName= 'Managee'>
            <Stack.Screen name = "Managee" component = {ManageAppointments}></Stack.Screen>
            <Stack.Screen name = "EditAppointment" component = {EditAppointment}></Stack.Screen>
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export function ManageAppointments ({navigation}) {
    const [activeTab, setActiveTab] = useState('All');
    const [actor, setActor] = useState('Doctor');
    const [navigationItems, setNavigationItems] = useState(doctorNavigationItems)

    return (
        <SafeAreaView style = {styles.container}>
            <View style = {generalStyles.header}>
                <Text style = {generalStyles.main_heading}>Manage Appointments</Text>
                <TabNavigation callback={setActiveTab} type = {actor}
                 data = {data} navigationItems={navigationItems}></TabNavigation>
                
            </View>
            <ScrollView>
            {
                activeTab == 'All' ? <All data = {actor == 'Doctor' ? data : appointments} type = {actor} navigation = {navigation}/> 
                : activeTab == 'Upcoming' ? <Upcoming data = {actor == 'Doctor' ? data : appointments} type = {actor} navigation = {navigation}/> 
                : activeTab == 'Pending' ? <Pending data = {actor == 'Doctor' ? data : appointments} type = {actor} navigation = {navigation}/>
                : <Requestss data = {actor == 'Doctor' ? data : appointments} type = {'Doctor'} navigation = {navigation}/>
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

