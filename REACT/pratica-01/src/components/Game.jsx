import PropTypes from "prop-types"

Game.propTypes = {
    title: PropTypes.string,
    cover: PropTypes.string,
    onRemove: PropTypes.func
}

export default function Game ({title, cover, onRemove}) {
    return(
        <div>
        <img src={cover} alt="" />
        <div>
          <h3>{title}</h3>
          <button onClick={onRemove}>Remover</button>
        </div>
      </div>
    )
}