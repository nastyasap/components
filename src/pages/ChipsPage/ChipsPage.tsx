import {FC} from 'react';

import {Button} from '../../components';

import s from './chipsPage.module.scss'

const ChipsPage: FC = () => {
    return (
        <div className={s.container}>
            <div className={s.buttonContainer}>
               <Button text={'General Price'} color={'black'} size={'small'}/>
               <Button text={'Create offer'} color={'black'} size={'small'}/>
               <Button text={'Icon'} variant={'outline'} size={'small'}/>
               <Button text={'Icon'} variant={'outline'} size={'small'}/>
            </div>
            <div className={s.chipsGroup}>
                <div className={s.chip}>
                    Jane Cooper
                    <span className={s.close}/>
                </div>
                <div className={s.chip}>
                    Esther Howard
                    <span className={s.close}/>
                </div>
                <div className={s.chip}>
                    Leslie Alexander
                    <span className={s.close}/>
                </div>
                <div className={s.chip}>
                    Jane Cooper
                    <span className={s.close}/>
                </div>
            </div>
        </div>
    )
}

export default ChipsPage