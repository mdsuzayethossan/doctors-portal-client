import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import Loading from "../../Shared/Loading/Loading";

const Payment = () => {
  const bookingInfo = useLoaderData();
  const { price, treatment, appointmentDate, slot } = bookingInfo;
  const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3 className="text-3xl">Payment for {treatment}</h3>
      <p className="text-xl">
        Please pay <strong>${price}</strong> for your appointment on{" "}
        {appointmentDate} at {slot}
      </p>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm bookingInfo={bookingInfo} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
