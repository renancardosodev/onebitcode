import Profile from "./Profile";
import styles from "../styles/Card.module.css";
import avatar from "../assets/perfil-semfundo.jpg";

export default function App() {
  return (
    <>
      <section className={styles.app}>
        <Profile
          avatar={avatar}
          name="Renan Cardoso"
          bio="Olá, sou Renan, um entusiasta da tecnologia em busca contínua de crescimento profissional."
          email="renancardoso.s@hotmail.com"
          phone="(21) 99437 0421"
          githubUrl="https://github.com/renancardosodev"
          linkedinUrl= "https://www.linkedin.com/in/renancardosodev/"
          twitterUrl="SEM TWITTER"
        />
      </section>
    </>
  );
}
