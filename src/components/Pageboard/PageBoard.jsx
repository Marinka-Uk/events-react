import { Event } from "components/Event/Event";
import {List} from "./PageBoard.styled"

export const PageBoard = ({events})=>{
    return <List>
        {events && events.map((event)=>{
            return <Event 
    name = {event.name}
    location={event.location}
    speaker={event.speaker}
    start={event.time.start}
    end={event.time.end}
    type={event.type}
     />
        })}
    </List> 
}