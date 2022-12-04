import {FC} from 'react';

import {Input} from '../../components';

import s from './inputPage.module.scss'

const InputPage: FC = () => {
    return (
        <div className={s.container}>
            <div className={s.form}>
                <Input label={'New Password'} isRequired={true}/>
                <Input label={'Repeat new Password'} isRequired={true}/>
            </div>
            <div className={s.form}>
                <Input placeholder={'Apartment number *'} isRequired={true}/>
                <div className={s.row}>
                    <Input placeholder={'Entrance number'}/>
                    <Input placeholder={'Entrance code'}/>
                </div>
            </div>
        </div>
    )
}

export default InputPage