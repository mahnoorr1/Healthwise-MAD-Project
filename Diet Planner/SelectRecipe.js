import { View ,
    Text , 
    SafeAreaView, 
    ScrollView, 
    TouchableOpacity,
    Image 
} from "react-native"
import { DietStyling } from "./Styling/DietStyling"


export const Selectrecipe = ({navigation,route})=>{
    return(
        <SafeAreaView style = {DietStyling.container}>
                <View style = {DietStyling.header}>
                    <Text style = {DietStyling.main_heading}>
                        Diet Planner
                    </Text>
                </View>
                <SafeAreaView style = {DietStyling.RecipeGrid}>
                    <ScrollView>
                        <Text style = {DietStyling.firstWords}>
                            Select One Recipe
                        </Text>
                        <View>
                            <Text style = { DietStyling.FoodHeading}>
                                BreakFast
                            </Text>
                            <View style = { DietStyling.blockstyling}>
                                <TouchableOpacity 
                                    style = {DietStyling.touchableblock}
                                    onPress={()=> navigation.navigate("RecipeDetails") }
                                    >
                                    <Image 
                                        source = {
                                            require('../Images/DietPlanner/fit1.png')
                                        } 
                                        style = {DietStyling.RecipeImage}    
                                    />
                                    <Text style = {DietStyling.RecipeName}>
                                        Mashed Potato And Veges 
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style = { DietStyling.blockstyling}>
                                <TouchableOpacity 
                                    style = {DietStyling.touchableblock}
                                    onPress={()=> navigation.navigate("RecipeDetails") }
                                    >
                                    <Image 
                                        source = {require('../Images/DietPlanner/fit1.png')} 
                                        style = {DietStyling.RecipeImage}    
                                    />
                                    <Text style = {DietStyling.RecipeName}>
                                        Mashed Potato And Veges 
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text style = { DietStyling.FoodHeading}>
                                LUNCH
                            </Text>
                            <View style = { DietStyling.blockstyling}>
                                <TouchableOpacity 
                                    style = {DietStyling.touchableblock}
                                    onPress={()=> navigation.navigate("RecipeDetails") }
                                    >
                                    <Image 
                                        source = {require('../Images/DietPlanner/fit1.png')} 
                                        style = {DietStyling.RecipeImage}    
                                    />
                                    <Text style = {DietStyling.RecipeName}>
                                        Mashed Potato And Veges 
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style = { DietStyling.blockstyling}>
                                <TouchableOpacity 
                                    style = {DietStyling.touchableblock}
                                    onPress={()=> navigation.navigate("RecipeDetails") } >
                                    <Image 
                                        source = {require('../Images/DietPlanner/fit1.png')} 
                                        style = {DietStyling.RecipeImage}    
                                    />
                                    <Text style = {DietStyling.RecipeName}>
                                        Mashed Potato And Veges 
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text style = { DietStyling.FoodHeading}>
                                DINNER
                            </Text>
                            <View style = { DietStyling.blockstyling}>
                                <TouchableOpacity 
                                    style = {DietStyling.touchableblock}
                                    onPress={()=> navigation.navigate("RecipeDetails") } >
                                    <Image 
                                        source = {require('../Images/DietPlanner/fit1.png')} 
                                        style = {DietStyling.RecipeImage}    
                                    />
                                    <Text style = {DietStyling.RecipeName}>
                                        Mashed Potato And Veges 
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style = { DietStyling.blockstyling}>
                                <TouchableOpacity 
                                    style = {DietStyling.touchableblock}
                                    onPress={()=> navigation.navigate("RecipeDetails") } >
                                    <Image 
                                        source = {require('../Images/DietPlanner/fit1.png')} 
                                        style = {DietStyling.RecipeImage}    
                                    />
                                    <Text style = {DietStyling.RecipeName}>
                                        Mashed Potato And Veges 
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
        </SafeAreaView>
    )
}
