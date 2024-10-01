import { Trash } from '@phosphor-icons/react/dist/ssr';
import styles from './Comment.module.css'
import { ThumbsUp } from '@phosphor-icons/react';
export function Comment() {

    return (
        <div className={styles.comment}>
            <img src="https://hqlodge.com.br/wp-content/uploads/2020/11/mestre-carlos-gracie.jpg" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Carlos Gracie Jr.</strong>
                            <time title="10 de Setembro às 09:44h" dateTime="2024/09/10 09:44h">Há 1h atrás</time>
                        </div>
                        <button title='Excluir Comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Parabéns !!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20}/>
                        Curtir <span>280</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}