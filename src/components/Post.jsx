import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/68444645?v=4" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Pedro Henrique</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='Publicado em 11/05 13:00' dateTime=''>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Olá pessoal</p>
                <p>Meu primeiro projeto em React, criado durante o curso da Rocketseat</p>
                <p><a href="">#rocketseat #react #ignite</a></p>
            </div>
        </article>
    )
}