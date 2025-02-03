    // src/components/Contact.js
    import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import supabase from '../config/SupabaseClient';

    const Contact = () => {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
      const [status, setStatus] = useState('');

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.id]: e.target.value
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        
        try {
          const { error } = await supabase
            .from('messages')
            .insert([formData]);

          if (error) throw error;

          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setStatus(''), 3000);
        } catch (error) {
          console.error('Error:', error);
          setStatus('error');
          setTimeout(() => setStatus(''), 3000);
        }
      };

      return (
        <motion.section 
          className="py-12 bg-gray-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold mb-8 text-center text-gray-800"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
            >
              Get In Touch
            </motion.h2>
            <form className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 h-32 resize-none"
                  id="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ${
                    status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  type="submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {status === 'success' && (
                <motion.p 
                  className="mt-4 text-green-600 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Message sent successfully!
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p 
                  className="mt-4 text-red-600 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </form>
          </div>
        </motion.section>
      );
    };

    export default Contact;