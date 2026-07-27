import React, { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


type FormState = {
  name: string;
  email: string;
  message: string;
};


const ContactForm: React.FC = () => {


  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });


  const [errors, setErrors] = useState<Partial<FormState>>({});


  const [loading, setLoading] = useState(false);



  const validate = (): Partial<FormState> => {

    const newErrors: Partial<FormState> = {};


    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }


    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }


    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }


    return newErrors;

  };





  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    const { name, value } = e.target;


    setFormData(previous => ({
      ...previous,
      [name]: value,
    }));


    setErrors(previous => {

      const copy = {
        ...previous
      };


      delete copy[name as keyof FormState];


      return copy;

    });

  };








  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {


    e.preventDefault();


    const validationErrors = validate();


    setErrors(validationErrors);



    if(Object.keys(validationErrors).length > 0){
      return;
    }



    try {


      setLoading(true);



      await emailjs.send(

        "boostify_gmail",

        "template_3l3qhiv",

        {

          name: formData.name,

          email: formData.email,

          message: formData.message,

        },

        "OuEwOaHOiznTCgF3v"

      );





      setFormData({

        name: "",

        email: "",

        message: "",

      });





      toast.success(
        "Message sent successfully!",
        {
          position:"top-right",
          autoClose:3000,
        }
      );



    }
    catch(error){


      console.error(
        "EmailJS error:",
        error
      );


      toast.error(
        "Failed to send message.",
        {
          position:"top-right",
          autoClose:3000,
        }
      );


    }
    finally{

      setLoading(false);

    }


  };






  const isFormValid =
    Boolean(
      formData.name.trim() &&
      formData.email.trim() &&
      formData.message.trim() &&
      Object.keys(errors).length === 0
    );







  return (

    <>

      <form

        onSubmit={handleSubmit}

        noValidate

        className="
          space-y-4
          opacity-0
          animate-[fadeIn_0.8s_ease-in-out_forwards]
        "

      >



        <div>

          <label
            htmlFor="name"
            className="
              block
              font-semibold
              text-gray-700
              dark:text-gray-200
              mb-1
            "
          >
            Name
          </label>


          <input

            type="text"

            id="name"

            name="name"

            value={formData.name}

            onChange={handleChange}

            className={`
              w-full
              p-3
              border
              rounded-md
              outline-none
              dark:bg-gray-600
              dark:text-gray-100
              ${
                errors.name
                ? "border-red-400"
                : "border-gray-300"
              }
            `}

          />


          {
            errors.name &&
            <p className="text-red-500 text-sm">
              {errors.name}
            </p>
          }


        </div>







        <div>

          <label
            htmlFor="email"
            className="
              block
              font-semibold
              text-gray-700
              dark:text-gray-200
              mb-1
            "
          >
            Email
          </label>


          <input

            type="email"

            id="email"

            name="email"

            value={formData.email}

            onChange={handleChange}

            className={`
              w-full
              p-3
              border
              rounded-md
              outline-none
              dark:bg-gray-600
              dark:text-gray-100
              ${
                errors.email
                ? "border-red-400"
                : "border-gray-300"
              }
            `}

          />


          {
            errors.email &&
            <p className="text-red-500 text-sm">
              {errors.email}
            </p>
          }


        </div>







        <div>

          <label
            htmlFor="message"
            className="
              block
              font-semibold
              text-gray-700
              dark:text-gray-200
              mb-1
            "
          >
            Message
          </label>


          <textarea

            id="message"

            name="message"

            value={formData.message}

            onChange={handleChange}

            className={`
              w-full
              p-3
              border
              rounded-md
              h-32
              resize-none
              outline-none
              dark:bg-gray-600
              dark:text-gray-100
              ${
                errors.message
                ? "border-red-400"
                : "border-gray-300"
              }
            `}

          />


          {
            errors.message &&
            <p className="text-red-500 text-sm">
              {errors.message}
            </p>
          }


        </div>







        <button

          type="submit"

          disabled={
            loading ||
            !isFormValid
          }

          className="
            w-full
            bg-amber-400
            hover:bg-amber-500
            text-black
            font-bold
            py-3
            rounded-md
            transition-all
            duration-300
            disabled:opacity-60
          "

        >

          {
            loading
            ? "Sending..."
            : "Send Message"
          }


        </button>



      </form>



      <ToastContainer
        position="top-right"
        autoClose={3000}
      />

    </>

  );

};


export default ContactForm;



