import React from 'react'
import { useAuth } from '../hooks/auth'
import {
  Route as ReactRoute,
  RouteProps as ReactRouterProps,
  Redirect,
} from 'react-router-dom'

interface RouteProps extends ReactRouterProps {
  isPrivate?: boolean
  component: React.ComponentType
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth()

  return (
    <ReactRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          // <Redirect
          //   to={{
          //     pathname: isPrivate ? '/' : '/home',
          //     state: { from: location },
          //   }}
          // />
          <Component />
        )
      }}
    />
  )
}
export default Route
