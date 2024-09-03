import {Post} from "./Post";
import { Header } from "./components/Header";
import styles from "./App.module.css"
import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
    <Header/>
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
    <Post author="Aristóteles"
          coment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                  Temporibus odio reiciendis dolores impedit quae eum nam blanditiis eos nostrum, 
                  expedita repellat fuga ut. Atque, tempore aspernatur nam harum similique delectus!"/>

    <Post author="Platão"
          coment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                  Temporibus odio reiciendis dolores impedit quae eum nam blanditiis eos nostrum, 
                  expedita repellat fuga ut. Atque, tempore aspernatur nam harum similique delectus!"/>
      </main>        
    </div>
  </div>
  )
}