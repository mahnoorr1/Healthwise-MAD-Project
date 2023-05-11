import { 
    View, 
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import {DietStyling} from './Styling/DietStyling'


export const ChooseGender = ({navigation,route}) => {
    return(
        <View style = {DietStyling.container}>
            <View style = {DietStyling.header}>
                <Text style = {DietStyling.main_heading}>
                    Diet Planner
                </Text>
            </View>
            <View>
                <Text style = {DietStyling.firstWords}>
                    I AM
                </Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("ChoosePlan")}
            >
                <Image 
                    source={require('../Images/DietPlanner/MaleAvatar.png')} 
                    style = {DietStyling.Avatar}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("ChoosePlan")}
            >
                <Image 
                    source={require('../Images/DietPlanner/FemaleAvatar.png')} 
                    style = {DietStyling.Avatar}
                />
            </TouchableOpacity>
        </View>
    )
  }