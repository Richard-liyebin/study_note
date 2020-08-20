import React from 'react'

const {Provider,Consumer} = React.createContext()
export default function Son(){
    return <div>
            <p>hello lyb</p>
        </div>
}

class DemoCore3 extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return <Son></Son>
    }
}
export default DemoCore3