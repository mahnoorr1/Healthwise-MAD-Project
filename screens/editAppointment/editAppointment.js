import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { AppButton } from '../../components/button';
import { PatientCard } from '../../components/patientCard';
import SelectBox from '../../components/selectionBox';
import { generalStyles } from "../../style/generalStyles"

const startList = ['2:30', '3:30', '4:30', '5:30']
const endList = ['2:30', '3:30', '4:30', '5:30']
export default function EditAppointment() {
  const [startTime, setStartTime] = React.useState();
  const [endTime, setEndTime] = React.useState()
  return (
    <View style={styles.container}>
      <Text style = {[generalStyles.main_heading, {color: '#24282C'}]}>Edit Appointment</Text>
      <View style = {generalStyles.line}></View>
      <PatientCard></PatientCard>
      <Text style = {generalStyles.grayText}>Edit</Text>
      <View style = {generalStyles.line}></View>
      <View style = {styles.timeRow}>
        <View>
          <Text style = {generalStyles.grayText}>Start Time</Text>
          <SelectBox list = {startList} setItem = {setStartTime} current = {startTime}></SelectBox>
        </View>
        <View>
          <Text style = {generalStyles.grayText}>End Time</Text>
          <SelectBox list = {endList} setItem = {setEndTime} current = {endTime}></SelectBox>
        </View>
      </View>
      <AppButton name = "Save Changes"></AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F6F0',
    padding: 10,
    height: '100%',
    flex: 1,
  },
  timeRow: {
    margin: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-betwe en'
  },
});
