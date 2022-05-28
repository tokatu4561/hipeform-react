import React, { FC } from 'react'
import { useAppDispatch } from '../app/hooks'
import { useMutateTask } from '../hooks/useMutateTask'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import { ITask } from '../types'

interface Props {
    task: ITask
}

export const TaskItem:FC<Props> = ({task}) => {
    const dispatch = useAppDispatch()
    const {deleteTaskMutation} = useMutateTask()

    if(deleteTaskMutation.isLoading) {
        return <p>Deleting...</p>
    }

    return (
       <li className="my-3">
          <span className="font-bold">{task.title}</span>
          <span>
            {' : '}
            {task.tag_name}
          </span>

          <div className="flex float-right ml-20">
            <PencilAltIcon
              className="h-5 w-5 mx-1 text-blue-500 cursor-pointer"
              onClick={() => {}}
            />
            <TrashIcon
              className="h-5 w-5 text-blue-500 cursor-pointer"
              onClick={() => {
                deleteTaskMutation.mutate(task.id)
              }}
            />
          </div>
       </li>
    )
}
