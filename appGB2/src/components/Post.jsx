import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar} 
                        src="https://github.com/gabrielZanga.png"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Gabriel Vieira</strong>
                        <span>Jiu-Jitsu Coach</span>
                    </div>
                </div>
                <time title="10 de Setembro às 09:44h" dateTime="2024/09/10 09:44h">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala Galera !!!</p>
                <p>O Jiu-Jitsu muda vidas !!!</p>
                <p>
                    <a href="#">#jiujitsufamily</a>{' '}
                    <a href="#">#eteccidadedolivro</a>{' '}
                    <a href="#">#vempraetec</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback !</strong>
                <textarea placeholder='Deixe um comentario'></textarea>
               
                <footer> <button type='submit'>Publicar</button> </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
            </div>

        </article>
    )
}