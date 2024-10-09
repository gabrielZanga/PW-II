import { Header } from "./components/Header";
import styles from "./App.module.css"
import './global.css';
import { Sidebar } from "./components/Sidebar";
import { Santander } from "./components/Santander";
import { Post } from "./components/Post";

export function App() {
  return (
    <div>
    <Header/>
    <div className={styles.wrapper}>
      <Sidebar/>
     
      <main>
        <Post/>
        <Post/>
       
      </main>
      <Santander/>  
    </div>
  </div>
  )
}