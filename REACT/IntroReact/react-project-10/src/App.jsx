
import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

// step 1 create a context
// const UserContext = createContext();
// step2 wrap all the child inside a provider
// step3: pass the value to be shared
// consumer mei jaake consume krlo

const ThemeContext = createContext();
function App() {
  
  // const [user , setUser] = useState({name: 'Nayamat'});
  
  const [theme , setTheme] = useState('light');

  return (
     <ThemeContext.Provider value={{theme, setTheme}}>
      <div id='container' style={{backgroundColor:theme=='light'?"beige":"black"}}>
        <ChildA/>
      </div>
      </ThemeContext.Provider>

    



    // <>
    // <UserContext.Provider value={user}>
    // <ChildA/>
    // </UserContext.Provider>
    // </>

  )
}

export default App
//export {UserContext};
// export kra tbhi to import krenge or fir consume kraayenge
export {ThemeContext}