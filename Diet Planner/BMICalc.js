import { useState } from 'react';
import { 
    View, 
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Alert,
    StyleSheet
} from 'react-native';


const BMICalc = ({navigation,route}) => {
   const [weight,setweight] = useState()
   const [height,setheight] = useState()

    const calculateBMI = () => {
        const Weight = weight
        const Height = height
        console.log(Weight)
        console.log(Height)
        const bmi = Weight / ((Height / 100) * (Height / 100));

        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        const message = `Your BMI is ${bmi.toFixed(2)}.\nYou are in the ${category} category.`;
        console.log(message)
        Alert.alert('BMI Result', message);
        navigation.navigate("selectrecipe" , {value : category})
    };

    return(
        <View style = {DietStyling.container}>
            <View style = {DietStyling.header}>
                <Text style = {DietStyling.main_heading}>
                    Diet Planner
                </Text>
            </View>
            <View>
                <Text style = {DietStyling.firstWords}>
                    ENTER YOUR DETAILS
                </Text>
            </View>
            <View style = {DietStyling.blocks}>
                <TextInput 
                    placeholder='Weight(In Kilos)'  
                    placeholderTextColor="grey"
                    keyboardType="number-pad" 
                    value = {weight}
                    onChangeText = {setweight}
                />
            </View>
            <View style = {DietStyling.blocks}>
                <TextInput 
                    placeholder='Height(In CMs)' 
                    placeholderTextColor="grey"
                    keyboardType="number-pad" 
                    value = {height}
                    onChangeText = {setheight}
                />
            </View>
            <TouchableOpacity 
                style = {DietStyling.Button} 
                onPress = {calculateBMI}
                >
                <Text style = {DietStyling.ButtonText}>
                    Calculate BMI
                </Text>
            </TouchableOpacity>
        </View>
    )
  }



const DietStyling = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#F7F6F0',
         
    },
    header:{
        height: '18%', 
        width: '100%', 
        backgroundColor: '#24282C',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    main_heading:{
        color:'white',
        fontSize:24,
        fontWeight:"bold",
        lineHeight:120,
        alignSelf:"center"
    },
    firstWords:{
        marginTop: 30,
        alignSelf:"center",
        color:'#24282C',
        fontSize:32
    },
    Avatar:{
        marginTop:25,
        height:200,
        width:200,
        alignSelf:"center"
    },
    pics:{
        marginTop:20,
        height:120,
        width:120,
        marginLeft:15
    },
    picCaption:{
        color:"black",
        marginLeft:50,
        fontWeight:"bold"
    },
    blocks:{
        marginTop:60,
        backgroundColor:'white',
        width:'90%',
        alignSelf:'center'
    },
    Button:{
        marginTop:60,
        alignSelf:'center',
        paddingTop:15,
        width:'90%',
        paddingBottom:15,
        paddingLeft:50,
        paddingRight:50,
        borderRadius:10,
        backgroundColor:'#D3F36B'
    },
    ButtonText:{
        color:'black',
        fontSize:18,
        alignSelf:'center'
    },
    RecipeGrid:{
        marginLeft:10
    },
    FoodHeading:{
        color:'black',
        fontSize:18,
        marginTop:20,
        marginLeft:'5%'
    },
    touchableblock:{
        flexDirection:"row"
    },
    blockstyling:{
        paddingTop :10,
        paddingBottom:10,
        backgroundColor:'white',
        width:'90%',
        marginTop:10,
        alignSelf:'center',
        flexDirection:"row",
        borderRadius:20,
        shadowColor: "#24282C",
        shadowOpacity: 1,
        shadowRadius: 20,
        shadowOffset: {
        height: 5,
        width: 5
        }
    },
    RecipeName:{
        color:'#384F7D',
        fontSize:16,
        fontWeight:"bold",
        marginTop:'15%',
        marginLeft:10
    },
    RecipeImage:{
        width : 120,
        height :130
    }
})

export default BMICalc;