import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
// import KYCForm from "./SellerKyc";

const SellerSignUp = () => {
  const [isVerificationSuccessful, setIsVerificationSuccessful] =
    useState(false);
  const [otpType, setOtpType] = useState("mobile");
  const [otp, setOtp] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isKycPopupVisible, setIsKycPopupVisible] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    countryCode: "+91",
    mobile: "",
    gstNumber: "",
  };

  const signUpSchema = Yup.object({
    name: Yup.string().min(3).required("Please enter your username"),
    email: Yup.string().email().required("Please enter your email"),
    countryCode: Yup.string().required("Please select a country code"),
    mobile: Yup.string()
      .matches(/^\d{10}$/, "Mobile number must be 10 digits")
      .required("A phone number is required"),
    gstNumber: Yup.string().required("Please enter your company GST number"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: () => {
        // Mock OTPs for testing
        // const generatedMobileOtp = "654321";
        // const generatedEmailOtp = "123456";

        // TODO: Send generatedMobileOtp to the user's mobile
        // TODO: Send generatedEmailOtp to the user's email

        // Set state to show OTP input boxes
        setIsVerificationSuccessful(false);
        setIsSubmitted(true);
      },
    });

  const showKycPopup = () => {
    setIsKycPopupVisible(true);
  };

  const closeKycPopup = () => {
    setIsKycPopupVisible(true);
  };

  const handleVerify = () => {
    // TODO: Add logic to verify mobile or email OTP with the server
    if (otp === "654321" || otp === "123456") {
      setIsVerificationSuccessful(true);
      showKycPopup();
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleSwitchOtpType = () => {
    setOtpType((prevType) => (prevType === "mobile" ? "email" : "mobile"));
  };

  const handleResendOtp = () => {
    // TODO: Add logic to resend OTP to the user's selected option (email or mobile)
    // For now, let's just alert for demonstration purposes
    alert(`Resending OTP to ${otpType === "mobile" ? "mobile" : "email"}...`);
  };

  return (
    <div className="flex flex-col">
      <section className="bg-gray-50 h-screen flex-1 ">
        <div className="flex flex-col items-center justify-center  px-6 py-8 mx-auto ">
          <div className="w-full bg-white rounded-lg shadow  sm:max-w-md ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Register as a Seller
              </h1>

              {isSubmitted ? (
                <form className="space-y-4 md:space-y-6">
                  {/* OTP Input Field */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="otp"
                      className=" text-sm font-medium text-gray-900 "
                    >
                      Enter OTP sent to your{" "}
                      {otpType === "mobile" ? "mobile" : "email"}
                    </label>
                    <input
                      type="text"
                      id="otp"
                      className="bg-gray-50 border text-gray-900 sm:text-sm rounded-md focus:ring-2 focus:outline-none focus:ring-slate-600 block w-full p-2.5  "
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>

                  {/* Switch OTP Type Button */}
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      className="text-sm text-blue-500 cursor-pointer hover:underline"
                      onClick={handleSwitchOtpType}
                    >
                      Send OTP to {otpType === "mobile" ? "Email" : "Mobile"}
                    </button>
                    {/* Resend OTP Button */}
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      className="text-sm text-blue-500 cursor-pointer hover:underline"
                    >
                      Resend OTP
                    </button>
                  </div>

                  {/* Verify OTP Button */}
                  <div>
                    <button
                      type="button"
                      onClick={handleVerify}
                      className="w-full text-slate-200 bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mt-4"
                    >
                      Verify OTP
                    </button>
                  </div>
                </form>
              ) : (
                <form
                  className="space-y-4 md:space-y-6"
                  action="#"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  {/* Username */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="text"
                      className=" text-sm font-medium text-gray-900 "
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="text"
                      className="bg-gray-50 border text-gray-900 sm:text-sm rounded-md focus:ring-2 focus:outline-none focus:ring-slate-600 block w-full p-2.5  "
                      placeholder="John Doe"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <p className="text-red-600 text-[0.75rem] capitalize">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>
                  {/* Country Code and Mobile Number */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="mobile"
                      className=" text-sm font-medium text-gray-900 "
                    >
                      Mobile Number
                    </label>
                    <div className="flex items-center">
                      <select
                        name="countryCode"
                        id="countryCode"
                        className="bg-gray-50 border text-gray-900 sm:text-sm rounded-md focus:ring-2 focus:outline-none focus:ring-slate-600 p-2.5"
                        value={values.countryCode}
                        onChange={handleChange}
                      >
                        <option value="+91">+91</option>
                        {/* Add more country codes as needed */}
                      </select>
                      <input
                        type="text"
                        name="mobile"
                        id="mobile"
                        className="bg-gray-50 border text-gray-900 sm:text-sm rounded-md focus:ring-2 focus:outline-none focus:ring-slate-600 p-2.5 ml-2"
                        placeholder="1234567890"
                        value={values.mobile}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    {errors.mobile && touched.mobile ? (
                      <p className="text-red-600 text-[0.75rem] capitalize">
                        {errors.mobile}
                      </p>
                    ) : null}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="email"
                      className=" text-sm font-medium text-gray-900 "
                    >
                      Email ID
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border text-gray-900 sm:text-sm rounded-md focus:ring-2 focus:outline-none focus:ring-slate-600 block w-full p-2.5  "
                      placeholder="name@company.com "
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="text-red-600 text-[0.75rem] capitalize">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  {/* Company GST Number */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="gstNumber"
                      className=" text-sm font-medium text-gray-900 "
                    >
                      GSTIN (Goods and Services Tax Identification Number)
                    </label>
                    <input
                      type="text"
                      name="gstNumber"
                      id="gstNumber"
                      className="bg-gray-50 border text-gray-900 sm:text-sm rounded-md focus:ring-2 focus:outline-none focus:ring-slate-600 block w-full p-2.5  "
                      placeholder="Enter your company GST number"
                      value={values.gstNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.gstNumber && touched.gstNumber ? (
                      <p className="text-red-600 text-[0.75rem] capitalize">
                        {errors.gstNumber}
                      </p>
                    ) : null}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full text-slate-200 bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mt-4"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
              {isVerificationSuccessful && (
                <div className={`popup ${isKycPopupVisible ? "visible" : ""}`}>
                  <div className="popup-content">
                    <p>
                      Verification successfully! You can now proceed. However,
                      KYC is pending. Please complete your KYC before
                      proceeding.
                    </p>
                    <Link to="/kycform">
                      <button onClick={closeKycPopup}>Go to KYC Page</button>
                    </Link>
                    <button onClick={closeKycPopup}>Close</button>
                  </div>
                </div>
              )}

              {/* Login Link */}
              <p className="text-sm  text-gray-500   font-medium">
                Already have an account?{" "}
                <Link to="/login" className=" text-red-600 hover:underline ">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellerSignUp;
