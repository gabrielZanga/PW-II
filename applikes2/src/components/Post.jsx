import styles from './Post.module.css';
import {Comment} from "./Comment";

export function Post({author}) {
    
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar}
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.nome}</strong>
                        <span>{author.cargo}</span>
                    </div>
                                
                </div>
                <time title='10 de Setembro as 09:44h' datatype="2024/10/01 10:54:00">Publicado há 1 hora</time>
            </header>
            <div className={styles.content}>
                <p>Fala Galera !!!</p>
                <p>Amanhã teremos viagem a Bienal !!!</p>
                <p>
                    <a href="">#bienaldolivrosp</a>{' '}
                    <a href="">#eteccidadedolivro</a>{' '}
                    <a href="">#vempraetec</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback !</strong>

                <textarea placeholder='Deixe um comentario'></textarea>

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>            
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>

        </article>
    )
}