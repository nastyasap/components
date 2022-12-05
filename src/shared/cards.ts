export type CardsProps = {
    name: string
    isOptional?: boolean
}


export const cards: CardsProps[] = [
    {name: 'Email Authentication'},
    {name: 'Google Two Factor'},
    {name: 'Security key'},
    {name: 'Sign in with biometrics', isOptional: true}
]