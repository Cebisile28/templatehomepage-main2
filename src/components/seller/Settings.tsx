import React, { useState } from "react";

const Settings: React.FC = () => {
  const [storeName, setStoreName] = useState("");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [autoPublish, setAutoPublish] = useState(false);

  const saveSettings = () => {
    alert("Seller settings saved successfully.");
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Seller Settings
        </h1>

        <p className="mt-3 text-gray-500 dark:text-gray-400">
          Manage your seller account, store preferences, and product settings.
        </p>
      </div>


      {/* STORE INFORMATION */}
      <section
        className="
          bg-white
          dark:bg-gray-900
          rounded-2xl
          shadow-lg
          border
          border-gray-200
          dark:border-gray-800
          p-6
        "
      >

        <h2 className="text-xl font-bold mb-5 text-gray-900 dark:text-white">
          Store Information
        </h2>


        <label className="block text-sm text-gray-500 mb-2">
          Store Name
        </label>

        <input
          type="text"
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
          placeholder="Enter store name"
          className="
            w-full
            rounded-lg
            bg-gray-100
            dark:bg-gray-800
            p-3
            outline-none
            text-gray-900
            dark:text-white
          "
        />

      </section>



      {/* PRODUCT SETTINGS */}
      <section
        className="
          bg-white
          dark:bg-gray-900
          rounded-2xl
          shadow-lg
          border
          border-gray-200
          dark:border-gray-800
          p-6
        "
      >

        <h2 className="text-xl font-bold mb-5 text-gray-900 dark:text-white">
          Product Settings
        </h2>


        <div className="flex justify-between items-center">

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Auto publish products
            </h3>

            <p className="text-sm text-gray-500">
              Automatically publish products after creation.
            </p>
          </div>


          <button
            onClick={() => setAutoPublish(!autoPublish)}
            className={`
              w-14
              h-7
              rounded-full
              ${
                autoPublish
                  ? "bg-amber-400"
                  : "bg-gray-500"
              }
            `}
          >

            <span
              className={`
                block
                w-6
                h-6
                bg-white
                rounded-full
                transition
                ${
                  autoPublish
                    ? "translate-x-7"
                    : "translate-x-1"
                }
              `}
            />

          </button>


        </div>


      </section>



      {/* NOTIFICATIONS */}
      <section
        className="
          bg-white
          dark:bg-gray-900
          rounded-2xl
          shadow-lg
          border
          border-gray-200
          dark:border-gray-800
          p-6
        "
      >

        <h2 className="text-xl font-bold mb-5 text-gray-900 dark:text-white">
          Notifications
        </h2>


        <div className="flex justify-between items-center">

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Email Notifications
            </h3>

            <p className="text-sm text-gray-500">
              Receive updates about sales and account activity.
            </p>
          </div>


          <button
            onClick={() =>
              setEmailNotifications(!emailNotifications)
            }
            className={`
              w-14
              h-7
              rounded-full
              ${
                emailNotifications
                  ? "bg-amber-400"
                  : "bg-gray-500"
              }
            `}
          >

            <span
              className={`
                block
                w-6
                h-6
                bg-white
                rounded-full
                transition
                ${
                  emailNotifications
                    ? "translate-x-7"
                    : "translate-x-1"
                }
              `}
            />

          </button>


        </div>


      </section>



      {/* SAVE */}
      <button
        onClick={saveSettings}
        className="
          bg-amber-400
          hover:bg-amber-300
          text-black
          font-bold
          px-8
          py-3
          rounded-xl
        "
      >
        Save Settings
      </button>


    </div>
  );
};

export default Settings;