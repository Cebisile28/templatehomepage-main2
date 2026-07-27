import React from "react";

const Reviews: React.FC = () => {

  const reviews = [
    {
      id: 1,
      customer: "Example Customer",
      product: "Digital Product",
      rating: 5,
      comment: "Great product!",
      date: "Today",
    },
  ];


  return (

    <div className="space-y-8">


      {/* HEADER */}

      <div>

        <h1 className="
          text-3xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Reviews
        </h1>


        <p className="
          mt-3
          text-gray-500
          dark:text-gray-400
        ">
          Manage customer feedback and product ratings.
        </p>


      </div>







      {/* REVIEW SUMMARY */}


      <div className="grid md:grid-cols-4 gap-6">



        <div className="
          bg-white
          dark:bg-gray-900
          rounded-xl
          shadow
          border
          dark:border-gray-800
          p-6
        ">

          <p className="text-sm text-gray-500">
            Average Rating
          </p>


          <h2 className="
            text-3xl
            font-bold
            mt-2
            text-amber-400
          ">
            ⭐ 0.0
          </h2>


        </div>






        <div className="
          bg-white
          dark:bg-gray-900
          rounded-xl
          shadow
          border
          dark:border-gray-800
          p-6
        ">


          <p className="text-sm text-gray-500">
            Total Reviews
          </p>


          <h2 className="
            text-3xl
            font-bold
            mt-2
            text-gray-900
            dark:text-white
          ">
            0
          </h2>


        </div>






        <div className="
          bg-white
          dark:bg-gray-900
          rounded-xl
          shadow
          border
          dark:border-gray-800
          p-6
        ">


          <p className="text-sm text-gray-500">
            5 Star Reviews
          </p>


          <h2 className="
            text-3xl
            font-bold
            mt-2
            text-green-500
          ">
            0
          </h2>


        </div>






        <div className="
          bg-white
          dark:bg-gray-900
          rounded-xl
          shadow
          border
          dark:border-gray-800
          p-6
        ">


          <p className="text-sm text-gray-500">
            Response Rate
          </p>


          <h2 className="
            text-3xl
            font-bold
            mt-2
            text-blue-500
          ">
            0%
          </h2>


        </div>



      </div>









      {/* REVIEWS LIST */}


      <section className="
        bg-white
        dark:bg-gray-900
        rounded-xl
        shadow
        border
        dark:border-gray-800
        p-6
      ">



        <h2 className="
          text-xl
          font-bold
          mb-6
          text-gray-900
          dark:text-white
        ">
          Customer Reviews
        </h2>






        {reviews.length === 0 ? (


          <div className="
            text-center
            py-10
            text-gray-500
            dark:text-gray-400
          ">

            No reviews yet.

            <br />

            Customer feedback will appear here.

          </div>



        ) : (



          <div className="space-y-5">



            {reviews.map((review)=>(


              <div
                key={review.id}
                className="
                  rounded-xl
                  bg-gray-50
                  dark:bg-gray-800
                  p-5
                "
              >



                <div className="
                  flex
                  flex-col
                  md:flex-row
                  md:justify-between
                  gap-3
                ">



                  <div>


                    <h3 className="
                      font-semibold
                      text-gray-900
                      dark:text-white
                    ">
                      {review.customer}
                    </h3>


                    <p className="
                      text-sm
                      text-gray-500
                    ">
                      {review.product}
                    </p>


                  </div>




                  <div className="
                    text-amber-400
                    font-semibold
                  ">

                    {"⭐".repeat(review.rating)}

                  </div>



                </div>





                <p className="
                  mt-4
                  text-gray-600
                  dark:text-gray-300
                ">
                  {review.comment}
                </p>





                <div className="
                  mt-4
                  flex
                  justify-between
                  items-center
                ">


                  <span className="
                    text-sm
                    text-gray-500
                  ">
                    {review.date}
                  </span>





                  <button
                    className="
                      text-blue-500
                      hover:underline
                    "
                  >
                    Reply
                  </button>



                </div>



              </div>


            ))}



          </div>



        )}



      </section>



    </div>

  );

};


export default Reviews;