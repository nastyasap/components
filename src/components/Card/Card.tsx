import {FC} from 'react';
import s from '../../pages/CardPage/cardPage.module.scss';
import {Button} from '../index';
import {CardsProps} from '../../shared/cards';

const Card: FC<CardsProps> = ({name, isOptional}) => {
    return (
        <div className={s.element}>
            <span>{name}</span>
            {isOptional
                ? <>
                    <input
                        className={s.switchCheckbox}
                        id={`react-switch-new`}
                        type={'checkbox'}
                    />
                    <label
                        className={s.switchLabel}
                        htmlFor={`react-switch-new`}
                    >
                        <span className={s.switchButton}/>
                    </label>
                </>
                : <Button text={'+'} size={'small'}/>
            }
        </div>
    )
}

export default Card