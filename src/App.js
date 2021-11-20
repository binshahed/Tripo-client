import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home/Home'
import TopNav from './components/TopNav/TopNav'
import Footer from './components/Footer/Footer'
import initializeAuthentication from './components/firebase/firebase.initialize'
import AuthProvider from './components/context/AuthProvider'
import Login from './components/Login/Login'
import PageNotFound from './components/PageNotFound/PageNotFound'
import OurPackages from './components/OurPackages/OurPackages'
import PackageDetail from './components/PackageDetail/PackageDetail'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import MyOrders from './components/MyOrderx/MyOrders'
import AllOrders from './components/AllOrders/AllOrders'
import AddPackages from './components/AddPackages/AddPackages'

initializeAuthentication()

function App () {
  return (
    <AuthProvider>
      <Router>
        <TopNav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/packages'>
            <OurPackages />
          </Route>
          <PrivateRoute exact path='/package/:id'>
            <PackageDetail />
          </PrivateRoute>
          <PrivateRoute exact path='/myOrders'>
            <MyOrders />
          </PrivateRoute>
          <PrivateRoute exact path='/allOrders'>
            <AllOrders />
          </PrivateRoute>
          <PrivateRoute exact path='/addPackage'>
            <AddPackages />
          </PrivateRoute>

          <Route exact path='/login'>
            <Login />
          </Route>
          <Route path='/*'>
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  )
}

export default App
