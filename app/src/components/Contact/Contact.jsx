import React, { useState } from 'react';
import { db } from '../../firebase'; // Firebase se db import karein
import { collection, addDoc } from 'firebase/firestore'; // Firestore functions import karein

function LetsConnect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Firestore mein data submit karein
        const docRef = await addDoc(collection(db, 'contacts'), {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          timestamp: new Date(),
        });
        console.log('Document written with ID: ', docRef.id);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Form clear karein
        setErrors({});
      } catch (error) {
        console.error('Error adding document: ', error);
        alert('An error occurred. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Form invalid hai, errors set karein
      setErrors(formErrors);
    }
  };

  return (
    <section id="contact" className="py-16 border-t border-[#444]">
      <div className="container mx-auto px-4">
        {/* Heading and Description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a question, want to collaborate, or just say hello? I'd love to hear from you! Drop me a message, and I'll get back to you soon.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-lg mx-auto">
          <div className="bg-[#2c2c2c] p-8 rounded-lg border border-transparent bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#1a1a1a] text-gray-300 rounded-lg focus:outline-none focus:ring-2 ${
                    errors.name ? 'focus:ring-red-500' : 'focus:ring-[#ff7e5f]'
                  }`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#1a1a1a] text-gray-300 rounded-lg focus:outline-none focus:ring-2 ${
                    errors.email ? 'focus:ring-red-500' : 'focus:ring-[#ff7e5f]'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#1a1a1a] text-gray-300 rounded-lg focus:outline-none focus:ring-2 ${
                    errors.message ? 'focus:ring-red-500' : 'focus:ring-[#ff7e5f]'
                  }`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-white rounded-lg font-semibold hover:from-[#ff6f4f] hover:to-[#fea46b] transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LetsConnect;