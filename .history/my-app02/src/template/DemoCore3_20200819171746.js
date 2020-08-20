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
    handleChange = () => {
        this.setState({
            name:e.target.value
        })
    }
    render(){
        return 
        <div>
        <input type="text" value={this.state.name} onChange={this.handleChange}></input>
        <Provider myname={}>
        <Son></Son>
        </Provider>
        </div>
    }
}
export default DemoCore3