import {FC} from 'react';

import {Button} from '../../components';

import {CardsProps} from '../../shared/cards';
import s from './cardPage.module.scss'

interface CardPageProps {
    elements: Array<CardsProps>
}

const CardPage: FC<CardPageProps> = ({elements}) => {
    return (
        <div className={s.container}>
            {elements.map((element, index) => (
                <div key={element.name + index} className={s.element}>
                    <span>{element.name}</span>
                    {element.isOptional
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
            ))}
        </div>
    )
}

export default CardPage