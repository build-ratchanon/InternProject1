import NavBar from "@/component/navbar"
import { Topic } from "@/component/topic"
import Block from "@/component/block"
import styles from "@/styles/Home.module.css"

export default function Home() {
  return (
    <>
      <NavBar/>
      
      <div className={styles.Form}>
        <Topic/>
        <Block/>
      </div>


    </>
  )
}
