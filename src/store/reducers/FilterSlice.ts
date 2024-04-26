import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterType } from '../../common/types/filterType';

const initialFilterState: FilterType = {
  all: true,
  noTransfers: false,
  transfers: {
    1: false,
    2: false,
    3: false,
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    setAll(state) {
      state.all = true;
      state.noTransfers = false;
      state.transfers = {
        1: false,
        2: false,
        3: false,
      };
    },
    setNoTransfers(state) {
      state.all = false;
      state.noTransfers = true;
      state.transfers = {
        1: false,
        2: false,
        3: false,
      };
    },
    setTransfers(state, action: PayloadAction<number>) {
      state.all = false;
      state.noTransfers = false;

      state.transfers[action.payload] = !state.transfers[action.payload];
    },
    updateFilters(state, action: PayloadAction<FilterType>) {
      const newFilters = action.payload;
      return {
        ...state,
        ...newFilters,
      };
    },
  },
});

export const { setAll, setNoTransfers, setTransfers, updateFilters } = filterSlice.actions;

export default filterSlice.reducer;
