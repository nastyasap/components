import {FC} from 'react';

import {Button} from '../../components';
import {ButtonsProps} from '../../shared/dialogButtons';

import s from './dialogPage.module.scss'

interface DialogPageProps {
    buttons: Array<ButtonsProps>
}

const DialogPage: FC<DialogPageProps> = ({buttons}) => {
    return (
        <div className={s.container}>
            <span>What type of work would you like to do?</span>
            <div className={s.buttonContainer}>
                {buttons.map(button => (
                    <Button key={button.name} text={button.name} color={ button.color ? button.color : 'burgundy'} size={'small'}/>
                ))}
            </div>
            <div className={s.footerButtons}>
                <Button text={'Back'} color={'black'}/>
                <Button text={'Next'} color={'burgundy'}/>
            </div>
        </div>
    )
}

export default DialogPage