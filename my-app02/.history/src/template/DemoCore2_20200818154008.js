import React from 'react'
import { Suspense } from 'react'
const Temp = React.lazy( () => { 
    return new Promise( (resolve, reject) =>{
        setTimeout(() => {
            resolve(import('./Demo19_temp'))
        },3000)
    })
}
)
class Demo19 extends React.Component {
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