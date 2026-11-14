
import React, { useState } from "react";

const Settings: React.FC = () => {
  const [storeName, setStoreName] = useState("");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [autoPublish, setAutoPublish] = useState(false);
  const [savedMessage, setSavedMessage] = useState("");

  const saveSettings = () => {
    setSavedMessage("Seller settings saved successfully.");
  };

  const toggleClass = (enabled: boolean) =>
    `relative inline-flex h-7 w-14 shrink-0 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900 ${
      enabled ? "bg-sky-500" : "bg-slate-300 dark:bg-slate-600"
    }`;

  const switchKnobClass = (enabled: boolean) =>
    `inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform duration-200 ${
      enabled ? "translate-x-8" : "translate-x-1"
    }`;

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Seller Settings
        </h1>

        <p className="mt-3 text-slate-500 dark:text-slate-400">
          Manage your seller account, store preferences, and product settings.
        </p>
      </div>

      {/* SUCCESS MESSAGE */}
      {savedMessage && (
        <div
          role="status"
          className="rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm font-medium text-sky-700 dark:border-sky-900 dark:bg-sky-950/40 dark:text-sky-300"
        >
          {savedMessage}
        </div>
      )}

      {/* STORE INFORMATION */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-5">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Store Information
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Set the name customers will see when visiting your store.
          </p>
        </div>

        <label
          htmlFor="storeName"
          className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          Store Name
        </label>

        <input
          id="storeName"
          type="text"
          value={storeName}
          onChange={(e) => {
            setStoreName(e.target.value);
            setSavedMessage("");
          }}
          placeholder="Enter store name"
          className="
            w-full rounded-xl border border-slate-200
            bg-white p-3 text-slate-900 outline-none
            transition placeholder:text-slate-400
            focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20
            dark:border-slate-700 dark:bg-slate-800
            dark:text-white dark:placeholder:text-slate-500
          "
        />
      </section>

      {/* PRODUCT SETTINGS */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-5 text-xl font-bold text-slate-900 dark:text-white">
          Product Settings
        </h2>

        <div className="flex items-center justify-between gap-5">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Auto publish products
            </h3>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Automatically publish products after creation.
            </p>
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={autoPublish}
            aria-label="Auto publish products"
            onClick={() => {
              setAutoPublish(!autoPublish);
              setSavedMessage("");
            }}
            className={toggleClass(autoPublish)}
          >
            <span className={switchKnobClass(autoPublish)} />
          </button>
        </div>
      </section>

      {/* NOTIFICATIONS */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-5 text-xl font-bold text-slate-900 dark:text-white">
          Notifications
        </h2>

        <div className="flex items-center justify-between gap-5">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Email Notifications
            </h3>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Receive updates about sales and account activity.
            </p>
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={emailNotifications}
            aria-label="Email notifications"
            onClick={() => {
              setEmailNotifications(!emailNotifications);
              setSavedMessage("");
            }}
            className={toggleClass(emailNotifications)}
          >
            <span className={switchKnobClass(emailNotifications)} />
          </button>
        </div>
      </section>

      {/* SAVE SETTINGS */}
      <button
        type="button"
        onClick={saveSettings}
        className="
          rounded-xl bg-sky-500 px-8 py-3
          font-bold text-white shadow-sm
          transition hover:bg-sky-600 hover:shadow-md
          focus:outline-none focus:ring-2 focus:ring-sky-400
          focus:ring-offset-2 dark:focus:ring-offset-slate-950
        "
      >
        Save Settings
      </button>
    </div>
  );
};

export default Settings;
