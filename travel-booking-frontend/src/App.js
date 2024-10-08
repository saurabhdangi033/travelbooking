import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://travelbookingbackend-j6o4.onrender.com/api/graphql',  // Use the Vercel deployed backend URL
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<BookingForm />} />
          <Route path="/view-bookings" element={<BookingList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
