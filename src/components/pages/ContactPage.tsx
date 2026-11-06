
import React from "react";
import ContactForm from "../ContactForm";
import { Helmet } from "react-helmet";
import {
  EnvelopeIcon,
  PhoneIcon,
  ShoppingBagIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  ExclamationCircleIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const ContactPage: React.FC = () => {
  const helpOptions = [
    {
      icon: ShoppingBagIcon,
      title: "Order Complaints",
      desc: "Missing downloads, incorrect files or purchase problems.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: CreditCardIcon,
      title: "Payments & Refunds",
      desc: "Report payment problems or request a refund.",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: ShieldCheckIcon,
      title: "Seller Complaints",
      desc: "Report payout, listing or seller account problems.",
      color: "bg-amber-100 text-amber-700",
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "General Requests",
      desc: "Ask questions, share suggestions or request assistance.",
      color: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Complaints & Support | Boostify Marketplace</title>
        <meta
          name="description"
          content="Submit complaints, report problems, request refunds or ask for assistance with your Boostify buyer or seller account."
        />
        <meta name="theme-color" content="#f5b900" />
      </Helmet>

      <main className="min-h-screen w-full bg-[#fdfcf8] dark:bg-slate-950 text-slate-900 dark:text-white">

        {/* TOP BAR */}
        <div className="bg-slate-950 text-white text-[12px] hidden md:block">
          <div className="mx-auto max-w-[1200px] px-4 h-9 flex items-center justify-between">
            <span className="opacity-70">
              Boostify Customer & Seller Support
            </span>

            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Contact our support team
            </span>
          </div>
        </div>

        {/* HEADER */}
        <div className="bg-white dark:bg-slate-900 border-b border-amber-100 dark:border-slate-800">
          <div className="mx-auto max-w-[1200px] px-4 py-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black tracking-tight flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 grid place-items-center text-slate-950">
                  💬
                </span>
                Complaints & Support
              </h1>

              <p className="text-sm text-slate-500 mt-1">
                Have a problem, complaint or request? We are here to help.
              </p>
            </div>

            <Link
              to="/marketplace"
              className="hidden sm:inline-flex text-sm font-bold bg-amber-100 dark:bg-amber-400/20 text-amber-800 dark:text-amber-300 px-4 py-2 rounded-full"
            >
              ← Back to Marketplace
            </Link>
          </div>
        </div>

        {/* INTRODUCTION */}
        <section className="mx-auto max-w-[1200px] px-4 pt-8 pb-3">
          <div className="bg-amber-50 dark:bg-slate-900 border border-amber-200 dark:border-slate-800 rounded-[1.5rem] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-amber-400 text-slate-950 grid place-items-center">
                <ExclamationCircleIcon className="w-7 h-7" />
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-black">
                  What is this page for?
                </h2>

                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-6">
                  This is Boostify's official contact and complaints page.
                  Both buyers and sellers can use it to report problems,
                  submit complaints, request assistance, ask questions or
                  share feedback about their experience on our marketplace.
                </p>

                <p className="text-sm font-bold text-slate-800 dark:text-white mt-3">
                  If something has gone wrong or you need help with anything
                  related to Boostify, please tell us here.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TYPES OF COMPLAINTS AND REQUESTS */}
        <section className="mx-auto max-w-[1200px] px-4 py-6">
          <div className="mb-4">
            <h2 className="font-black text-lg">
              What can you contact us about?
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Select the type of issue or request you need help with.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {helpOptions.map((item) => (
              <div
                key={item.title}
                className="text-left bg-white dark:bg-slate-900 border border-amber-100 dark:border-slate-800 rounded-2xl p-4 hover:border-amber-400 hover:shadow-lg transition group"
              >
                <div
                  className={`w-10 h-10 rounded-xl grid place-items-center ${item.color} group-hover:scale-105 transition`}
                >
                  <item.icon className="w-5 h-5" />
                </div>

                <div className="mt-3 font-black text-sm">
                  {item.title}
                </div>

                <div className="text-xs text-slate-500 mt-1 leading-5">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-[1200px] px-4 pb-16 grid lg:grid-cols-[1.1fr_0.7fr] gap-6 items-start">

          {/* LEFT: COMPLAINT AND REQUEST FORM */}
          <div className="bg-white dark:bg-slate-900 rounded-[1.8rem] border border-amber-100 dark:border-slate-800 shadow-sm overflow-hidden">

            <div className="p-6 sm:p-8 border-b border-amber-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-amber-100 dark:bg-amber-400/20 text-amber-700 dark:text-amber-300 grid place-items-center">
                  <DocumentTextIcon className="w-6 h-6" />
                </div>

                <div>
                  <h2 className="font-black text-lg">
                    Submit a Complaint or Request
                  </h2>

                  <p className="text-sm text-slate-500 mt-1">
                    Tell us what happened and how we can assist you.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500" />

              <div className="mb-6 space-y-3">
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-6">
                  Use the form below to send a message directly to Boostify
                  support. You can use it to:
                </p>

                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex gap-2">
                    <span className="text-amber-500 font-black">✓</span>
                    Make a formal complaint about a problem or experience.
                  </li>

                  <li className="flex gap-2">
                    <span className="text-amber-500 font-black">✓</span>
                    Report a problem with an order, payment or account.
                  </li>

                  <li className="flex gap-2">
                    <span className="text-amber-500 font-black">✓</span>
                    Request a refund or assistance from our support team.
                  </li>

                  <li className="flex gap-2">
                    <span className="text-amber-500 font-black">✓</span>
                    Ask questions or suggest improvements to Boostify.
                  </li>
                </ul>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-6">
                  Please explain your issue clearly and include any relevant
                  order details so our team can better understand your request.
                </p>
              </div>

              <ContactForm />

              <p className="mt-4 text-[11px] text-slate-400 text-center leading-5">
                Please provide accurate information. Your details will be used
                to help us respond to your complaint or request. See our Terms
                and Privacy Policy for more information.
              </p>
            </div>
          </div>

          {/* RIGHT: CONTACT INFORMATION */}
          <div className="space-y-4">

            {/* DIRECT CONTACT */}
            <div className="bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 rounded-[1.8rem] p-6 text-slate-950 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>

              <div className="relative">
                <h3 className="font-black text-lg">
                  Contact Boostify Directly
                </h3>

                <p className="text-xs mt-2 opacity-80 leading-5">
                  Prefer to contact us directly? You can reach us using the
                  details below.
                </p>

                <div className="mt-5 space-y-3">
                  <a
                    href="mailto:boostifymarketplace@gmail.com"
                    className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 hover:shadow transition"
                  >
                    <div className="w-9 h-9 rounded-full bg-amber-100 grid place-items-center">
                      <EnvelopeIcon className="w-5 h-5 text-amber-700" />
                    </div>

                    <div className="text-left">
                      <div className="text-[11px] font-black uppercase tracking-widest opacity-60">
                        Email
                      </div>

                      <div className="text-sm font-bold break-all">
                        boostifymarketplace@gmail.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+27682531912"
                    className="flex items-center gap-3 bg-slate-950 text-white rounded-xl px-4 py-3 hover:bg-black transition"
                  >
                    <div className="w-9 h-9 rounded-full bg-white/10 grid place-items-center">
                      <PhoneIcon className="w-5 h-5" />
                    </div>

                    <div className="text-left">
                      <div className="text-[11px] font-black uppercase tracking-widest opacity-60">
                        Phone / WhatsApp
                      </div>

                      <div className="text-sm font-bold">
                        +27 68 253 1912
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* OFFICE AND HOURS */}
            <div className="bg-white dark:bg-slate-900 rounded-[1.8rem] border border-amber-100 dark:border-slate-800 p-6">
              <h4 className="font-black text-sm">
                Our Support Information
              </h4>

              <div className="mt-4 space-y-3 text-sm">
                <div className="flex gap-3">
                  <span className="text-amber-500">📍</span>

                  <span>
                    <b>Durban, South Africa</b>
                    <br />
                    <span className="text-xs text-slate-500">
                      We operate online nationwide.
                    </span>
                  </span>
                </div>

                <div className="flex gap-3">
                  <span className="text-amber-500">⏰</span>

                  <span>
                    <b>Mon - Sat: 9am - 8pm SAST</b>
                    <br />
                    <span className="text-xs text-slate-500">
                      Sunday: Email only.
                    </span>
                  </span>
                </div>

                <div className="flex gap-3">
                  <span className="text-amber-500">⚡</span>

                  <span>
                    <b>Support response time</b>
                    <br />
                    <span className="text-xs text-slate-500">
                      We aim to respond as soon as possible.
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white dark:bg-slate-900 rounded-[1.8rem] border border-amber-100 dark:border-slate-800 p-6">
              <h4 className="font-black text-sm">
                Frequently Asked Questions
              </h4>

              <p className="text-xs text-slate-500 mt-1">
                Here are some common issues and where to get help.
              </p>

              <div className="mt-4 space-y-3 text-sm">

                <details className="group">
                  <summary className="font-bold cursor-pointer list-none flex justify-between">
                    Can't download my file?
                    <span className="text-amber-500 group-open:rotate-180 transition">
                      ▼
                    </span>
                  </summary>

                  <p className="text-xs text-slate-500 mt-2 leading-5">
                    Go to My Orders and click Download. If the problem
                    continues, submit a complaint using the form above.
                  </p>
                </details>

                <div className="h-px bg-amber-50 dark:bg-slate-800"></div>

                <details className="group">
                  <summary className="font-bold cursor-pointer list-none flex justify-between">
                    How do I request a refund?
                    <span className="text-amber-500 group-open:rotate-180 transition">
                      ▼
                    </span>
                  </summary>

                  <p className="text-xs text-slate-500 mt-2 leading-5">
                    Submit a refund request using the form above. Explain
                    what happened and include your order details. Our team
                    will review your request according to the applicable
                    refund policy.
                  </p>
                </details>

                <div className="h-px bg-amber-50 dark:bg-slate-800"></div>

                <details className="group">
                  <summary className="font-bold cursor-pointer list-none flex justify-between">
                    I am a seller and have a problem.
                    <span className="text-amber-500 group-open:rotate-180 transition">
                      ▼
                    </span>
                  </summary>

                  <p className="text-xs text-slate-500 mt-2 leading-5">
                    Sellers can use this page to report payout problems,
                    listing issues, account difficulties or other concerns
                    about selling on Boostify.
                  </p>
                </details>

                <div className="h-px bg-amber-50 dark:bg-slate-800"></div>

                <details className="group">
                  <summary className="font-bold cursor-pointer list-none flex justify-between">
                    Can I make a formal complaint?
                    <span className="text-amber-500 group-open:rotate-180 transition">
                      ▼
                    </span>
                  </summary>

                  <p className="text-xs text-slate-500 mt-2 leading-5">
                    Yes. Buyers and sellers can use the form above to submit
                    formal complaints about their experience, a transaction,
                    another marketplace issue or the service they received.
                  </p>
                </details>

              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;



