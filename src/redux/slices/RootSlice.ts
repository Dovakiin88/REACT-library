import React from "react";
import { createSlice } from "@reduxjs/toolkit";


const RootSlice= createSlice({
    name: 'root',
    initialState: {
        author:'Author',
        title: 'Tite',
        genre: 'Genre',
        isbn: 'ISBN',
        copies: 'Copies'
    },
    reducers: {
        chooseauthor: (state, action) => { state.author = action.payload },
        choosetitle: (state, action) => { state.title = action.payload },
        choosegenre: (state, action) => { state.genre = action.payload },
        chooseisbn: (state, action) => {state.isbn = action.payload},
        choosecopies: (state, action) => {state.copies = action.payload}
    }
})

export const reducer = RootSlice.reducer;
export const {  chooseauthor, choosetitle, choosegenre, chooseisbn, choosecopies } = RootSlice.actions;