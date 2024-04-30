import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({ content }) {
    return (
        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://github.com/tha-lias.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                       <div className={styles.authorAndTime}>
                            <strong>Thalia Silva</strong>

                            <time title="11 de Maio às 08h13" dateTime="2022-05-11 08:13:30"> Cerca de 1h atrás </time>
                       </div>

                       <button title='Deletar comentário'> <Trash size={24}/> </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button> 
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                     </button>
                </footer>
            </div>
        </div>
    )
}