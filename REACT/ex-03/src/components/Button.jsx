import PropTypes from "prop-types"

Button.propTypes = {
    link: PropTypes.string,
    butn: PropTypes.string
}

export default function Button ({link, butn}) {
    return (
        <a href={link} target="_blank">{butn}</a>
    )
}