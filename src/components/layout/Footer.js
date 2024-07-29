import {FaFacebook,FaGithub,FaInstagram,FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
function Footer(){
   return (
    <footer className={styles.footer}>
        <ul className={styles.social_list}>
            
            <a href='https://github.com/Sofyaolvs'><li><FaGithub/></li> </a>
            <a href='https://www.linkedin.com/in/sofyaoliveira'><li><FaLinkedin/></li> </a>
            
        </ul>
        <p className={styles.copy_right}><span>Costs</span> &copy;2024</p>
    </footer>
   )
}
export default Footer