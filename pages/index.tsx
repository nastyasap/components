import {ButtonsPage, CardPage, ChipsPage, DialogPage, InputPage} from '../src/pages';
import s from '../src/styles/Home.module.scss'

export default function Home() {
    return (
        <div>
            <main className={s.container}>
                <ButtonsPage/>
                <InputPage/>
                <CardPage/>
                <ChipsPage/>
                <DialogPage/>
            </main>
        </div>
    )
}
