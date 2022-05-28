import { useQueryTasks } from "../hooks/useQueryTasks"
import { TaskItem } from "./TaskItem"

const TaskList = () => {
    const {status, data} = useQueryTasks()

    if (status === 'loading') return <div>{'Loading...'}</div>
    if (status === 'error') return <div>{'Error'}</div>

    return (
        <div>
            {data?.map((task) => (
                <div>
                    <ul>
                        <TaskItem task={task} />
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default TaskList