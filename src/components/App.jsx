// import {GlobalStyle} from "./GlobalStyle"
import { PageBoard } from "./Pageboard/PageBoard";
import upcoming from "../upcoming-events.json"

export const App = () => {
  return  <>

    {/* <GlobalStyle/> */}
    <PageBoard events={upcoming}
    />
    </>

};


/**
 1. app > PageBoard + tittle > cardItem
 2. PageBoard > upcoming-events-array
 3. Event > пропси name(srting), start(string), end(string), location(string), speaker(string) 
 4. 
 */