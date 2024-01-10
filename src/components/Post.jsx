import styles from './Post.module.css'

export function Post() {
    return (
        <article>
            <header>
                <div className={styles.author}>
                    <img src="../img/ignite-logo.svg" alt="" />
                    <div className={styles.info}>
                        <strong>Nome</strong>
                        <span>Cargo</span>
                    </div>
                </div>
            </header>
        </article>
    )
}