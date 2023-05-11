import { ScrollView } from "react-native";
import { List } from "./list";

export function Pending ({data, type}) {
    console.log(data)
    var list = [];
    for(let e=0; e<data.length;e++){
        if((data[e].isApproved) == false){
            list.push(data[e])
        }
    }
    return (
        <ScrollView style = {{padding: 5}}>
            <List data={list} type = {type}></List>
        </ScrollView>
    )
}