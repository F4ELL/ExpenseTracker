import * as C from './styles'

type TProps = {
    title: string,
    value: number,
    balanceColor?: string
}

export const ResumeItem = ({ title, value, balanceColor }: TProps) => {
    return(
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Info balanceColor={balanceColor}>R$ {value.toFixed(2)}</C.Info>
        </C.Container>
    )
}