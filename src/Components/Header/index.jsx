import TodoLogo from "../../assets/Logo.svg";
import { FiPlusCircle } from "react-icons/fi";
import styles from "./header.module.css";
import { useState } from "react";

export function Header({ onAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onAddTask(title);
    setTitle("")
    
  }
  function onChangeTitle(event) {
    setTitle(event.target.value);
    
  }
  return (
    <>
      <header className={styles.header}>
        <img src={TodoLogo} alt="Logo TodoList" />

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={onChangeTitle}
            value={title}
            required
          />
          <button>
            Criar
            <FiPlusCircle size={20} />
          </button>
        </form>
      </header>
    </>
  );
}
