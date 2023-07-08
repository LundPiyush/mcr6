import React, { useState } from "react";
import { useRestaurant } from "../../context/restaurant-context";

const ReviewModal = ({ setAddReviewModal, resId }) => {
  const { dispatchRestaurant } = useRestaurant();
  const [reviewInput, setReviewInput] = useState({
    comment: "",
    rating: "",
    pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uO7UUBnkvtntc2R8Y9krkgWvbl-BTKMazZjg8Ul-gmDgzQeb8I6DIQ&s=0",
    revName: "Piyush",
  });

  const submitHandler = () => {
    dispatchRestaurant({ type: "ADD_REVIEW", payload: { resId, reviewInput } });
  };
  return (
    <div className="flex justify-center items-center bg-[#00000080] fixed inset-0 z-10">
      <div className="flex flex-col bg-white px-2 py-4 w-1/3">
        <div className="mb-2 flex justify-between">
          <p className="text-2xl">Add review</p>
          <button onClick={() => setAddReviewModal(false)}>╳</button>
        </div>
        <hr />
        <div className="flex flex-col gap-4 my-6">
          <div className="flex justify-evenly">
            <label>Rating</label>
            <input
              className="border-gray-300 border-2"
              value={reviewInput.rating}
              onChange={(e) =>
                setReviewInput({
                  ...reviewInput,
                  rating: Number(e.target.value),
                })
              }
              placeholder="Enter rating 1 to 5"
            />
          </div>
          <div className="flex justify-evenly">
            <label>Comment</label>
            <input
              type="text"
              className="border-gray-300 border-2"
              value={reviewInput.comment}
              placeholder="comment"
              onChange={(e) =>
                setReviewInput({ ...reviewInput, comment: e.target.value })
              }
            />
          </div>
        </div>
        <button className="bg-pink-500 p-2" onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewModal;
