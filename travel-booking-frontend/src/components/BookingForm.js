import React, { useState } from 'react';
import './styles/BookingForm.css';
import { gql, useMutation } from '@apollo/client';

const ADD_BOOKING = gql`
  mutation AddBooking(
    $title: String!,
    $firstName: String!,
    $lastName: String!,
    $birthDate: String,
    $organisation: String,
    $email: String!,
    $phone: String!,
    $departure: String!,
    $destination: String!,
    $departureDate: String!,
    $departureTime: String!,
    $classOfService: String!,
    $preferredHotel: String,
    $preferredAirlines: String,
    $additionalInfo: String
  ) {
    addBooking(
      title: $title,
      firstName: $firstName,
      lastName: $lastName,
      birthDate: $birthDate,
      organisation: $organisation,
      email: $email,
      phone: $phone,
      departure: $departure,
      destination: $destination,
      departureDate: $departureDate,
      departureTime: $departureTime,
      classOfService: $classOfService,
      preferredHotel: $preferredHotel,
      preferredAirlines: $preferredAirlines,
      additionalInfo: $additionalInfo
    ) {
      id
    }
  }
`;

function BookingForm() {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    organisation: '',
    email: '',
    phone: '',
    departure: '',
    destination: '',
    departureDate: '',
    departureTime: '',
    classOfService: 'economy',
    preferredHotel: '',
    preferredAirlines: '',
    additionalInfo: ''
  });

  const [addBooking] = useMutation(ADD_BOOKING);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooking({ variables: formData });
    alert('Booking added successfully');
    setFormData({
      title: '',
      firstName: '',
      lastName: '',
      birthDate: '',
      organisation: '',
      email: '',
      phone: '',
      departure: '',
      destination: '',
      departureDate: '',
      departureTime: '',
      classOfService: 'economy',
      preferredHotel: '',
      preferredAirlines: '',
      additionalInfo: ''
    });
  };

  return (
    <div className="booking-card">
      <img src="travel.jpg" alt="Travel" className="booking-image" />
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Travel Booking Form</h2>
      <div className="form-group">
        <label>Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>First Name</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Birth Date</label>
        <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Organisation</label>
        <input type="text" name="organisation" value={formData.organisation} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Departure</label>
        <input type="text" name="departure" value={formData.departure} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Destination</label>
        <input type="text" name="destination" value={formData.destination} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Departure Date</label>
        <input type="date" name="departureDate" value={formData.departureDate} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Departure Time</label>
        <input type="time" name="departureTime" value={formData.departureTime} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Class of Service</label>
        <select name="classOfService" value={formData.classOfService} onChange={handleChange} required>
          <option value="economy">Economy</option>
          <option value="business">Business</option>
          <option value="first class">First Class</option>
        </select>
      </div>
      <div className="form-group">
        <label>Preferred Hotel</label>
        <input type="text" name="preferredHotel" value={formData.preferredHotel} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Preferred Airlines</label>
        <input type="text" name="preferredAirlines" value={formData.preferredAirlines} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Additional Info</label>
        <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange}></textarea>
      </div>
      <button type="submit">Submit Booking</button>
    </form>
    </div>
  );
}

export default BookingForm;
