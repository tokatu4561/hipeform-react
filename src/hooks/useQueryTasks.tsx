import axios from 'axios'
import { useQuery } from 'react-query'
import { Task } from '../types'

const getTasks = async () => {
  const { data } = await axios.get<Task[]>('http://127.0.0.1:8000/api/tasks/')
  return data
}

export const useQueryTasks = () => {
  return useQuery({
    queryKey: 'tasks',
    queryFn: getTasks,
    cacheTime: 60 * 60 * 2,
    staleTime: 0,
  })
}
