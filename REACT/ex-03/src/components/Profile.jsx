import Button from "./Button.jsx"
import styles from "../styles/Card.module.css"
import PropTypes from "prop-types"

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.number,
    githubUrl: PropTypes.string,
    linkedinUrl: PropTypes.string,
    twitterUrl: PropTypes.string
}

export default function Profile ({avatar, name, bio, email, phone, githubUrl, linkedinUrl, twitterUrl}) {
    return (
        <>
            <div className={styles.container}>
                <img src={avatar} alt={name} className={styles.avatar} />
                <h1 className={styles.name}>{name}</h1>
                <div>{bio}</div>
                <div>{phone}</div>
                <div>{email}</div>
                <div className={styles.links}>
                    <Button link={githubUrl} butn="GitHub" />
                    <Button link={linkedinUrl} butn="Linkedin" />
                    <Button link={twitterUrl} butn="Twitter" />
                </div>
            </div>
           
        </>
    )
}