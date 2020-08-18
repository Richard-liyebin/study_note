import React from 'react'

class Son extends React.Component {
    constructor(props) {
        super(props)
    }
    toClick = () => {
       this.props.data.current.focus()
    }
    render() {
        return <button onClick={this.toClick}>点击获取子元素焦点</button>
    }
}

export default Son