import { Trash } from '@phosphor-icons/react/dist/ssr';
import { ThumbsUp } from '@phosphor-icons/react/dist/ssr';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://plus.unsplash.com/premium_photo-1725268465524-0fa49ff64a90?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Vieira</strong>
                            <time title='10 de Setembro as 09:44h' datatype="2024/09/10 09:44:00">Há 1 hora atrás</time>
                        </div>
                        <button title='Excluir Comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bem Gabriel, Parabens !!!</p>
                </div>           
                <footer>
                    <button>
                        <ThumbsUp size={20}/>
                        Curtir <span>20</span>
                    </button>
                </footer>     
            </div>
        </div>
    );
}