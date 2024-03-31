import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "./action";
import { User, UserState } from "./type";

const initialState: UserState = {
  loading: false,
  users: [],
  error: undefined,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<Array<User>>) => {
        state.loading = false;
        state.users = action.payload;
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
  reducers: {},
});

export default userSlice.reducer;
