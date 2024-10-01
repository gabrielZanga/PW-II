import styles from './Sidebar.module.css';
import { PencilLine } from '@phosphor-icons/react';

export function Sidebar() {
    return(
    <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://plus.unsplash.com/premium_photo-1670071481211-a07785866d48?w=400&auto=format&fit=crop&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8YWV1NnJMLWo2ZXd8fGVufDB8fHx8fA%3D%3D"/>
        <div className={styles.profile}>
            
            <img
                className={styles.avatar}
                src="https://github.com/alexandreBonzao.png"
            />

            <strong>Gabriel Vieira</strong>
            <span>Web Developer</span>
        </div>
        <footer>
            <a href="#">
                <PencilLine size={20}/>
                Editar seu Perfil
            </a>
            
        </footer>
    </aside>    
    );
}