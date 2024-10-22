import { MoneyWavy } from '@phosphor-icons/react/dist/ssr';
import styles from './Santander.module.css'
import { Bank } from '@phosphor-icons/react';
export function Santander() {
    return (
        <aside className={styles.santander}>
        <img className={styles.covers} src="/src/assets/santander.png"/>
        <div className={styles.profilesant}>
            <img className={styles.avatarsant} src="/src/assets/logosant.png"/>
            <strong>Santander</strong>
            <span>Instituição Bancária</span>
        </div>
        <footer>
            <a href="#">
                <Bank size={20}/>
                Empréstimos</a>
        </footer>

        <div className={styles.marcas}></div>
        
    </aside>
    );
}