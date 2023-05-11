import { useEffect } from "react";
import { ScrollView } from "react-native";
import { List } from "./list";

export function Cardio ({data, type}) {
    console.log(data)
    var list = [];
        for(let e=0; e<data.length;e++){
            if((data[e].Specialization) == 'Cardio Specialist'){
                list.push(data[e])
            }
        }
    
    return (
        <ScrollView style = {{padding: 5}}>
            {console.log(list)}
            <List data={list} type = {type}></List>
        </ScrollView>
    )
}