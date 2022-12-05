import {FC, ReactNode} from 'react';

import {Button} from '../../components';

import s from './dialogPage.module.scss'

interface DialogPageProps {
    children: ReactNode[]
}

const DialogPage: FC<DialogPageProps> = ({children}) => {
    return (
        <div className={s.container}>
            <span>What type of work would you like to do?</span>
            <div className={s.buttonContainer}>
                {children}
            </div>
            <div className={s.footerButtons}>
                <Button text={'Back'} color={'black'}/>
                <Button text={'Next'} color={'burgundy'}/>
            </div>
        </div>
    )
}

export default DialogPage