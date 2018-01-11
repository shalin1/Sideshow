export const SHOW_TICKETING_MODAL = "SHOW_TICKETING_MODAL";
export const HIDE_TICKETING_MODAL = "HIDE_TICKETING_MODAL";

const showTicketingModal = () => ({
  type: SHOW_TICKETING_MODAL,
});

const hideTicketingModal = () => ({
  type: HIDE_TICKETING_MODAL,
});
