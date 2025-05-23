import {GlobalStyle} from "./GlobalStyle"
import { PageBoard } from "./Pageboard/PageBoard";
import upcoming from "../upcoming-events.json"
import { Container } from "./Container/Container";
import { Tittle } from "./Tittle/Tittle";
import { Event } from "./Event/Event";

export const App = () => {
  return  <>

    <GlobalStyle/>
    <Container>
      <Tittle/>
      <Event/>
      <PageBoard/>
    <PageBoard events={upcoming}
    />
    </Container>
  
    </>

};


/**
 1. app > PageBoard + tittle > cardItem
 2. PageBoard > upcoming-events-array
 3. Event > пропси name(srting), start(string), end(string), location(string), speaker(string) 
 4. 
 */