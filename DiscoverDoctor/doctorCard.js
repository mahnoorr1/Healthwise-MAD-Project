import { View, StyleSheet, PixelRatio, Image, Text, TouchableOpacity } from 'react-native'
import { generalStyles } from './generalStyles'


export function DoctorCard (props) {
    return (
        <View style = {[styles.container, props.showChat ? {height: 175} : null]}>
            <Image source = {{uri: props.uri}} style = {[styles.image, props.showChat ? {height: 175} : null]}></Image>
            <View style = {styles.content}>
                <View style = {styles.showCancelView}>
                    <Text style = {styles.name}>{props.name}</Text>
                </View>
                <Text style = {styles.text}>{props.Specialization}</Text>
                <Text style = {styles.text}>{props.location}</Text>
                <View style = {styles.line}></View>
                
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
    cancelButton: {
        borderRadius: 15, 
        width: 75,
        height: 25,
        marginLeft: 20,
        borderWidth: 2,
        borderColor: '#D31C1C',
        alignContent: 'center'
    },
    cancelText: {
        color: '#D31C1C',
        fontSize: 14,
        fontWeight: '500',
        alignSelf: 'center'
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