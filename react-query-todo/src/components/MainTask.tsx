import React, { useState } from 'react'
import { useHistory } from 'react-router'
import TaskList from './TaskList'

const MainTask = () => {
    const history = useHistory()
    const [text, setText] = useState('')

    return (
       <>
       <input type="text" />
       <p className="mb-10 text-xl font-bold">Tasks</p>
       <TaskList />
       </>
    )
}

export default MainTask
