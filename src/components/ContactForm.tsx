
import React, { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormState = {
  name: string;
  email: string;
  category: string;
  message: string;
};

type EmailJSError = {
  status?: number;
  text?: string;
  message?: string;
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    category: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);

  // VALIDATION
  const validate = (): Partial<FormState> => {
    const newErrors: Partial<FormState> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.category) {
      newErrors.category = "Please select a complaint or request type.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please explain your complaint or request.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide a little more detail.";
    }

    return newErrors;
  };

  // HANDLE INPUT CHANGES
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => {
      const updated = { ...previous };
      delete updated[name as keyof FormState];
      return updated;
    });
  };

  // SUBMIT COMPLAINT
  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      setLoading(true);

      const subject = `Boostify Support: ${formData.category}`;

      const response = await emailjs.send(
        "boostify_gmail",
        "template_3l3qhiv",
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          reply_to: formData.email.trim(),
          category: formData.category,
          subject: subject,
          message: formData.message.trim(),
        },
        "OuEw0aHOiznTCgF3v"
      );

      console.log("Boostify email sent successfully:", response);

      setFormData({
        name: "",
        email: "",
        category: "",
        message: "",
      });

      setErrors({});

      toast.success(
        "Your complaint or request has been sent successfully!",
        {
          position: "top-right",
          autoClose: 5000,
        }
      );

    } catch (error: unknown) {
      // SHOW THE ACTUAL EMAILJS ERROR FOR TROUBLESHOOTING
      const emailError = error as EmailJSError;

      console.error("================================");
      console.error("BOOSTIFY EMAILJS ERROR");
      console.error("Error status:", emailError?.status);
      console.error("Error message:", emailError?.text);
      console.error("Full error:", error);
      console.error("================================");

      const errorMessage =
        emailError?.text ||
        emailError?.message ||
        "Unknown EmailJS error";

      toast.error(
        `Email failed: ${errorMessage}`,
        {
          position: "top-right",
          autoClose: 8000,
        }
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-5 opacity-0 animate-[fadeIn_0.8s_ease-in-out_forwards]"
      >

        {/* FULL NAME */}
        <div>
          <label
            htmlFor="name"
            className="block font-semibold text-gray-700 dark:text-gray-200 mb-2"
          >
            Full Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            autoComplete="name"
            className={`w-full p-3 border rounded-md outline-none dark:bg-gray-600 dark:text-gray-100 ${
              errors.name ? "border-red-400" : "border-gray-300"
            }`}
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name}
            </p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <label
            htmlFor="email"
            className="block font-semibold text-gray-700 dark:text-gray-200 mb-2"
          >
            Email Address
          </label>

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            autoComplete="email"
            className={`w-full p-3 border rounded-md outline-none dark:bg-gray-600 dark:text-gray-100 ${
              errors.email ? "border-red-400" : "border-gray-300"
            }`}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email}
            </p>
          )}

          <p className="text-xs text-gray-500 mt-1">
            Please use an email address where we can contact you.
          </p>
        </div>

        {/* CATEGORY */}
        <div>
          <label
            htmlFor="category"
            className="block font-semibold text-gray-700 dark:text-gray-200 mb-2"
          >
            What would you like help with?
          </label>

          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md outline-none dark:bg-gray-600 dark:text-gray-100 ${
              errors.category ? "border-red-400" : "border-gray-300"
            }`}
          >
            <option value="">
              Select a complaint or request type
            </option>

            <option value="Formal Complaint">Formal Complaint</option>
            <option value="Order or Download Problem">Order or Download Problem</option>
            <option value="Payment Problem">Payment Problem</option>
            <option value="Refund Request">Refund Request</option>
            <option value="Seller Support">Seller Support</option>
            <option value="Account or Login Problem">Account or Login Problem</option>
            <option value="Product or Listing Problem">Product or Listing Problem</option>
            <option value="General Enquiry">General Enquiry</option>
            <option value="Feature Request or Suggestion">Feature Request or Suggestion</option>
            <option value="Other">Other</option>
          </select>

          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category}
            </p>
          )}
        </div>

        {/* MESSAGE */}
        <div>
          <label
            htmlFor="message"
            className="block font-semibold text-gray-700 dark:text-gray-200 mb-2"
          >
            Explain Your Complaint or Request
          </label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Please explain what happened, what problem you are experiencing, or what assistance you need..."
            className={`w-full p-3 border rounded-md h-36 resize-y outline-none dark:bg-gray-600 dark:text-gray-100 ${
              errors.message ? "border-red-400" : "border-gray-300"
            }`}
          />

          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message}
            </p>
          )}
        </div>

        {/* INFORMATION */}
        <div className="bg-amber-50 dark:bg-slate-800 border border-amber-100 dark:border-slate-700 rounded-xl p-4">
          <p className="text-sm text-slate-700 dark:text-slate-200 leading-6">
            <strong>What happens next?</strong>
            <br />
            Your complaint or request will be sent to Boostify Support.
            Please make sure your email address is correct so our team
            can respond to you.
          </p>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 rounded-md transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading
            ? "Sending your complaint..."
            : "Submit Complaint / Request"}
        </button>

        <p className="text-xs text-center text-gray-500">
          Your information is submitted to Boostify Support for assistance.
        </p>

      </form>

      <ToastContainer
        position="top-right"
        autoClose={5000}
      />
    </>
  );
};

export default ContactForm;







