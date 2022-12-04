import {FC} from 'react';

import {Button} from '../../components';

import s from './cardPage.module.scss'

const CardPage: FC = () => {
    return (
        <div className={s.container}>
            <div className={s.element}>
                <span>Email Authentication</span>
                <Button text={'+'} size={'small'}/>
            </div>
            <div className={s.element}>
                <span>Google Two Factor</span>
                <Button text={'+'} size={'small'}/>
            </div>
            <div className={s.element}>
                <span>Security key</span>
                <Button text={'+'} size={'small'}/>
            </div>
            <div className={s.element}>
                <span>Sign in with biometrics</span>
                <>
                    <input
                        className={s.switchCheckbox}
                        id={`react-switch-new`}
                        type={'checkbox'}
                    />
                    <label
                        className={s.switchLabel}
                        htmlFor={`react-switch-new`}
                    >
                        <span className={s.switchButton} />
                    </label>
                </>
            </div>
        </div>
    )
}

export default CardPage