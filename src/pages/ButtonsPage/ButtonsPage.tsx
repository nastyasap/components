import {FC} from 'react';
import {Button} from '../../components';
import s from './buttonsPage.module.scss'

const ButtonsPage: FC = () => {
    return (
        <div className={s.container}>
            <div className={s.column}>
                <Button text={'sign in'} variant={'outline'} disabled={true} size={'large'}/>
                <Button text={'sign in'} variant={'outline'} size={'large'}/>
                <div className={s.row}>
                    <Button text={'search'} variant={'outline'} disabled={true}/>
                    <Button text={'search'} variant={'outline'}/>
                </div>
                <div className={s.row}>
                    <Button text={'cart'}/>
                    <Button text={'Done'} size={'small'}/>
                </div>
                <div className={s.row}>
                    <Button text={'Back'}/>
                    <Button text={'Next'}/>
                </div>
                <Button text={'make order'} variant={'outline'}/>
            </div>
            <div className={s.column}>
                <Button text={'Done'} size={'medium'}/>
                <Button text={'Next'} variant={'outline'}/>
                <Button text={'Price'} round={true}/>
                <div className={s.others}>
                    <Button text={'Repay'} size={'small'} color={'burgundy'}/>
                    <Button text={'Black list'} size={'small'} color={'black'}/>
                    <Button text={'Cancel'} size={'small'} color={'burgundy'}/>
                    <Button text={'Done'} size={'small'} color={'black'}/>
                    <Button text={'Wait for a confirm'} size={'small'} color={'green'}/>
                    <Button text={'Find another'} size={'small'} color={'darkGrey'}/>
                    <Button text={'Edit absence'} size={'small'}/>
                    <Button text={'Absence'} size={'small'} color={'blue'}/>
                    <Button text={'Confirm'} size={'small'} color={'green'}/>
                </div>
            </div>
        </div>
    )
}

export default ButtonsPage