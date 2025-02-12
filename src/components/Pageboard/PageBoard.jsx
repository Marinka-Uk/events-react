import { Event } from "components/Event/Event";


export const PageBoard = ({events})=>{
    return <ul>
        {events.map((event)=>{
            return <Event 
    name = {event.name}
    location={event.location}
    speaker={event.speaker}
    start={event.time.start}
    end={event.time.end}
    type={event.type}
     />
        })}
    </ul> 
}