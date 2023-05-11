import { View, ScrollView } from "react-native";
import { List } from "./list";

export function Upcoming ({data, type}) {
    console.log(data)
    const d = new Date();
    let day = d.getDay()
    var list = [];
    for(let e=0; e<data.length;e++){
        if((data[e].date.getDay()+1) == day+1){
            list.push(data[e])
        }
    }
    return (
        <ScrollView style = {{padding: 5}}>
            <List data={list} type = {type}></List>
        </ScrollView>
    )
}