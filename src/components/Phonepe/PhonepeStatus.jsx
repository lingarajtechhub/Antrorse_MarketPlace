import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const PhonepeStatus = () => {
  const params = useParams();
  const transactionId = params.transactionID;
  const checkTransactionStatus = async () => {
    const transactionData = {
      transactionId: transactionId,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/status/${transactionId}`,
        transactionData
      );
    } catch (error) {
      console.error(`ERROR OCCURED IN TRANSACATION: ${error.message}`);
    }

  };

  useEffect(() => {
    checkTransactionStatus();
  }, []);

  return <div>{transactionId}</div>;
};

export default PhonepeStatus;
