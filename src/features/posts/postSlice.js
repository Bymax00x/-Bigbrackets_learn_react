import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: nanoid(), title: "First post", content: "This is the first post" },
  { id: nanoid(), title: "second post", content: "This is the second post" },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postSlice.reducer;
