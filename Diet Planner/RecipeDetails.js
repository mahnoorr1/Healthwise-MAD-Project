import { View ,
    Text , 
    SafeAreaView, 
    Image 
} from "react-native"
import { DietStyling } from "./Styling/DietStyling"


export const RecipeDetails= ()=>{
    return(
        <SafeAreaView style = {DietStyling.container}>
                <View style = {DietStyling.header}>
                    <Text style = {DietStyling.main_heading}>
                        Recipie Name
                    </Text>
                </View>
                <View >
                    <Image 
                        source = {
                            require('../Images/DietPlanner/fit1.png')
                        }
                        style = {{
                            marginTop:40,
                            alignSelf:"center",
                            width:200,
                            height:180
                        }}   
                        />
                    <View 
                        style = {{
                            marginTop:40,
                            marginLeft:30
                        }}
                    >
                        <Text 
                            style = {{
                                fontSize : 20,
                                color:'black'
                            }}
                        >
                            300 calories
                        </Text>
                        <Text 
                            style = {{
                                fontSize : 20,
                                color:'black'
                            }}
                        >
                            300 calories
                        </Text>
                        <Text 
                            style = {{
                                fontSize : 20,
                                color:'black'
                            }}
                        >
                            300 calories
                        </Text>
                        <Text 
                            style = {{
                                fontSize : 20,
                                color:'black'
                            }}
                        >
                            300 calories
                        </Text>            
                    </View>
                </View>
        </SafeAreaView>
    )
}
