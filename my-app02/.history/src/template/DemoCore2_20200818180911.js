import React from 'react'
import { Suspense } from 'react'
const Temp = React.lazy( () => { 
    return new Promise( (resolve, reject) =>{
        setTimeout(() => {
            resolve(import('./DemoCore2_temp'))
        },3000)
    })
}
)
class DemoCore2 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <p>hello richard</p>
            <Suspense fallback={<div>is loading....</div>}>
            <Temp></Temp>
            </Suspense>
        </div> 
    }
}

export default DemoCore2

//React.lazy()一般配合着Suspense 组件进行使用，用于懒加载
//设置定时器的目的是为了让延迟看得更加清楚一些