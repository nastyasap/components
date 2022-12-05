import {ButtonsPage, CardPage, ChipsPage, DialogPage, InputPage} from '../src/pages';
import {cards} from '../src/shared/cards';

import {Button, Card} from '../src/components';
import s from '../src/styles/Home.module.scss'

export default function Home() {
    return (
        <div>
            <main className={s.container}>
                <ButtonsPage/>
                <InputPage/>
                <CardPage>
                    {cards.map(card => (
                        <Card key={card.name} name={card.name} isOptional={card.isOptional}/>
                    ))}
                </CardPage>
                <ChipsPage/>
                <DialogPage>
                    <Button text={'Regular Cleaning'} color={'burgundy'} size={'small'}/>
                    <Button text={'Window Cleaning'} color={'burgundy'} size={'small'}/>
                    <Button text={'After Repairing'} color={'burgundy'} size={'small'}/>
                    <Button text={'After Relocation'} color={'burgundy'} size={'small'}/>
                </DialogPage>
            </main>
        </div>
    )
}
