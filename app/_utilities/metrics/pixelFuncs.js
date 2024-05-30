export const FbContactEvent = () => {
  window.fbq("track", "InitiateCheckout");
};

export const FbSendFormEvent = () => {
  window.fbq("track", "Lead");
};

export const FbThanksEvent = () => {
  window.fbq("track", "Purchase", { value: 0.0, currency: "USD" });
};
