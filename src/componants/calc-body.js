
import NumberPanel from './number-panel'
import OperatorsPanel from './operators-panel'
import './componant-css/operators-panel.css'


function CalcBody(){
    return(
        <div className='wrapper'>
            <NumberPanel
            />
            <OperatorsPanel
            />

        </div>
    )
}

export default CalcBody