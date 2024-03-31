import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_USERS_ENDPOINT } from "../../config/endpoints";

export const fetchUsers = createAsyncThunk("fetchUsers", () => {
  const res = fetch(GET_USERS_ENDPOINT).then((data) =>
    data.json()
  );
  return res;
});
