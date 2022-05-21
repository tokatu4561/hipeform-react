import { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'
import { ClassicalFetchA } from './components/ClassicalFetchA'
import { ClassicalFetchB } from './components/ClassicalFetchB'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/fetch-a">
            <ClassicalFetchA />
          </Route>
          <Route exact path="/fetch-b">
            <ClassicalFetchB />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
