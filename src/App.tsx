import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'

const App: FC = () => {
  return (
    <Layout>
      <BrowserRouter></BrowserRouter>
    </Layout>
  )
}

export default App
