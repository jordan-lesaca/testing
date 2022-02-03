import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar(){
    return(
        <div>
            <NavLink style={{ marginRight: '10px'}} to='/'> Home</NavLink>
            <NavLink style={{ marginRight: '10px'}} to='/games'>Games</NavLink>
            <NavLink style={{ marginRight: '10px'}} to='/about'>About</NavLink>
        </div>
    )
}

export default NavBar



//     <div className="App">

//       <NavBar />

//         <Switch>
//           <Route exact path ="/">
//             <Home />
//           </Route>
//         </Switch>

//         <Switch>
//           <Route exact path="/games">
//             <Games />                  
//           </Route>
//         </Switch>

//         <Switch>
//           <Route exact path ="/about">
//             <About />
//           </Route>
//         </Switch>

//     </div>
//   );
// }
