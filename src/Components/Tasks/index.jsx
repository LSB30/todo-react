import { Task } from "../Task";
import styles from "./tasks.module.css";
import { TbClipboardText } from "react-icons/tb";

export function Tasks({ task, onRemove, onComplete }) {
  const tasksQuantity = task.length;
  const completedTasks = task.filter((tasks) => tasks.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.textpurple}>Concluídas</p>
          <span>
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {task.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              onRemove={onRemove}
              onComplete={onComplete}
              isCompleted={task.isCompleted}
            />
          );
        })}

        {task.length <= 0 && (
          <section className={styles.empty}>
            <TbClipboardText size={50} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
