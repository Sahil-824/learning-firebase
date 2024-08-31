import React from 'react'
import { getDatabase,set,ref } from "firebase/database";

import {app} from "./firebase"
const db = getDatabase(app);
const App = () => {

 const putdata = ()=>{ set(ref(db, "users/Sahil"), {
    username: "Sahil",
    email: "sahilpanchal@gmail.com",
 
  }); };
  return (
  <>  <div>Firebase app</div>
      <button onClick={putdata}>click me</button>
  </>
    
  )
}

export default App