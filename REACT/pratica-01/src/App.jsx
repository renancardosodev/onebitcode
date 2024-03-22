import Game from "./components/Game"
import NewGameForm from "./components/NewGameForm"
import useGameCollection from "./components/hooks/useGameCollection"

function App() {
  const {games,addGame, removeGame} = useGameCollection()

  return (
    <div>
      <h1>Biblioteca de jogos</h1>
      <NewGameForm
        addGame={addGame}
      />
      <div className="games">
        {games.length > 0 ? (games.map((e)=>(
          <Game
          key={e.id}
          title={e.title}
          cover={e.cover}
          onRemove={()=>removeGame(e.id)}
          />
        ))):(<h3>Ainda não há itens aqui.</h3>)}
      </div>
    </div>
  )
}

export default App
