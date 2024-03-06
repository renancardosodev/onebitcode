import styles from "../styles/Card.module.css";
import starWarsImg from "../assets/star-wars.jpg";

export default function Card() {
  return (
    <div
      className={styles.card}
      // style={{
      //     backgroundColor:"#d7e1e7",
      //     borderRadius:"2rem",
      //     maxWidth:"100vw",
      //     height:"100vh",
      //     margin:"2rem",
      //     display:"flex",
      //     justifyContent:"center",
      //     alignItems:"center",
      //     padding:"2rem"
      // }}
    >
      <div>
        <img
          src={starWarsImg}
          alt="Star Wars"
          style={{ 
            width: "auto", 
            height: "100%" ,
            border: "1rem solid black"
        }}
        />
      </div>
      <div className={styles.description}>
        <h1>Poster Star Wars (1977)</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
          consequuntur ea nam quibusdam ut ab veritatis officia enim, at quo
          quisquam quaerat officiis ratione autem beatae delectus consectetur
          harum illo. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ratione quo, voluptatum distinctio porro iure, dolorem eveniet nihil
          veniam excepturi, molestiae ipsum corrupti provident voluptate sunt
          error reiciendis expedita incidunt ipsa.
        </p>
        <button>Comprar agora</button>
      </div>
    </div>
  );
}
