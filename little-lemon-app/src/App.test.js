import { render, screen, fireEvent } from '@testing-library/react';
import ReservationsPage from './ReservationsPage';
import { MemoryRouter } from 'react-router-dom';

test("Renders the Reservation button", () => {
  render(
    <MemoryRouter><ReservationsPage /></MemoryRouter>);
  const btn = screen.getByText("Make your reservation");
  expect(btn).toBeInTheDocument();
});

test('Simulates inital times', () => {
  const { getByTestId, getAllByTestId } = render(
    <MemoryRouter><ReservationsPage /></MemoryRouter>);
  fireEvent.click(getByTestId('select'));
  const options = getAllByTestId('select-option');
  expect(options.length > 0);
})

test("Simulates date change", () => {
  const { getByTestId, getAllByTestId } = render(
    <MemoryRouter><ReservationsPage /></MemoryRouter>);
  const dateSelector = screen.getByLabelText(/Choose date/);
  fireEvent.click(getByTestId('select'));
  const todaysOptions = getAllByTestId('select-option');
  const validDate = "2024-01-01";
  fireEvent.change(dateSelector, { target: { value: validDate } });
  fireEvent.click(getByTestId('select'));
  const newOptions = getAllByTestId('select-option');
  expect(todaysOptions !== newOptions);
})

test("Submits reservation form", () => {
  render(
    <MemoryRouter><ReservationsPage /></MemoryRouter>);
  const btn = screen.getByText("Make your reservation");
  const data = localStorage.getItem("bookings");
  fireEvent.click(btn);
  const new_data = localStorage.getItem("bookings");
  expect(data !== new_data);
  expect(btn.style.backgroundColor !== "#495e57");
})

test("date input html validation", () => {
  render(
    <MemoryRouter><ReservationsPage /></MemoryRouter>
  );
  const dateSelector = screen.getByLabelText(/Choose date/);
  const minDate = new Date().toISOString().substring(0, 10);
  expect(dateSelector).toHaveAttribute("required");
  expect(dateSelector).toHaveAttribute("min", minDate);
})

test("time input html validation", () => {
  render(
    <MemoryRouter><ReservationsPage /></MemoryRouter>
  );
  const timeSelector = screen.getByLabelText(/Choose time/);
  expect(timeSelector).toHaveAttribute("required");
})

test("guest input html validation", () => {
  render(
    <MemoryRouter><ReservationsPage /></MemoryRouter>
  );
  const guestSelector = screen.getByLabelText(/Number of guests/);
  expect(guestSelector).toHaveAttribute("required");
  expect(guestSelector).toHaveAttribute("min", "1");
  expect(guestSelector).toHaveAttribute("max", "10");
})

test("date input '' entry", () => {
  render(
    <MemoryRouter><ReservationsPage /></MemoryRouter>
  );
  const dateSelector = screen.getByLabelText(/Choose date/);
  fireEvent.change(dateSelector, { target: { value: "" } });
  const btn = screen.getByText("Make your reservation");
  const data = localStorage.getItem("bookings");
  fireEvent.click(btn);
  const new_data = localStorage.getItem("bookings");
  expect(data == new_data);
  expect(btn.style.backgroundColor == "#495e57");
})

test("date input today entry", () => {
  render(
    <MemoryRouter><ReservationsPage /></MemoryRouter>
  );
  let dateSelector = screen.getByLabelText(/Choose date/);
  const minDate = new Date().toISOString().substring(0, 10);
  fireEvent.change(dateSelector, { target: { value: minDate } });
  const btn = screen.getByText("Make your reservation");
  const data = localStorage.getItem("bookings");
  fireEvent.click(btn);
  const new_data = localStorage.getItem("bookings");
  expect(data !== new_data);
  expect(btn.style.backgroundColor !== "#495e57");
})

test("date input old date entry", () => {
  render(
    <MemoryRouter><ReservationsPage /></MemoryRouter>
  );
  let dateSelector = screen.getByLabelText(/Choose date/);
  fireEvent.change(dateSelector, { target: { value: "2022-12-12" } });
  const btn = screen.getByText("Make your reservation");
  const data = localStorage.getItem("bookings");
  fireEvent.click(btn);
  const new_data = localStorage.getItem("bookings");
  expect(data == new_data);
  expect(btn.style.backgroundColor == "#495e57");
})

test("guest input string entry", () => {
  render(
    <MemoryRouter><ReservationsPage /></MemoryRouter>
  );
  const guestSelector = screen.getByLabelText(/Number of guests/);
  fireEvent.change(guestSelector, { target: { value: "string" } });
  const btn = screen.getByText("Make your reservation");
  const data = localStorage.getItem("bookings");
  fireEvent.click(btn);
  const new_data = localStorage.getItem("bookings");
  expect(data == new_data);
  expect(btn.style.backgroundColor == "#495e57");
})

test("guest input '' entry", () => {
  render(
    <MemoryRouter><ReservationsPage /></MemoryRouter>
  );
  const guestSelector = screen.getByLabelText(/Number of guests/);
  fireEvent.change(guestSelector, { target: { value: "" } });
  const btn = screen.getByText("Make your reservation");
  const data = localStorage.getItem("bookings");
  fireEvent.click(btn);
  const new_data = localStorage.getItem("bookings");
  expect(data == new_data);
  expect(btn.style.backgroundColor == "#495e57");
})

test("guest input 0 entry", () => {
  render(
    <MemoryRouter><ReservationsPage /></MemoryRouter>
  );
  const guestSelector = screen.getByLabelText(/Number of guests/);
  fireEvent.change(guestSelector, { target: { value: 0 } });
  const btn = screen.getByText("Make your reservation");
  const data = localStorage.getItem("bookings");
  fireEvent.click(btn);
  const new_data = localStorage.getItem("bookings");
  expect(data == new_data);
  expect(btn.style.backgroundColor == "#495e57");
})

test("guest input 11 entry", () => {
  render(
    <MemoryRouter><ReservationsPage /></MemoryRouter>
  );
  const guestSelector = screen.getByLabelText(/Number of guests/);
  fireEvent.change(guestSelector, { target: { value: 11 } });
  const btn = screen.getByText("Make your reservation");
  const data = localStorage.getItem("bookings");
  fireEvent.click(btn);
  const new_data = localStorage.getItem("bookings");
  expect(data == new_data);
  expect(btn.style.backgroundColor == "#495e57");
})

test("guest input 5 entry", () => {
  render(
    <MemoryRouter><ReservationsPage /></MemoryRouter>
  );
  const guestSelector = screen.getByLabelText(/Number of guests/);
  fireEvent.change(guestSelector, { target: { value: 5 } });
  const btn = screen.getByText("Make your reservation");
  const data = localStorage.getItem("bookings");
  fireEvent.click(btn);
  const new_data = localStorage.getItem("bookings");
  expect(data !== new_data);
  expect(btn.style.backgroundColor !== "#495e57");
})


test("guest input 11 entry", () => {
  render(
    <MemoryRouter><ReservationsPage /></MemoryRouter>
  );
  const guestSelector = screen.getByLabelText(/Number of guests/);
  fireEvent.change(guestSelector, { target: { value: 11 } });
  const btn = screen.getByText("Make your reservation");
  const data = localStorage.getItem("bookings");
  fireEvent.click(btn);
  const new_data = localStorage.getItem("bookings");
  expect(data == new_data);
  expect(btn.style.backgroundColor == "#495e57");
})

test("guest input null entry", () => {
  render(
    <MemoryRouter><ReservationsPage /></MemoryRouter>
  );
  const guestSelector = screen.getByLabelText(/Number of guests/);
  fireEvent.change(guestSelector, { target: { value: null } });
  const btn = screen.getByText("Make your reservation");
  const data = localStorage.getItem("bookings");
  fireEvent.click(btn);
  const new_data = localStorage.getItem("bookings");
  expect(data == new_data);
  expect(btn.style.backgroundColor == "#495e57");
})

test("date input null entry", () => {
  render(
    <MemoryRouter><ReservationsPage /></MemoryRouter>
  );
  let dateSelector = screen.getByLabelText(/Choose date/);
  fireEvent.change(dateSelector, { target: { value: null } });
  const btn = screen.getByText("Make your reservation");
  const data = localStorage.getItem("bookings");
  fireEvent.click(btn);
  const new_data = localStorage.getItem("bookings");
  expect(data == new_data);
  expect(btn.style.backgroundColor == "#495e57");
})