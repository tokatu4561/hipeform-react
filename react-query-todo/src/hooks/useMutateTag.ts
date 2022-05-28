import axios from "axios"
import { useMutation, useQueryClient } from "react-query"
import { useAppDispatch } from "../app/hooks"
import { ITag } from "../types"

export const useMutateTag = () => {
    const dispatch = useAppDispatch()
    const queryQlient = useQueryClient()

    const createTagMutation = useMutation(
        (tag: Omit<ITag, 'id'>) => axios.post('tags', tag), 
        {
            onSuccess: (res) => {
                
            }
        }
    )
}