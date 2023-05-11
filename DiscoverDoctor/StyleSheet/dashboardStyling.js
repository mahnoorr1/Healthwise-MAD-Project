import { StyleSheet } from "react-native";

export const dashboardStyling = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F7F6F0',
        padding: 8,  
    },
    topBar:{
        marginTop:20,
        flexDirection:"row"
    },
    logoStyle:{
        width:40,
        height:40,
        borderRadius:20
    },
    heading:{
        color:'black',
        fontSize: 28,
        marginLeft:10,
        fontWeight: "bold",
        alignSelf:'center'
    },
    chatbutton:{
        marginLeft:'55%',
        width:40,
        height:40,
        borderRadius:5
    },
    SearchBar:{
        backgroundColor:'white',
        borderRadius:10,
        marginTop:25,

    },
    specialDRText:{
        color:'black',
        fontSize: 18,
        marginLeft:10,
        fontWeight: "bold"
    },
    seeAllText:{
        color:'black',
        fontSize: 16,
        marginLeft:10,
        marginLeft:'55%'
    },
    cardsBlock:{
        marginTop:20,
        height :140,
        flexDirection :"row",
        justifyContent :"space-evenly"
    },
    cards :{
        length : 140,
        width : 105
    },
    insideCardText:{
        color: "white",
        fontSize: 12,
        lineHeight: 240,
        alignSelf:"center",
        fontWeight: "bold"
    },
    recomendcards:{
        marginTop:20,
        paddingBottom: 80,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'white',
    },
    DrDp:{
        height : 120,
        width :120
    },
    DrNameStyling:{
        color:'black' ,
        marginTop:5, 
        fontSize: 18 , 
        fontWeight: "bold" 
    },
    SalaryStyling:{
        marginTop:5 , 
        fontWeight:"bold" , 
        color : "black"
    }
});