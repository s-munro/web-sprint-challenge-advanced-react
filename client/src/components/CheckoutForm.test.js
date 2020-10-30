import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { useForm } from '../hooks/useForm';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const header = screen.getByText(/checkout form/i);
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />)

  const firstNameInput = screen.getByLabelText(/First Name:/i);
  const lastNameInput = screen.getByLabelText(/Last Name:/i);
  const addressInput = screen.getByLabelText(/Address:/i);
  const cityInput = screen.getByLabelText(/City:/i);
  const stateInput = screen.getByLabelText(/State:/i);
  const zipInput = screen.getByLabelText(/Zip:/i);

  fireEvent.change(firstNameInput, { target: {value:'samjam', name:'firstName'}});
  fireEvent.change(lastNameInput, { target: {value:'munro', name:'lastName'}});
  fireEvent.change(addressInput, { target: {value:'110 6th', name:'address'}});
  fireEvent.change(cityInput, { target: {value:'btown', name:'city'}});
  fireEvent.change(stateInput, { target: {value:'indiana', name:'state'}});
  fireEvent.change(zipInput, { target: {value:'404', name:'zip'}});

  const button = screen.getByRole('button');
  fireEvent.click(button);


  const successText = await screen.getByTestId('successMessage');
  expect(successText).toBeInTheDocument();
});

