import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./src/features/user/userSlice";

export default function RequireAuth(props) {
  const user = useSelector(selectUser);
  const [nextPage, setNextPage] = useState("");

  useEffect(() => {
    console.log(props.children);
    if (user.logged) {
      console.log("we r logged");
      setNextPage(props.children);
    } else setNextPage(<Navigate to="/login"></Navigate>);
  });

  return nextPage;
}
