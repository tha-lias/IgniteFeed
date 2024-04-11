import { Post } from './Post';
import { Header } from './components/Header';
import './style.css';
function App() {

  return (
    <div>
      <Header />
      <Post author="Thalia Silva" content="Esse é um teste"/>
      <Post author="Fulana de Tal" content="Esse é um teste numero 2"/>
      <Post author="Beltrana de Y" content="Esse é um teste numero 3"/>
    
    </div>

  )
}

export default App
