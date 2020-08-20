import React from 'react'
import Son from './DemoCore3_temp'
const { Provider, Consumer } = React.createContext()


class DemoCore3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'lyb'
        }
    }
    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('已经提交')
    }
    render() {
        let myname = 'lxd'
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name} onChange={this.handleChange}></input>
                    <input type="submit" value="提交"></input>
                </form>
                <p>{this.state.name}</p>
                <Provider value={myname}>
                    <Son></Son>
                    <p>父组件的值{value}</p>
                </Provider>
            </div>
        )
    }
}
export default DemoCore3