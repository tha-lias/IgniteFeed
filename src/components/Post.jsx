import style from './Post.module.css'

export function Post () {
    return (
      <article className={style.post}>
        <header>
            <div className={style.author}>
                <img 
                className={style.avatar}
                src="https://github.com/tha-lias.png" 
                />

                <div className={style.authorInfo}>
                    <strong>Thalia Silva</strong>
                    <span>Desenvolvedora Web</span>
                </div>
            </div>

            <time title="11 de Maio às 08h13" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
        </header>
      </article>
    );
} 