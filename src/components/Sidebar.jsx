import { PencilLine } from 'phosphor-react'


import styles from './Sidebar.module.css'


export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        
            <div className={styles.profile}>
                <img src="https://avatars.githubusercontent.com/u/68444645?v=4" alt="" />

                <strong>Pedro Henrique</strong>
                <span>Estudante</span>
            </div>

            <footer>
                <a className={styles.buttonedit} href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}