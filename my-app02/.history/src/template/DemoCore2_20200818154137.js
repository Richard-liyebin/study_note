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

export default Demo19