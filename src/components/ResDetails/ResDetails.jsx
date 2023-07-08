import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRestaurant } from "../../context/restaurant-context";
import ReviewModal from "../ReviewModal/ReviewModal";

const ResDetails = () => {
  const { resId } = useParams();
  const {
    restaurant: { restaurants },
  } = useRestaurant();
  const [resDetails, setResDetails] = useState({});
  const [addReviewModal, setAddReviewModal] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const data = restaurants.find(({ id }) => id === Number(resId));
    setResDetails(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resId]);
  const addReviewHandler = () => {
    setAddReviewModal(true);
  };
  return (
    <>
      {addReviewModal ? (
        <ReviewModal setAddReviewModal={setAddReviewModal} resId={resId} />
      ) : (
        <></>
      )}
      <div className="mx-4">
        <button onClick={() => navigate("/")}> back </button>
        <div className="text-left mx-[20%] mt-6">
          <div className="flex justify-between">
            <p className="text-3xl">{resDetails?.name}</p>
            <button
              className="bg-pink-400 px-2 rounded-lg text-white"
              onClick={addReviewHandler}>
              Add Review
            </button>
          </div>
          {resDetails?.menu?.map(({ name }) => (
            <span>{name} , </span>
          ))}

          <p>{resDetails?.address}</p>
          <p>Average rating - {resDetails?.averageRating}</p>
          <hr />
          <div className="mt-6">
            <p className="text-xl">Reviews</p>
            {resDetails?.ratings?.map((review) => {
              const { comment, pp, rating, revName } = review;
              return (
                <div className="flex flex-col w-[60%] mt-6 xl:w-[70%] lg:w-[90%] lg:mx-7">
                  <div className="flex justify-between">
                    <div className="flex gap-1">
                      <img src={pp} className="h-8" alt={pp} />
                      <p className="font-bold">{revName}</p>
                    </div>
                    <div className="bg-green-600 border-2 px-2 text-white">
                      ⭐️{rating}
                    </div>
                  </div>
                  <p className="text-left m-2">{comment}</p>
                  <hr className="border-b" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResDetails;
