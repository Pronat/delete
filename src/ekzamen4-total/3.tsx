type UserWalletType = {
    title: string
    amount: number
}
type UserWalletPropsType = {
    wallet: UserWalletType
}

export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
    return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
}

export const UserMoney = () => {
    const wallets = [
        {title: 'bitcoin', amount: 1},
        {title: '$', amount: 100}
    ]

    return <div>
        <UserWallet wallet={xxx} />
        <UserWallet wallet={yyy} />
    </div>
}

//Что нужно написать вместо xxx и yyy, чтобы компонент UserMoney отобразил информацию о двух кошельках (bitcoin и $)?
//
// Ответ дайте через пробел, например: props.x wallets

// ???? props.wallet