import { createContext, useReducer } from "react";

export const PostlistContext = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: () => {},
  fetching: false,
});

const Reducerfunc = (CurrPostlist, Action) => {
  let Newpostlist = CurrPostlist;
  if (Action.type === "ADD_POST") {
    Newpostlist = [Action.payload, ...CurrPostlist];
  } else if (Action.type === "DELETE_POST") {
    Newpostlist = CurrPostlist.filter(
      (item) => item.id !== Action.payload.Getid
    );
  } else if (Action.type === "ADD_INITIAL_POST") {
    Newpostlist = Action.payload;
  }
  return Newpostlist;
};

const Postlistprovider = ({ children }) => {
  let [postlist, Dispatch] = useReducer(Reducerfunc, []);

  let addPost = (post) => {
    let addpostAction = {
      type: "ADD_POST",
      payload: post,
    };
    Dispatch(addpostAction);
  };

  let addIntialPost = (posts) => {
    let addInitialpostAction = {
      type: "ADD_INITIAL_POST",
      payload: posts,
    };
    Dispatch(addInitialpostAction);
  };

  let deletePost = (Getid) => {
    let deletepostAction = {
      type: "DELETE_POST",
      payload: {
        Getid,
      },
    };
    Dispatch(deletepostAction);
  };

  return (
    <PostlistContext.Provider value={{ postlist, addPost, deletePost }}>
      {children}
    </PostlistContext.Provider>
  );
};
export default Postlistprovider;
