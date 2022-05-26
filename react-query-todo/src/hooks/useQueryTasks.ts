import axios from "axios"
import { useQuery } from "react-query"
import { Task } from "../types"

export const useQueryTasks = () => {
    const getTasks = async () => {
        const {data} = await axios.get(
            `${process.env.REACT_APP_REST_URL}/tasks/`
        )
        return data
    }

    return useQuery<Task[],Error>({
        queryKey:'tasks',
        queryFn: getTasks,
        staleTime: 0,
    })
}