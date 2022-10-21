import Button from './button'
import './componant-css/operators-panel.css'

const symbols = ["+", "-", "/", "*"]

function OperatorsPanel(props){
    return(
        <div className='wrapper'>
            {symbols.map((symbol) => <Button button_id = {symbol}/>)}
            {/* {/* /* <Button
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
            />
            <Button
                button_id = "C"
            />
            <Button
                button_id = "0"
            />
            <Button
                button_id = "."
            /> */
            }
        </div>
    )
}

export default OperatorsPanel