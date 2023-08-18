import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "Dummy Name",
    email: "dummy@example.com",
  },
});
userContext.displayName = "userContext";

export default userContext;
