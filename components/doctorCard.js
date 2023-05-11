import { View, StyleSheet, PixelRatio, Image, Text, TouchableOpacity } from 'react-native'
import { generalStyles } from '../style/generalStyles'
function MessageIcon (){
    return (
        <TouchableOpacity style = {{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: '#24282C',
            alignSelf: 'flex-end',
            marginTop: 7, 
            justifyContent: 'center'
        }}>
            <Image  style={{
                alignSelf: 'center',
                width: PixelRatio.getPixelSizeForLayoutSize(8),
                height: PixelRatio.getPixelSizeForLayoutSize(8)
            }} source = {require('../assets/Vector.png')}></Image>
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

export function DoctorCard (props) {
    return (
        <View style = {[styles.container, props.showChat ? {height: 175} : null]}>
            <Image source = {{uri: props.uri}} style = {[styles.image, props.showChat ? {height: 175} : null]}></Image>
            <View style = {styles.content}>
                <View style = {styles.showCancelView}>
                    <Text style = {styles.name}>{props.name}</Text>
                    {
                        props.showCancel ? CancelButton() : null
                    }
                </View>
                <Text style = {styles.text}>{props.occupation}</Text>
                <Text style = {styles.text}>{props.location}</Text>
                <View style = {styles.line}></View>
                <View style = {generalStyles.timeView}>
                    <View style = {generalStyles.timeButton}>
                        <Text style = {generalStyles.timeText}>{props.startTime}</Text>
                    </View>
                    <Text style = {[generalStyles.timeText, {color: '#9D9D9D'}]}>to</Text>
                    <View style = {[generalStyles.timeButton, {marginLeft: 10}]}>
                        <Text style = {generalStyles.timeText}>{props.endTime}</Text>
                    </View>
                </View>
                    
                {
                    props.showChat ? <MessageIcon/> : null
                }
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        alignSelf: 'center',
        paddingRight: 10,
        height: 150,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 10
    },
    image: {
        width: 120,
        height: 150,
        position: 'relative',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
    },
    content: {
        padding: 10,
        marginLeft: 20
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 4
    },
    showCancelView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: '#9D9D9D',
        marginBottom: 2
    },
    
    line: {
        marginTop: 5,
        height: 1,
        backgroundColor: '#9D9D9D',
        width: '100%'
    }
})