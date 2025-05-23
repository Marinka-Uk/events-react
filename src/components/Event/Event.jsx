import { Lili } from "./Event.styled"
import { Icon } from "style-components"
import { ItemText } from "./Event.styled"
import { ItemTitle } from "./Event.styled"


export const Event = ({name, start, end, location, speaker, type })=>{
    return <Lili>
         <ItemTitle>  {name} </ItemTitle>
        <ItemText> {location}  </ItemText>
        <ItemText>  {speaker} </ItemText>
        <ItemText>{start}   </ItemText>
        <ItemText>  {end} </ItemText>
        <Icon> {type} </Icon>
    </Lili>
}