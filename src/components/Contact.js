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
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [errorMessage, setErrorMessage] = useState('');

      const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      };

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.id]: e.target.value
        });
        // Clear error message when user starts typing
        setErrorMessage('');
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('sending');
        
        // Validate form data
        if (!formData.name.trim()) {
          setErrorMessage('Please enter your name');
          setStatus('error');
          setIsSubmitting(false);
          return;
        }

        if (!validateEmail(formData.email)) {
          setErrorMessage('Please enter a valid email address');
          setStatus('error');
          setIsSubmitting(false);
          return;
        }

        if (!formData.message.trim()) {
          setErrorMessage('Please enter your message');
          setStatus('error');
          setIsSubmitting(false);
          return;
        }

        try {
          // Store message in Supabase
          const { error } = await supabase
            .from('contact_messages')
            .insert([
              {
                name: formData.name.trim(),
                email: formData.email.trim(),
                message: formData.message.trim(),
                created_at: new Date().toISOString()
              }
            ]);

          if (error) throw error;

          setStatus('success');
          // Clear form after successful submission
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        } catch (error) {
          console.error('Error submitting form:', error);
          setErrorMessage('Failed to send message. Please try again later.');
          setStatus('error');
        } finally {
          setIsSubmitting(false);
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
                  disabled={isSubmitting}
                  minLength={2}
                  maxLength={50}
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
                  disabled={isSubmitting}
                  maxLength={100}
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
                  disabled={isSubmitting}
                  minLength={10}
                  maxLength={1000}
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {status === 'sending' ? (
                    <div className="flex items-center justify-center">
                      <span className="mr-2">Sending</span>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        ⟳
                      </motion.span>
                    </div>
                  ) : 'Send Message'}
                </button>
              </div>
              {status === 'success' && (
                <motion.p 
                  className="mt-4 text-green-600 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Message sent successfully! We'll get back to you soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p 
                  className="mt-4 text-red-600 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {errorMessage || 'Failed to send message. Please try again.'}
                </motion.p>
              )}
            </form>
          </div>
        </motion.section>
      );
    };

    export default Contact;