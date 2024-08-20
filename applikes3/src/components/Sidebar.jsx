import styles from './Sidebar.module.css';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1516640000-9951e17c051d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D" alt="" />
            <div className={styles.profile}>
                <strong>Gabriel Vieira</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">Editar seu Perfil</a>
            </footer>
        </aside>

    );
}