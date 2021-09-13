import AVLTree from "avl";
import { createContext, useState } from "react";
import { useHistory } from "react-router";


export const initialState = {
  nodesNumber: 1,
  _AVLTree: new AVLTree(),
  tree: null
};

export const Context = createContext();

export function Store({ children }) {

  const [loginData, setLoginData] = useState(JSON.parse(localStorage.getItem('user')))
  const history = useHistory();

  const login = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    setLoginData(user);
    console.log(user);
    history.push("/");
  }

  const logout = () => {
    setLoginData(null);
    localStorage.removeItem('user');
    history.push("/login");
  } 

  return(
    <Context.Provider value={{ loginData, login, logout }}>
      { children }
    </Context.Provider>
  )
}
