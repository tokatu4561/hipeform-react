export interface ITask {
    id: number
    title: string
    tag: number
    tag_name: string
    created_at: string
    updated_at: string
  }
  
  export interface IEditTask {
    id: number
    title: string
    tag: number
  }

  export interface ITag {
    id: number
    name: string
  }