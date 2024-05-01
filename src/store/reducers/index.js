import { movies } from "../../data";

import {
  SONRAKİ_FİLM,
  ÖNCEKİ_FİLM,
  ADD_FAVORİTE,
  REMOVE_FAVORİTE,
} from "../actions/index";

const initialState = {
  sira: 0,
  movies: movies,
  favMovies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SONRAKİ_FİLM:
      return { ...state, sira: state.sira + 1 };

    case ÖNCEKİ_FİLM:
      return { ...state, sira: state.sira > 0 ? state.sira - 1 : state.sira };
    case ADD_FAVORİTE:
      return { ...state, favMovies: [...state.favMovies] };
    case REMOVE_FAVORİTE:
      return { ...state, favMovies: [...state.favMovies] };
    default:
      return state;
  }
};

export default reducer;
