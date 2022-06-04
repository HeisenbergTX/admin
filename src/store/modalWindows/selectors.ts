import { RootState } from "../rootReducer";

export const getValueSideBar = (state: RootState) =>
  state.modalWindows.openSideBar;

export const getValueFilterOrder = (state: RootState) =>
  state.modalWindows.openFilterOrder;

export const getValueFilterModel = (state: RootState) =>
  state.modalWindows.openFilterModel;

export const getValueCategoryModal = (state: RootState) =>
  state.modalWindows.openCategoryModal;

export const getValueRateModal = (state: RootState) =>
  state.modalWindows.openRateModal;

export const getValueOrderModal = (state: RootState) =>
  state.modalWindows.openOrderModal;

export const getValueRateTypeModal = (state: RootState) =>
  state.modalWindows.openRateTypeModal;
