import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(),
    title: "leadership: Practical Skills ",
    aurther: "Demat 0 Conner",
    level: "Beginner",
  },
  {
    id: nanoid(),
    title: "Digital Marketing",
    aurther: "Leonardo D Caprio",
    level: "Intermediate",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postSlice.reducer;
