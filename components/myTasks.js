import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TodoForm from './todoForm'

const MyTasks = () => {
  return (
    <>
      <Head>
        <title>TodoApp | Tasks</title>
        <meta name='description' content='todo app' />
      </Head>
      <div className={styles.task}>
        <h1>Add Tasks</h1>
        <TodoForm />
        {/* <li>TodoLists</li> */}
      </div>
    </>
  )
}

export default MyTasks
