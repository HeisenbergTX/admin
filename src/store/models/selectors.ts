import { RootState } from "../rootReducer";

export const getCountModels = (state: RootState) => state.models.countModels;

export const getModelPendng = (state: RootState) => state.models.pending;

export const getModels = (state: RootState) => state.models.models;

export const getPageActive = (state: RootState) => state.models.pageActive;

export const getModelError = (state: RootState) => state.models.error;
