import { Cars } from "./Cars"
import { Header } from "./components/header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
        <Header/>

        <div className={styles.wrapper}>
          <Sidebar/>
          <main>
            <Post
              name="Golf 2018"
              price="R$120.000"
              />

              <Post
              name="Lancer 2020"
              price="R$140.000"
            />
          </main>
        </div>
    </div>
  )
}

