import React from 'react'
import { useAppDispatch } from '../app/hooks'
import { increment } from '../slices/counterSlice'

export const RTKitB = () => {
  const dispatch = useAppDispatch()
  console.log('renderd RTKitB')

  return (
    <div className="flex justify-center items-center flex-col">
      <button
        className="py-2 px-3 mt-3 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded"
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
    </div>
  )
}
