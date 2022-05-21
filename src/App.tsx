import { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'
import { ClassicalFetchA } from './components/ClassicalFetchA'
import { ClassicalFetchB } from './components/ClassicalFetchB'
import { ReactQueryA } from './components/ReactQueryA'
import { ReactQueryB } from './components/ReactQueryB'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/">
              <ReactQueryA />
            </Route>
            <Route exact path="/query-b">
              <ReactQueryB />
            </Route>
            <Route exact path="/fetch-a">
              <ClassicalFetchA />
            </Route>
            <Route exact path="/fetch-b">
              <ClassicalFetchB />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
