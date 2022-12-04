import {FC} from 'react';

import {Button} from '../../components';

import s from './dialogPage.module.scss'

const DialogPage: FC = () => {
    return (
        <div className={s.container}>
            <span>What type of work would you like to do?</span>
            <div className={s.buttonContainer}>
               <Button text={'Regular Cleaning'} color={'burgundy'} size={'small'}/>
               <Button text={'Window Cleaning'} color={'burgundy'} size={'small'}/>
               <Button text={'After Repairing'} color={'burgundy'} size={'small'}/>
               <Button text={'After Relocation'} color={'burgundy'} size={'small'}/>
            </div>
            <div className={s.footerButtons}>
                <Button text={'Back'} color={'black'}/>
                <Button text={'Next'} color={'burgundy'}/>
            </div>
        </div>
    )
}

export default DialogPage