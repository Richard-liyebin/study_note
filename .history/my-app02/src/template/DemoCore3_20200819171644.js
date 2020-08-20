import React from 'react'
import Son from './DemoCore3_temp'
const {Provider,Consumer} = React.createContext()


class DemoCore3 extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name:'lyb'
        }
    }
    render(){
        return 
        <div>
        <Provider myname={}>
        <Son></Son>
        </Provider>
        </div>
    }
}
export default DemoCore3