import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navbar: [
    {
      id: "Home",
      NavLink: "Home",
      LinkTo: "/",
      class: "list-group-item border-0",
      isActive: true,
    },
    {
      id: "About",
      NavLink: "About",
      LinkTo: "/About",
      class: "list-group-item border-0",
      isActive: false,
    },
    {
      id: "Services",
      NavLink: "Services",
      LinkTo: "/Services",
      class: "list-group-item border-0",
      isActive: false,
    },
    {
      id: "Career",
      NavLink: "Career",
      LinkTo: "/Career",
      class: "list-group-item border-0",
      isActive: false,
    },
    {
      id: "Blogs",
      NavLink: "Blogs",
      LinkTo: "/Blogs",
      class: "list-group-item border-0",
      isActive: false,
    },
    {
      id: "Contact",
      NavLink: "Contact Us",
      LinkTo: "/Contact",
      class: "list-group-item border-0",
      isActive: false,
    },
  ],
};

const mySlice = createSlice({
  name: "slice",
  initialState: initialState,
  reducers: {
    handelNavBarRouting(state, action) {
      let obj = [];
      obj = state.navbar.map((data, i) => {
        if (action.payload === i) {
          return { ...data, isActive: true };
        } else {
          return { ...data, isActive: false };
        }
      });
      state.navbar = obj;
    },
    handleServicesRouting(state) {
      let obj = [];
      obj = state.navbar.map((data, i) => {
        if (i === 2) {
          return { ...data, isActive: true };
        } else {
          return { ...data, isActive: false };
        }
      });
      state.navbar = obj;
    },
    handleLearnMore(state) {
      let obj = [];
      obj = state.navbar.map((data) => {
        return { ...data, isActive: false };
      });
      state.navbar = obj;
    },
  },
});

export const mySliceActions = mySlice.actions;

export default mySlice.reducer;
