import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);

  const header = screen.getByText(/checkout form/i);
  expect(header).toBeTruthy();
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  const firstName = screen.getByLabelText(/first name/i);
  const lastName = screen.getByLabelText(/last name/i);
  const address = screen.getByLabelText(/address/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/state/i);
  const zip = screen.getByLabelText(/zip/i);
  const button = screen.getByRole("button");

  userEvent.type(firstName, "Sam");
  userEvent.type(lastName, "Munro");
  userEvent.type(address, "14th St.");
  userEvent.type(city, "Bloomington");
  userEvent.type(state, "Indiana");
  userEvent.type(zip, "47408");
  userEvent.click(button);

  const successText = await screen.findAllByTestId("successMessage");
  const successTextName = await screen.findByText(/Sam Munro/);
  const successAddressStreet = await screen.findByText(/14th St./);
  const successTextAddress = await screen.findByText(
    /Bloomington, Indiana 47408/i
  );
  expect(successText).toBeTruthy();
  expect(successTextName).toBeInTheDocument();
  expect(successAddressStreet).toBeInTheDocument();
  expect(successTextAddress).toBeInTheDocument();
});
