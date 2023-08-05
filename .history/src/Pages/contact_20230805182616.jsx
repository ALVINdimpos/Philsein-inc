import { useState } from 'react';
import axios from 'axios';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Footer from '../Layouts/Footer/index';
import HEADER from '../Layouts/Header/index';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/contact', formData);
      console.log('API Response:', response.data);
      // You can handle the API response here
    } catch (error) {
      console.error('Error:', error);
      // Handle errors here if any
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <HEADER />
      <div className="bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-600 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl w-full flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 pr-0 sm:pr-4 mb-6 sm:mb-0">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Address</h2>
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-purple-600" />
                4599 Boulevard Samson, Laval, QC H7W 2G5, Canada
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Phone</h2>
              <p className="flex items-center">
                <FaPhone className="mr-2 text-purple-600" />
                +1 123-456-7890
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Email</h2>
              <p className="flex items-center">
                <FaEnvelope className="mr-2 text-purple-600" />
                info@example.com
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 pl-0 sm:pl-4">
            <form className="max-w-md" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block font-semibold mb-1">
                Prénom *
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="block font-semibold mb-1">
                  Nom *
                </label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-semibold mb-1">
                  Courrie *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block font-semibold mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="form-textarea w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-submit w-full py-2 rounded-lg text-white font-bold bg-gradient-to-r from-cyan-600 to-bl-700 hover:opacity-90 transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
