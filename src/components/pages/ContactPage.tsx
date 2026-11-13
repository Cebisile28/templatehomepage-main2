
import React from "react";
import ContactForm from "../ContactForm";
import { Helmet } from "react-helmet";
import {
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Boostify Marketplace</title>
        <meta
          name="description"
          content="Contact Boostify for buyer and seller assistance, complaints, payment enquiries, order problems and general requests."
        />
        <meta name="theme-color" content="#0284c7" />
      </Helmet>

      <main className="min-h-screen w-full bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

        {/* PAGE INTRODUCTION */}
        <section className="border-b border-sky-100 bg-sky-50 px-5 py-14 dark:border-slate-800 dark:bg-slate-900 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-7xl">

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600 text-white shadow-sm">
                <ChatBubbleLeftRightIcon className="h-6 w-6" />
              </div>

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-400">
                Boostify Customer Support
              </p>
            </div>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
              Contact Boostify
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              Need assistance with an order, payment, seller account or another
              marketplace issue? Send us a message and our team will assist you.
            </p>

          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto grid max-w-7xl items-start gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1.4fr_0.8fr] lg:py-16">

          {/* CONTACT FORM */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

            <div className="border-b border-slate-200 px-6 py-6 dark:border-slate-800 sm:px-8">

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                  <ChatBubbleLeftRightIcon className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    Send Us a Message
                  </h2>

                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Tell us how we can help you.
                  </p>
                </div>
              </div>

            </div>

            <div className="p-6 sm:p-8">

              <div className="mb-7 h-1.5 w-16 rounded-full bg-sky-500" />

              <p className="mb-7 text-sm leading-7 text-slate-600 dark:text-slate-300">
                This form is available to both buyers and sellers. You can use
                it to submit complaints, report problems, request assistance,
                ask questions or share feedback about Boostify.
              </p>

              <ContactForm />

              <p className="mt-6 text-center text-xs leading-6 text-slate-500 dark:text-slate-400">
                Please provide accurate information so we can understand your
                request and respond appropriately.
              </p>

            </div>
          </div>

          {/* CONTACT INFORMATION */}
          <aside className="space-y-6">

            {/* DIRECT CONTACT */}
            <div className="overflow-hidden rounded-3xl bg-sky-600 p-6 text-white shadow-lg shadow-sky-900/10 sm:p-7">

              <h2 className="text-xl font-extrabold">
                Contact Us Directly
              </h2>

              <p className="mt-2 text-sm leading-6 text-sky-100">
                You can also reach the Boostify team using the contact details
                below.
              </p>

              <div className="mt-7 space-y-4">

                <a
                  href="mailto:boostifymarketplace@gmail.com"
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 text-slate-900 transition hover:bg-sky-50"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                    <EnvelopeIcon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Email Address
                    </p>

                    <p className="mt-1 break-all text-sm font-bold">
                      boostifymarketplace@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+27682531912"
                  className="flex items-center gap-3 rounded-2xl border border-white/20 bg-sky-700 p-4 text-white transition hover:bg-sky-800"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
                    <PhoneIcon className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-sky-100">
                      Phone / WhatsApp
                    </p>

                    <p className="mt-1 text-sm font-bold">
                      +27 68 253 1912
                    </p>
                  </div>
                </a>

              </div>
            </div>

            {/* SUPPORT DETAILS */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-7">

              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                Support Information
              </h3>

              <div className="mt-6 space-y-6">

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                    <MapPinIcon className="h-5 w-5" />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      Location
                    </h4>

                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      Durban, South Africa
                    </p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                      Operating online nationwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                    <ClockIcon className="h-5 w-5" />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      Support Hours
                    </h4>

                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      Monday – Saturday: 9am – 8pm SAST
                    </p>

                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                      Sunday: Email enquiries only.
                    </p>
                  </div>
                </div>

              </div>

              <div className="mt-7 rounded-2xl bg-sky-50 p-4 dark:bg-sky-950/40">
                <p className="text-sm font-semibold text-sky-800 dark:text-sky-300">
                  We're here to help.
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  We aim to respond to enquiries as soon as possible.
                </p>
              </div>

            </div>
          </aside>

        </section>

      </main>
    </>
  );
};

export default ContactPage;





