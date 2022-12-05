import {ButtonsPage, CardPage, ChipsPage, DialogPage, InputPage} from '../src/pages';
import {cards} from '../src/shared/cards';

import s from '../src/styles/Home.module.scss'
import {dialogButtons} from '../src/shared/dialogButtons';

export default function Home() {
    return (
        <div>
            <main className={s.container}>
                <ButtonsPage/>
                <InputPage/>
                <CardPage elements={cards}/>
                <ChipsPage/>
                <DialogPage buttons={dialogButtons}/>
            </main>
        </div>
    )
}
