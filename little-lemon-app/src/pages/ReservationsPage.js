import React, { useEffect, useReducer, useState } from 'react';
import Reservations from '../components/Reservations';
import { fetchAPI, submitAPI } from '../API';
import restaurant from "../img/restaurant.jpg"
import axios from 'axios';
import ConfirmedBooking from '../components/ConfirmedBooking';


export default function ReservationsPage() {

    const updateTimes = (availableTimes, date) => {
        const response = fetchAPI(new Date(date));
        return (response.length !== 0) ? response : availableTimes;
    };

    const initializeTimes = initialAvailableTimes => [...initialAvailableTimes, ...fetchAPI(new Date())];

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    const [isSubmitted, setIsSubmitted] = useState(false)

    const [confirmedBookings, setConfirmedBookings] = useState('')

    const SubmitForm = (formData) => {
        axios.post('https://littlelemonrestaurant-git-newbranch-mdogan89s-projects.vercel.app/booking/table/', formData).then(response => {
            console.log(response.status);
            const form = response.data;
            setConfirmedBookings(form);
            setIsSubmitted(true);
        }).catch(error => {
            console.log(error);
        });
    }



    useEffect(() => {
        // invalid url will trigger an 404 error
        axios.get(`https://littlelemonrestaurant-git-newbranch-mdogan89s-projects.vercel.app/restaurant/menu/`).then((response) => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    return (<main>
        <section id="res-header">
            <img src={restaurant} alt='our restaurant'></img>
            <h1>Book Now!</h1>
        </section>
        {!isSubmitted && <Reservations
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={SubmitForm}
        />}

        {isSubmitted && <ConfirmedBooking confirmedBookings={confirmedBookings}>
        </ConfirmedBooking>}
    </main>)
}