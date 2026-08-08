import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

import {
  UserCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  BuildingStorefrontIcon,
  StarIcon,
  CubeIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";


type Profile = {
  full_name: string;
  avatar_url: string | null;
  email?: string;
  phone?: string;
  store_name?: string;
};



const SellerProfile: React.FC = () => {


  const [profile, setProfile] = useState<Profile | null>(null);

  const [editing, setEditing] = useState(false);


  const [formData, setFormData] = useState({

    full_name: "",

    phone: "",

    store_name: "Boostify Store",

  });



  useEffect(() => {


    const loadProfile = async () => {


      const {
        data: { user },
      } = await supabase.auth.getUser();



      if (!user) return;




      const { data } = await supabase

        .from("profiles")

        .select("*")

        .eq("id", user.id)

        .single();




      if (data) {


        const loadedProfile = {

          ...data,

          email: user.email,

        };



        setProfile(loadedProfile);



        setFormData({

          full_name: data.full_name ?? "",

          phone: data.phone ?? "",

          store_name: data.store_name ?? "Boostify Store",

        });


      }


    };



    loadProfile();



  }, []);





  const saveChanges = () => {


    setProfile({

      ...profile!,

      full_name: formData.full_name,

      phone: formData.phone,

      store_name: formData.store_name,

    });


    setEditing(false);


  };







  const stats = [

    {
      title: "Products",
      value: "0",
      icon: CubeIcon,
      color: "text-blue-500",
    },

    {
      title: "Orders",
      value: "0",
      icon: ShoppingBagIcon,
      color: "text-green-500",
    },

    {
      title: "Earnings",
      value: "R0",
      icon: CurrencyDollarIcon,
      color: "text-amber-500",
    },

  ];





  return (

    <div className="space-y-8">



      {/* PROFILE HEADER */}


      <section

        className="
          bg-gradient-to-r
          from-gray-900
          to-gray-800
          rounded-3xl
          p-8
          text-white
          shadow-xl
        "

      >


        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">



          <div className="flex items-center gap-6">


            {profile?.avatar_url ? (

              <img

                src={profile.avatar_url}

                className="
                  w-28
                  h-28
                  rounded-full
                  object-cover
                  border-4
                  border-amber-400
                "

              />

            ) : (

              <UserCircleIcon className="w-28 h-28 text-gray-400"/>

            )}



            <div>


              <h1 className="text-3xl font-bold">

                {profile?.full_name ?? "Seller"}

              </h1>


              <p className="text-gray-300 mt-2">

                Professional Boostify Seller

              </p>




              <div className="flex items-center gap-1 mt-3">


                {[1,2,3,4,5].map((star)=>(

                  <StarIcon

                    key={star}

                    className="
                      w-5
                      h-5
                      text-amber-400
                      fill-amber-400
                    "

                  />

                ))}



                <span className="ml-2 text-sm">

                  5.0 Seller Rating

                </span>


              </div>


            </div>


          </div>





          <button

            onClick={() => setEditing(!editing)}

            className="
              flex
              items-center
              gap-2
              bg-amber-400
              text-black
              px-5
              py-3
              rounded-xl
              font-semibold
              hover:bg-amber-500
              transition
            "

          >

            <PencilSquareIcon className="w-5 h-5"/>


            {editing ? "Cancel" : "Edit Profile"}


          </button>



        </div>



      </section>







      {/* STATS */}


      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">


        {stats.map((item)=>{


          const Icon=item.icon;


          return (

            <div

              key={item.title}

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

              <div className="flex justify-between items-center">


                <div>

                  <p className="text-gray-500 text-sm">

                    {item.title}

                  </p>


                  <h2 className="text-3xl font-bold mt-2">

                    {item.value}

                  </h2>


                </div>



                <Icon className={`w-10 h-10 ${item.color}`}/>


              </div>


            </div>

          );


        })}


      </section>









      {/* INFORMATION */}


      <section

        className="
          bg-white
          dark:bg-gray-900
          rounded-2xl
          shadow-lg
          border
          border-gray-200
          dark:border-gray-800
          p-8
        "

      >


        <h2 className="text-2xl font-bold mb-6">

          Seller Information

        </h2>




        <div className="grid md:grid-cols-2 gap-6">



          <div className="flex gap-4">

            <EnvelopeIcon className="w-6 h-6 text-amber-400"/>

            <div>

              <p className="text-gray-500 text-sm">
                Email
              </p>

              <p className="font-semibold">
                {profile?.email ?? "Not available"}
              </p>

            </div>

          </div>





          <div className="flex gap-4">

            <PhoneIcon className="w-6 h-6 text-amber-400"/>

            <div>

              <p className="text-gray-500 text-sm">
                Phone
              </p>

              <p className="font-semibold">
                {profile?.phone || "Not added"}
              </p>

            </div>

          </div>





          <div className="flex gap-4">

            <BuildingStorefrontIcon className="w-6 h-6 text-amber-400"/>

            <div>

              <p className="text-gray-500 text-sm">
                Store Name
              </p>

              <p className="font-semibold">
                {profile?.store_name || "Boostify Store"}
              </p>

            </div>

          </div>


        </div>







        {editing && (


          <div className="mt-8 space-y-5">


            <div>

              <label className="text-sm text-gray-500">
                Full Name
              </label>


              <input

                value={formData.full_name}

                onChange={(e)=>
                  setFormData({
                    ...formData,
                    full_name:e.target.value
                  })
                }

              />

            </div>





            <div>

              <label className="text-sm text-gray-500">
                Phone
              </label>


              <input

                value={formData.phone}

                onChange={(e)=>
                  setFormData({
                    ...formData,
                    phone:e.target.value
                  })
                }

              />

            </div>





            <div>

              <label className="text-sm text-gray-500">
                Store Name
              </label>


              <input

                value={formData.store_name}

                onChange={(e)=>
                  setFormData({
                    ...formData,
                    store_name:e.target.value
                  })
                }

              />

            </div>





            <button

              onClick={saveChanges}

              className="
                bg-green-500
                text-white
                px-6
                py-3
                rounded-xl
                font-semibold
                hover:bg-green-600
              "

            >

              Save Changes

            </button>



          </div>


        )}



      </section>




    </div>

  );

};


export default SellerProfile;