import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

//author: {avatarUrl: "", nome: "", cargo: ""}
//dataPublicação: Date
//content: string


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/furlanrogerio.png',
      nome: 'Rogério Furlan Bidu',
      cargo: 'Professor da Etec'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera !!!'},
      {type: 'paragraph', content: 'Amanhã teremos viagem a bienal !!!'},
      {type: 'link', content: 'uol.com.br'}
    ],
    dataPublicacao: new Date('2024/10/01 10:54:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://plus.unsplash.com/premium_photo-1725268465524-0fa49ff64a90?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      nome: 'Gabriel Vieira',
      cargo: 'Aluno da Etec'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera 😄!!!'},
      {type: 'paragraph', content: 'Eu vou a viagem da Bienal !!!'},
      {type: 'link', content: 'g1.com.br'}
    ],
    dataPublicacao: new Date('2024/11/05 10:54:00')
  }
]

export function App() {
  return (
    <div>
    <Header/>
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        {posts.map(post => {
          return(
            <Post
              author = {post.author}
              content = {post.content}
              dataPublicacao = {post.dataPublicacao}
            />
          )
        })}
      </main>
    </div>    
  </div>
  )
} 

export default App
