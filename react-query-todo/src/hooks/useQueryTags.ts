import { useQuery } from 'react-query'
import axios from 'axios'
import { ITag } from '../types'


export const useQueryTags = () => {
  const getTags = async () => {
    const { data } = await axios.get<ITag[]>(
      `${process.env.REACT_APP_REST_URL}/tags/`
    )
    return data
  }
  return useQuery<ITag[], Error>({
    queryKey: 'tags',
    queryFn: getTags,
    staleTime: Infinity,
  })
}
