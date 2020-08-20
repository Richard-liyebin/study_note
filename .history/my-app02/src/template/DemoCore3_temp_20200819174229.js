import React from 'react'
import { Consumer } from 'DemoCore3'
function Son() {
    return (
        <Consumer>
           {(myname) => (
               <div>
               <p>子组件的值{myname}</p>     
               </div>
           ) }
          
        </Consumer>
        )
}
export default Son