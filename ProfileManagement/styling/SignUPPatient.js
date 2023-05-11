import {
    StyleSheet
  } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#D3F36B',
        padding: 8,
        paddingTop: '20%'
       
        
    },
    Heading:{
        paddingTop:25,
        color:'black',
        fontSize: 32,
        fontWeight: "bold",
        alignSelf:'center'
    },
    signInText:{
        color:'black',
        fontSize: 28,
        fontWeight: "bold",
        alignSelf:'center'
    },
    resetText:{
        color:'black',
        padding:20,
        fontSize:15,
        fontWeight:'bold'
        
    },
    Logo:{
        padding:10,
        color:'black'
    },
    des:{
        color:'black',
        alignSelf:'center'
    },
    blocks:{
        marginTop:30,
        backgroundColor: 'white',
        width: '90%',
        padding: 3,
        fontSize: 16,
        color: 'grey',
        height: 50,
        borderRadius: 15,
        paddingLeft: 20,
        alignSelf: 'center'
    },
    TextInput:{
        color:'black',
        
    },
    Button:{
        marginTop:25,
        alignSelf:'center',
        paddingTop:15,
        width:'90%',
        paddingBottom:15,
        paddingLeft:50,
        paddingRight:50,
        borderRadius:10,
        backgroundColor:'#24282C'
    },
    ButtonText:{
        color:'white',
        fontSize:18,
        alignSelf:'center'
    },
    login:{
        flex:1,
        flexDirection:'row',
        marginTop:20,
        alignSelf:'center'
    },
    LoginText:{
        fontWeight:'bold',
        fontSize:14,
        color:'black'
    }
});

export default styles;