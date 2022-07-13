import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserStateType {
  isOpenMyModal: boolean;
  isOpenAuthSocialModal: boolean;
  isOpenAuthUserTypeModal: boolean;
  isOpenAuthCompleteModal: boolean;
}

const initialState: UserStateType = {
  isOpenMyModal: false,
  isOpenAuthSocialModal: false,
  isOpenAuthUserTypeModal: false,
  isOpenAuthCompleteModal: false,
};

export const modalSlice = createSlice({
  name: 'MODAL',
  initialState,
  reducers: {
    setIsOpenMyModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenMyModal = action.payload;
    },
    setIsOpenAuthSocialModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenAuthSocialModal = action.payload;
    },
    setIsOpenAuthUserTypeModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenAuthUserTypeModal = action.payload;
    },
    setIsOpenAuthCompleteModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenAuthCompleteModal = action.payload;
    },
  },
});

export const {
  actions: modalSliceAction, //
  reducer: modalSliceReducer,
} = modalSlice;

export default modalSlice;
