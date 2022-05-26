import axios from "axios"
import { useQuery } from "react-query"
import { ITask } from "../types"

export const useQueryTasks = () => {
    const getTasks = async () => {
        const { data } = await axios.get('/tasks/')
        return data
    }

    return useQuery<ITask[],Error>({
        queryKey:'tasks',
        queryFn: getTasks,
        staleTime: 0,
    })
}