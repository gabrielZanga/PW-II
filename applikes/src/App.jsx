import {Post} from "./Post";
import { Header } from "./components/Header";
import './global.css';

export function App() {
  return (
    <div>
    <Header/>
    <Post author="Aristóteles"
          coment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                  Temporibus odio reiciendis dolores impedit quae eum nam blanditiis eos nostrum, 
                  expedita repellat fuga ut. Atque, tempore aspernatur nam harum similique delectus!"/>

    <Post author="Bolsonaro"
          coment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                  Temporibus odio reiciendis dolores impedit quae eum nam blanditiis eos nostrum, 
                  expedita repellat fuga ut. Atque, tempore aspernatur nam harum similique delectus!"/>

    <Post author="Sócrates"
          coment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                  Temporibus odio reiciendis dolores impedit quae eum nam blanditiis eos nostrum, 
                  expedita repellat fuga ut. Atque, tempore aspernatur nam harum similique delectus!"/>              
    </div>
  )
}