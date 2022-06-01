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
                const previousTags = queryQlient.getQueryData<ITag[]>('tag')

                if(previousTags) {
                    queryQlient.setQueryData<ITag[]>('task', [
                        ...previousTags,
                        res.data
                    ])
                }
            }
        }
    )

    const deleteTagMutation = useMutation(
        (id: number) => axios.delete(`tags/${id}`), 
        {
            onSuccess: (res, valiables) => {
                const previousTags = queryQlient.getQueryData<ITag[]>('tag')

                if(previousTags) {
                    queryQlient.setQueryData<ITag[]>('task', previousTags.filter((t) => t.id !== valiables))
                }
            }
        }
    )

    return {createTagMutation, deleteTagMutation}
}