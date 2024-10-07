import { MoneyWavy } from '@phosphor-icons/react/dist/ssr';
import styles from './Sidebar.module.css';
import { PencilLine } from '@phosphor-icons/react';


export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="/src/assets/channels4_profile.jpg"/>
            <div className={styles.profile}>
                <img className={styles.avatar} src="/src/assets/img-og.png"/>
                <strong>Scuderia Multimarcas</strong>
                <span>Concessionária</span>
            </div>
            <footer>
                <a href="#">
                    <MoneyWavy size={20}/>
                    Negociar Veículo</a>
            </footer>
            
        </aside>

    );
}