import { useEffect } from "react";
import { ScrollView } from "react-native";
import { List } from "./list";

export function All ({data, type}) {
    var list = [];
        for(let e=0; e<data.length;e++){
            if((data[e].isApproved) == true){
                list.push(data[e])
            }
        }
    
    return (
        <ScrollView style = {{padding: 5}}>
            <List data={list} type = {type}></List>
        </ScrollView>
    )
}