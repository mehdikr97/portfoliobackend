import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Gestion du changement des inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('❌ All fields are required');
      setSuccess(null);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8999/api/msgs', formData);

      if (response.status === 201) {
        setSuccess('✔️ Message sent successfully!');
        setError(null);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('❌ Error submitting form:', error);
      setError('❌ Failed to send message. Please try again.');
      setSuccess(null);
    }
  };

  return (
    <div className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-4'>Submit the form below or shoot me an email</p>
        </div>
        
        <input
          className='bg-[#ccd6f6] p-2'
          type='text'
          placeholder='Name'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          className='bg-[#ccd6f6] p-2'
          type='email'
          placeholder='Email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          className='bg-[#ccd6f6] p-2 my-4'
          name='message'
          rows='10'
          placeholder='Message'
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        {/* Messages d'erreur et de succès */}
        {error && <p className='text-red-500'>{error}</p>}
        {success && <p className='text-green-500'>{success}</p>}

        <button type='submit' className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
