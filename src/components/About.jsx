
import styles from "../style";

const About = () => {
    return(
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-white-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Gebakoo Ecommerce web app</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
        I'm Birtukan Kuma, software engineering graduate. Developed this E-commerce web app 
        as my portfolio for two main reasons. First one is to have a good practice on React (frontend) and flask (Backend). And the second one is that I want to solve my societies market inflation problem on some agricultural items.</p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>Get this project's code via <a href="https://github.com/BirtukanK/Ecommerce"><b>Github link to Gebakoo</b></a></p>
        </div>


  </section>
    )
}

export default About