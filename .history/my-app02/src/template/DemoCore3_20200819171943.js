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
    handleChange = (e) => {
        this.setState({
            name:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log('已经提交')
    }
    render(){
        return (
        <div>
        <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.name} onChange={this.handleChange}></input>
        </form>
        <Provider myname={this.state.name}>
        <Son></Son>
        </Provider>
        </div>
        )
    }
}
export default DemoCore3