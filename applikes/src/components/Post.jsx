import styles from './Post.module.css';
import {Comment} from "./Comment";
export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar}
                        src="https://plus.unsplash.com/premium_photo-1725268465524-0fa49ff64a90?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Gabriel Vieira</strong>
                        <span>Web Developer</span>
                    </div>
                                
                </div>
                <time title='10 de Setembro as 09:44h' datatype="2024/10/01 10:54:00">Publicado há 1 hora</time>
            </header>
            <div className={styles.content}>
                <p>Fala Galera !!!</p>
                <p>Amanha teremos viagem a Bienal !!!</p>
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