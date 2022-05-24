import { OPEN_SIDE_BAR } from "./types";

export const openSideBar = (payload: boolean) => ({
  type: OPEN_SIDE_BAR,
  payload,
});
