import { 
    View, 
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import {DietStyling} from './Styling/DietStyling'


export const ChoosePlan = ({navigation,route}) => {
    return(
        <View style = {DietStyling.container}>
            <View style = {DietStyling.header}>
                <Text style = {DietStyling.main_heading}>
                    Diet Planner
                </Text>
            </View>
            <View>
                <Text style = {DietStyling.firstWords}>
                    WHAT DO YOU WANT
                </Text>
            </View>
            <View style = {{
                    flexDirection:'row',
                    justifyContent : 'space-evenly',
                    marginTop:50
                    
                    }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("BMICalc")}
                >
                    <Image 
                        source={require('../Images/DietPlanner/strong1.png')} 
                        style = {DietStyling.pics}
                    />
                    <Text style = {DietStyling.picCaption}>
                        Gain Muscle
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("BMICalc")}
                >
                    <Image 
                        source={require('../Images/DietPlanner/fit1.png')} 
                        style = {DietStyling.pics}
                    />
                    <Text style = {DietStyling.picCaption}>
                        Body Fit
                    </Text>
                </TouchableOpacity>
            </View>
            <View style = {{
                    flexDirection:'row',
                    justifyContent : 'space-evenly',
                    marginTop:40
                    
                    }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("BMICalc")}
                >
                    <Image 
                        source={require('../Images/DietPlanner/protein.png')} 
                        style = {DietStyling.pics}
                    />
                    <Text style = {DietStyling.picCaption}>
                        Weight Gain
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("BMICalc")}
                >
                    <Image 
                        source={require('../Images/DietPlanner/scale1.png')} 
                        style = {DietStyling.pics}
                    />
                    <Text style = {DietStyling.picCaption}>
                        Weight loss
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
  }