import About from "./About/About"
import Allbooks from "./Allbooks/Allbooks"

import Fivestar2 from "./Fivestar2/Fivestar2"
import Home from "./Home/Home"
import TBRlist from "./TBRlist/TBRlist"


function App() {
  return (
    <>
      <div id='home'><Home/></div>
      <div id='about'><About/></div>
      <div id='allbooks'><Allbooks/></div>
      <div id='fivestar'><Fivestar2/></div>
      <div id='tbrlist'><TBRlist/></div>
      
    </>
  )
  
}

export default App
