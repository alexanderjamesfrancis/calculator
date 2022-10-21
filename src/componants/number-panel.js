import Button from './button'
import './componant-css/number-panel.css'

const numbers = [1,2,3,4,5,6,7,8,9]

function NumberPanel(props){
    return(
        <div className='wrapper'>
        {numbers.map((number) => <Button button_id = {number}/>)}
            {/* <Button
                button_id = "1"
            />
            <Button
                button_id = "2"
            />
            <Button
                button_id = "3"
            />
            <Button
                button_id = "4"
            />  
            <Button
                button_id = "5"
            />  
            <Button
                button_id = "6"
            />  
            <Button
                button_id = "7"
            />  
            <Button
                button_id = "8"
            />  
            <Button
                button_id = "9"
            />               */}
        </div>
    )
}

export default NumberPanel