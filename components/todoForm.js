import { useState } from 'react'
import styles from '../styles/Todo.module.css'
import { MdAdd } from 'react-icons/md'

const TodoForm = () => {
  const [newTaskInput, setNewTaskInput] = useState('')

  const handleTodoSubmission = e => {
    e.preventDefault()
    console.log(newTaskInput)
  }

  return (
    <form className={styles['task-container']}>
      <input
        type='text'
        value={newTaskInput}
        name='todo'
        placeholder='Add New Task'
        onChange={e => setNewTaskInput(e.target.value)}
      />
      <button
        className={styles['submit-btn']}
        role='button'
        onClick={handleTodoSubmission}
        type='submit'
      >
        <MdAdd className={styles['add-icon']} />
      </button>
    </form>
  )
}

export default TodoForm
