import {ButtonColor} from '../components/Button/Button';
export type  ButtonsProps = {
    name: string
    icon?: string
    color?: ButtonColor
    //other properties
}

export const dialogButtons: ButtonsProps[] = [
        {name: 'Regular Cleaning'},
        {name: 'Window Cleaning'},
        {name: 'After Repairing'},
        {name: 'After Relocation'},
]