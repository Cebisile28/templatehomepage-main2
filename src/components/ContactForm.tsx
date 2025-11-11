import React, { useState, FormEvent } from 'react';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

type FormState = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);
  const [loading, setLoading] = useState(false);

  // 🔍 Validation logic
  const validate = (): Partial<FormState> => {
    const newErrors: Partial<FormState> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    else if (formData.name.length < 2) newErrors.name = 'Name is too short.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(formData.email)) newErrors.email = 'Email is invalid.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    else if (formData.message.length < 10) newErrors.message = 'Message is too short.';
    return newErrors;
  };

  // 🧭 Input change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined })); // Clear error when typing
  };

  // 🚀 Submit form
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmissionStatus(null);
    setLoading(true);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, 'messages'), {
        ...formData,
        created: Timestamp.now(),
      });
      setSubmissionStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Firestore error:', err);
      setSubmissionStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-live="polite"
      className="space-y-4 opacity-0 animate-[fadeIn_0.8s_ease-in-out_forwards]"
    >
      {/* Name Field */}
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

      {/* Email Field */}
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

      {/* Message Field */}
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

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 rounded-md transition-all duration-300 hover:scale-105 disabled:opacity-60"
        disabled={loading}
        aria-busy={loading}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      {/* Submission Status */}
      {submissionStatus === 'success' && (
        <p className="text-green-600 text-center mt-3 font-semibold animate-[fadeIn_0.8s_ease-in-out_forwards]" role="status">
          Message sent successfully!
        </p>
      )}
      {submissionStatus === 'error' && (
        <p className="text-red-600 text-center mt-3 font-semibold animate-[fadeIn_0.8s_ease-in-out_forwards]" role="alert">
          Failed to send message. Please try again.
        </p>
      )}
    </form>
  );
};

export default ContactForm;