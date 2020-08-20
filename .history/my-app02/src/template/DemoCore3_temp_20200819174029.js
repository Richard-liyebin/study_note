import React from 'react'
import { Consumer } from 'DemoCore3'
function Son() {
    return (<div>
        <Consumer><p>子组件的值</p></Consumer>
    </div>)
}
export default Son