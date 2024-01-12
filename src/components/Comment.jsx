import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(){
    return (
        <div className={styles.comment}>
            <img src="" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Pedro Gonçalves</strong>
                            <time title='Publicado em 11/05 13:00' dateTime=''>Publicado há 1h</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size="20"/>
                        </button>
                    </header>
                    <p>Olá, isso é um teste</p>
                </div>

                <footer>
                    <ThumbsUp />
                    Gostei <span>20</span>
                </footer>
            </div>
        </div>
    )
}