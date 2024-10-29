import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <>
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="/src/assets/img-og.png"/>

                    <div className={styles.authorInfo}>
                        <strong>Scuderia Multimarcas</strong>
                        <span>Concessionária</span>
                    </div>

                </div>
                <time title="10 de Setembro às 09:44h" dateTime="2024/09/10 09:44h">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <strong>VW Golf GTI 2.0 MK7-2021</strong>
                <p>R$140.800 Mil no Pix ou entrada de no mínimo 67Mil R$</p>
            </div>

            <div className={styles.contentCar}>
                <img src="/src/assets/VW-Golf-GTI-2021-Final-Edition.jpg" />
            </div>

            <form className={styles.commentForm}>
                <textarea placeholder='Deixe um comentario'></textarea>
               
                <footer> <button type='submit'>Publicar</button> </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
            </div>

        </article>


        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="/src/assets/img-og.png"/>

                    <div className={styles.authorInfo}>
                        <strong>Scuderia Multimarcas</strong>
                        <span>Concessionária</span> 
                    </div>

                </div>
                <time title="10 de Setembro às 09:44h" dateTime="2024/09/10 09:44h">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <strong>Honda Civic Type R-2.0 DI DOHC VTEC Turbo</strong>
                <p> R$ 429.900,00 Mil no Pix ou entrada mínima de 90Mil R$</p>
            </div>

            <div className={styles.contentCar2}>
                <img src="/src/assets/Honda-Civic-Type-R.webp" />
            </div>

            <form className={styles.commentForm}>
                <textarea placeholder='Deixe um comentario'></textarea>
               
                <footer> <button type='submit'>Publicar</button> </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
            </div>

        </article>
</>
    )
}