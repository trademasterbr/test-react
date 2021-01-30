import React from 'react'
import {
  Route as ReactRoute,
  RouteProps as ReactRouterProps,
  Redirect,
} from 'react-router-dom'

interface RouteProps extends ReactRouterProps {
  isPrivate?: boolean
  component: React.ComponentType
}
const user = JSON.parse(localStorage.getItem('@tradeMaster:user'))

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  return (
    <ReactRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/home',
              state: { from: location },
            }}
          />
        )
      }}
    />
  )
}
export default Route
