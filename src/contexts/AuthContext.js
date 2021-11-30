import React, { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../firebase/FireBase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import axios from "axios";
import { USER_API } from "../helpers/const";

export const authContext = createContext();
const INIT_STATE = {
  user: "",
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, user: action.payload };
    case "LOGOUT_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  console.log(props);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: "LOGIN_USER",
          payload: user,
        });
      } else {
        dispatch({
          type: "LOGOUT_USER",
          payload: "",
        });
      }
    });
  }, []);

  // const createUserWithEmailAndPasswordHandler = async (email, password) => {
  //   try {
  //     const { user } = await createUserWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  async function createUserWithEmailAndPasswordHandler(email, password) {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    addUserToJson(
      response.user.email,
      response.user.displayName,
      response.user.photoURL
    );
  }

  const logOut = async () => {
    signOut(auth)
      .then(() => {
        dispatch({
          type: "LOGOUT_USER",
          payload: "",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  let adminEmail = "nurlanabdullaev9820@gmail.com";

  // const loginUserWithEmail = async (email, password) => {
  //   try {
  //     await signInWithEmailAndPassword(auth, email, password);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  async function loginUserWithEmail(email, password) {
    const response = await signInWithEmailAndPassword(auth, email, password);
    addUserToJson(
      response.user.email,
      response.user.displayName,
      response.user.photoURL
    );
  }

  //
  async function addUserToJson(email, displayName, photoURL) {
    try {
      let myUser = { username: email, displayName, photoURL };
      let { data } = await axios(USER_API);
      let result = data.filter((item) => {
        return item.username === email;
      });
      localStorage.setItem("users", JSON.stringify(myUser));
      if (result.length === 0) {
        await axios.post(USER_API, myUser);
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <authContext.Provider
      value={{
        addUserToJson,
        createUserWithEmailAndPasswordHandler,
        loginUserWithEmail,
        logOut,
        user: state.user,
        adminEmail,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
