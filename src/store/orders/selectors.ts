import { RootState } from "../rootReducer";

export const getOrderPending = (state: RootState) => state.orders?.pending;

export const getOrders = (state: RootState) => state.orders?.orders;

export const getErrorOrder = (state: RootState) => state.orders?.error;

export const getCountOrders = (state: RootState) => state.orders?.countOrders;

export const getPageActive = (state: RootState) => state.orders?.pageActive;

export const getRateId = (state: RootState) => state.orders.rateId;

export const getCityId = (state: RootState) => state.orders.cityId;
