import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from '../components/Layout'
import { NotFound } from './NotFound'
import { paths } from './paths'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { PurchasesHistoric } from './PurchasesHistoric'
import { ShoppingLists } from './ShoppingLists'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route
            element={
              <PublicRoute>
                <SignIn />
              </PublicRoute>
            }
            index
          />
          <Route
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
            path={paths.signUp}
          />
          <Route
            element={
              <PrivateRoute>
                <PurchasesHistoric />
              </PrivateRoute>
            }
            path={paths.purchasesHistoric}
          />
          <Route
            element={
              <PrivateRoute>
                <ShoppingLists />
              </PrivateRoute>
            }
            path={paths.shoppingLists}
          />
          <Route element={<NotFound />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
