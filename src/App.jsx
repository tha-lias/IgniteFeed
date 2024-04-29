import { Post } from './components/Post';
import { Header } from './components/Header';

import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';


// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/tha-lias.png',
      name: 'Thalia Silva',
      role: 'Desenvolvedora Web'
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 ' },
      { type: 'link', content: 'jane.design/doctorcare' },    
    ],

    publishedAt: new Date('2024-04-29 20:00:00') ,
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educador @Rocketseat'
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 ' },
      { type: 'link', content: 'jane.design/doctorcare' },    
    ],

    publishedAt: new Date('2024-04-10 20:00:00'),
  },

]

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post
              author = {post.author}
              content = {post.content}
              publishedAt = {post.publishedAt}
            />
          )
          })}
        </main>
      </div>
    </div>

  )
}

export default App
