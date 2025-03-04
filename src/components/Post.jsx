/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns';
import {ptBR} from 'date-fns/locale/pt-BR'

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { useState } from 'react';


export function Post({author, publishedAt, content}) {
  const [comments, setComments] = useState(
    [
      'Post muito bacana, hein?!'
    ]
  )
  
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  return (
    <article className={styles.post}>
      
      <header>
        <div className={styles.author}>
        <Avatar src={author.avatarUrl}/>

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
        {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>

         {content.map(line => {
            if (line.type === 'paragraph') {
              return <p key={line.content}> {line.content} </p>
            } else if (line.type === 'link') {
              return <p key={line.content}><a href="">{line.content}</a></p> 
            }
         })}
   
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback:</strong>

        <textarea 
        placeholder="Deixe o seu comentário" 
        name='inputComentario'
        value={newCommentText}
        onChange={handNewCommentChange}
        ></textarea>

        <footer>
        <button type="submit">Publicar</button>
        </footer>
     
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment key={comment} content={comment}/>
          )
        })}
      </div>

    </article>
  );
}
