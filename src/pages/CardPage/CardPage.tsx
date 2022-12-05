import {FC, ReactNode} from 'react';
import s from './cardPage.module.scss'

interface CardPageProps {
    children: ReactNode[]
}

const CardPage: FC<CardPageProps> = ({children}) => {
    return (
        <div className={s.container}>
            {children}
        </div>
    )
}

export default CardPage