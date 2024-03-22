import { useState } from "react"
import PropTypes from "prop-types"
import TextInput from "./TextInput"

NewGameForm.propTypes = {
    addGame: PropTypes.func
}

export default function NewGameForm ({addGame}) {
    const [title, setTitle] = useState('')
    const [cover, setCover] = useState('')
    const handlesubmit = (e) => {
        e.preventDefault()
    
        addGame({title, cover})
        
        setTitle('')
        setCover('')
      }
    
    return (
        <form onSubmit={handlesubmit}>
        <TextInput
            value={title}
            setValue={setTitle}
            label={'Nome:'}
            id={'title'}
        />
        <TextInput
            value={cover}
            setValue={setCover}
            label={'Capa:'}
            id={'cover'}
        />
        <button type="submit">Adicionar à biblioteca</button>
      </form>
    )
}