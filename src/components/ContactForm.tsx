import React, { useState, FormEvent } from 'react';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type FormState = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);

  const validate = (): Partial<FormState> => {
    const newErrors: Partial<FormState> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // remove the error key instead of setting it to undefined
    setErrors(prev => {
      const copy = { ...prev };
      if (name in copy) {
        delete copy[name as keyof FormState];
      }
      return copy;
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setLoading(false);
      return;
    }

    if (!db) {
      toast.error('Database not configured.');
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "messages"), {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        created: Timestamp.now(), // ✅ correct usage
      });

      setFormData({ name: '', email: '', message: '' });
      toast.success('Message sent successfully!', {
        position: "top-right",
        autoClose: 3000
      });
    } catch (err) {
      console.error('Firestore error:', err);
      toast.error('Failed to send message.', {
        position: "top-right",
        autoClose: 3000
      });
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = Boolean(
    formData.name.trim() && formData.email.trim() && formData.message.trim() && Object.keys(errors).length === 0
  );

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        aria-live="polite"
        className="space-y-4 opacity-0 animate-[fadeIn_0.8s_ease-in-out_forwards]"
      >
        <div className="transition-all duration-500 hover:scale-[1.01]">
          <label htmlFor="name" className="block font-semibold text-gray-700 dark:text-gray-200 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
            minLength={2}
            className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-amber-400 outline-none dark:bg-gray-600 dark:text-gray-100 ${
              errors.name ? 'border-red-400' : 'border-gray-300'
            }`}
            aria-invalid={!!errors.name}
            aria-describedby="name-error"
          />
          {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="transition-all duration-500 hover:scale-[1.01]">
          <label htmlFor="email" className="block font-semibold text-gray-700 dark:text-gray-200 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
            className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-amber-400 outline-none dark:bg-gray-600 dark:text-gray-100 ${
              errors.email ? 'border-red-400' : 'border-gray-300'
            }`}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />
          {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="transition-all duration-500 hover:scale-[1.01]">
          <label htmlFor="message" className="block font-semibold text-gray-700 dark:text-gray-200 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            minLength={10}
            className={`w-full p-3 border rounded-md h-32 resize-none focus:ring-2 focus:ring-amber-400 outline-none dark:bg-gray-600 dark:text-gray-100 ${
              errors.message ? 'border-red-400' : 'border-gray-300'
            }`}
            aria-invalid={!!errors.message}
            aria-describedby="message-error"
          />
          {errors.message && <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 rounded-md transition-all duration-300 hover:scale-105 disabled:opacity-60"
          disabled={loading || !isFormValid}
          aria-busy={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default ContactForm;



