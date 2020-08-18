import React from 'react'
import Son from './Demo18_son'
class Demo18 extends React.Component {
    constructor(props) {
        super(props)
        this.refone = React.createRef()
    }
    goClick = () => {
        console.log(this.refone)
        this.refone.current.focus()
    }
    render() {
        return <div>
            <input type="text" ref={this.refone}></input>
            <button onClick={this.goClick}>点击确认</button>
             <Son data={this.refone}></Son>
        </div>
    }
}

export default Demo18


//创建元素的React.createRef实例后，就可以使用当前实例，并且控制dom，
//react跟vue差不多，都是不太建议去直接修改dom的，但是避免不了的时候用