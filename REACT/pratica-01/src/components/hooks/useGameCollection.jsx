import { useState } from "react"

export default function useGameCollection() {
    const [games, setGames] = useState(()=>{
        const local = localStorage.getItem('game-lib')
        if(!local) return []
        return JSON.parse(local)
      })
    
      
    
      const addGame = ({title, cover}) =>{
        const id = Math.floor(Math.random()*10000) 
        const game ={id, title, cover}
        setGames((e)=>{
          const newState = [...e, game]
          localStorage.setItem('game-lib', JSON.stringify(newState))
          return newState
        })
      }
    
      const removeGame = (id) => {
        setGames(()=>{
          const newState = games.filter(e=>e.id !== id)
          localStorage.setItem('game-lib', JSON.stringify(newState))
          return newState
        })
      }
    return {games,addGame, removeGame} 
}