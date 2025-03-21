export interface FormData {
  name: string;
  mobileNumber: string;
  email: string;
  doorNo: string;
  blockStreet: string;
  city: string;
  state: string;
  pincode: string;
  permanentDoorNo: string;
  permanentBlockStreet: string;
  permanentCity: string;
  permanentState: string;
  permanentPincode: string;
}

export interface Errors {
  name?: string;
  mobileNumber?: string;
  email?: string;
  doorNo?: string;
  blockStreet?: string;
  city?: string;
  state?: string;
  pincode?: string;
  permanentDoorNo?: string;
  permanentBlockStreet?: string;
  permanentCity?: string;
  permanentState?: string;
  permanentPincode?: string;
}
