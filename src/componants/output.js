import {useState} from 'react'

function Output(props){

    const [calculation, setCalculation] = useState("Placeholder")


    return(
        <div>
            <h1>{calculation}</h1>
        </div>
    )
}

export default Output