import { Post } from './components/Post';
import { Header } from './components/Header';

import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Thalia Silva" content="Esse é um teste" />
          <Post author="Fulana de Tal" content="Esse é um teste numero 2" />
          <Post author="Beltrana de Y" content="Esse é um teste numero 3" />
        </main>
      </div>
    </div>

  )
}

export default App
