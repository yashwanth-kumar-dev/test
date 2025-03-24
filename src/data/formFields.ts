export const formFields = {
  name: "name",
  mobileNumber: "mobileNumber",
  email: "email",
  doorNo: "doorNo",
  blockStreet: "blockStreet",
  city: "city",
  state: "state",
  pincode: "pincode",
  permanentDoorNo: "permanentDoorNo",
  permanentBlockStreet: "permanentBlockStreet",
  permanentCity: "permanentCity",
  permanentState: "permanentState",
  permanentPincode: "permanentPincode",
};

export type FormData = {
  [key in keyof typeof formFields]: string;
};
