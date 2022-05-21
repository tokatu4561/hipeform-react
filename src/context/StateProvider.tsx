import { createContext, FC, useContext, useState } from 'react'
import { Task } from '../types'

interface StateContextType {
  tasks: Task[] | null
  isDark: boolean
  setTasks: React.Dispatch<React.SetStateAction<Task[] | null>>
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}

const StateContext = createContext({} as StateContextType)

export const StateProvider: FC = ({ children }) => {
  const [tasks, setTasks] = useState<Task[] | null>(null)
  const [isDark, setIsDark] = useState(false)

  return (
    <StateContext.Provider value={{ tasks, isDark, setTasks, setIsDark }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = (): StateContextType => useContext(StateContext)
