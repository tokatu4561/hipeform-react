import axios from "axios"
import { useMutation, useQueryClient } from "react-query"
import { useAppDispatch } from "../app/hooks"
import { resetEditedTask } from "../slices/todoSlice"
import { ITask } from "../types"

export const useMutateTask = () =>{
    const dispatch = useAppDispatch()
    const queryQlient = useQueryClient()

    const createTaskMutation = useMutation(
        (task: Omit<ITask, 'id'>) => axios.post('tasks', task), 
        {
            onSuccess: (res) => {
                const previousTodos = queryQlient.getQueryData<ITask[]>('task')

                if(previousTodos) {
                    queryQlient.setQueryData<ITask[]>('task', [
                        ...previousTodos,
                        res.data
                    ])
                }

                dispatch(resetEditedTask)
            }
        }
    )

    const updateTaskMutation = useMutation(
        (task: ITask) => axios.put(`tasks/${task.id}`, task), 
        {
            onSuccess: (res, variables) => {
                const previousTodos = queryQlient.getQueryData<ITask[]>('task')

                if(previousTodos) {
                    queryQlient.setQueryData<ITask[]>('task', 
                    previousTodos.map((task) =>
                    task.id === variables.id ? res.data : task
                  ))
                }

                dispatch(resetEditedTask())
            }
        }
    )

    const deleteTaskMutation = useMutation(
        (id: number) =>
          axios.delete(`${process.env.REACT_APP_REST_URL}/tasks/${id}/`),
        {
          onSuccess: (res, variables) => {
            const previousTodos = queryQlient.getQueryData<ITask[]>('tasks')
            if (previousTodos) {
              queryQlient.setQueryData<ITask[]>(
                'tasks',
                previousTodos.filter((task) => task.id !== variables)
              )
            }
            dispatch(resetEditedTask())
          },
        }
      )


      return { createTaskMutation, updateTaskMutation, deleteTaskMutation}
}