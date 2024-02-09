import PhonePe from "../../components/Phonepe/Phonepe";

const Payment = ({ totalPrice = 1 }) => {
  return (
    <div className="h-56 flex items-center justify-center ">
      <PhonePe totalPrice={totalPrice} />
    </div>
  );
};

export default Payment;
