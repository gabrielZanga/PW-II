import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar} 
                        src="/src/assets/img-og.png"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Gabriel Vieira Zangarelli</strong>
                        <span>Jiu-Jitsu Coach</span>
                    </div>
                </div>
                <time title="10 de Setembro às 09:44h" dateTime="2024/09/10 09:44h">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Honda Civic 1.8 Automático LXL SE/2011</p>
            </div>
            <div className={styles.contentCar}>
                <img src="/src/assets/civic.jpg" />
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