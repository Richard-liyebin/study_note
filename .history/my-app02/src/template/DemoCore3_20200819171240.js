import React from 'react'
import Son from './DemoCore3_temp'
const {Provider,Consumer} = React.createContext()


class DemoCore3 extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return <Son></Son>
    }
}
export default DemoCore3