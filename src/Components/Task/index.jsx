import styles from "./task.module.css";
import { FiTrash2 } from "react-icons/fi";
import { BsFillCheckCircleFill } from "react-icons/bs";
export function Task(task) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => task.onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.taskComplete : ""}>
         {task.title} 
      </p>

      <button
        className={styles.deleteButton}
        onClick={() => task.onRemove(task.id)}
      >
        <FiTrash2 size={20} />
      </button>
    </div>
  );
}
