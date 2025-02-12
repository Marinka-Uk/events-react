

export const Event = ({name, start, end, location, speaker, type })=>{
    return <li>
         <h2>  {name} </h2>
        <p> {location}  </p>
        <p>  {speaker} </p>
        <p>{start}   </p>
        <p>  {end} </p>
        <span>  {type} </span>
    </li>
}