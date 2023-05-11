import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export function AppButton(props){
    return(
        <View style = {{justifyContent: 'flex-end', marginTop: '40%'}}>
            <TouchableOpacity onPress={props.onPress}  style = {styles.button}>
            <Text style = {styles.button_text}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '80%',
        height: 50,
        backgroundColor: '#D3F36B',
        justifyContent:'center',
        alignSelf: 'center',
        marginBottom: '10%',
        borderRadius: 20
      },
      button_text: {
        color: '#24282C',
        fontWeight: '500',
        fontSize: 18,
        alignSelf: 'center',
      }
})