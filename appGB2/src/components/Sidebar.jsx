import styles from './Sidebar.module.css';
import { PencilLine } from '@phosphor-icons/react';


export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://graciebarrasaopaulo.com.br/wp-content/uploads/2022/06/gbnews-1.png" alt="" />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/gabrielZanga.png"/>
                <strong>Gabriel Vieira</strong>
                <span>Jiu-Jitsu Coach</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu Perfil</a>
            </footer>
        </aside>

    );
}