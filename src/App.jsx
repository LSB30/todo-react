import { useEffect, useState } from "react";
import { Header } from "./Components/Header";
import { Tasks } from "./Components/Tasks";

const LOCAL_STORAGE_KEY = "todo:savedTasks";

export function App() {
  const [tasks, setTasks] = useState([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTasks(taskTitle) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function removeTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
    console.log(tasks);
  }

  function toggleTaskCompleted(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    setTasksAndSave(newTasks);
  }
  return (
    <>
      <Header onAddTask={addTasks} />
      <Tasks
        task={tasks}
        onRemove={removeTask}
        onComplete={toggleTaskCompleted}
      />
    </>
  );
}
