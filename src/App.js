import './App.css'
import { Router } from '@reach/router'
import NavLink from './components/NavLink'
import View1 from './components/View1'
import View2 from './components/View2'
import NotFound from './components/NotFound'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <nav className="Nav">
          <NavLink to="/">View 1</NavLink>
          <NavLink to="/view1">View 1 on different route</NavLink>
          <NavLink to="/view2">View 2</NavLink>
        </nav>
        <Router>
          <View1 path="/" />
          <View1 path="/view1" />
          <View2 path="/view2" />
          <NotFound default />
        </Router>
      </div>
    </QueryClientProvider>
  )
}

export default App
