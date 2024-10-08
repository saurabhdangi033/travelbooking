import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://travelbooking-gamma.vercel.app/api/graphql',  // Use the Vercel deployed backend URL
  cache: new InMemoryCache(),
});




function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<BookingForm />} />
          <Route path="/view-bookings" element={<BookingList />} />
        </Routes>
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
