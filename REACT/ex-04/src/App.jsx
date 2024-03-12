import { useState } from "react"
import styles from "./App.module.css"

export default function App () {
    const [password, setPassword] = useState("")
    const [copyText, setCopyText] = useState('Copiar')

    function getPassword (){
        const passwordText = "1234567890-=qwertyuiop[]asdfghjkl;'zxcvbnm,./ç"
        let newPassword = ''
        for (let i = 0; i < 12; i++) {
            const position = Math.floor(Math.random()*passwordText.length)
            newPassword += passwordText[position]
        }
        setPassword(newPassword)
        setCopyText("Copiar")
    }

    function copy() {
        window.navigator.clipboard.writeText(password)
        setCopyText("Copiado!")
    }

    return (
        <div className={styles.app}>
            <h1>Gerador de senha</h1>
            <div className={styles.buttons}>
                <button onClick={getPassword}>Gerar</button>
                <button onClick={copy}>{copyText}</button>
            </div>
            <div>{password}</div>
        </div>
    )
}