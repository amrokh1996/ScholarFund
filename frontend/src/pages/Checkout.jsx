import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Checkout = () => {
  const id = useParams().id;
  console.log(id);
  const [amount, setamount] = useState();

  const [cardNumber, setCardNumber] = useState("");
  const [isValidCardNumber, setIsValidCardNumber] = useState(true);
  const [nameOnCard, setNameOnCard] = useState("");
  const [isValidNameOnCard, setIsValidNameOnCard] = useState(true);
  const [securityCode, setSecurityCode] = useState("");
  const [isValidSecurityCode, setIsValidSecurityCode] = useState(true);
  const [expirationDate, setExpirationDate] = useState("");
  const [isValidExpirationDate, setIsValidExpirationDate] = useState(true);
  const [selectedAmount, setSelectedAmount] = useState("");
  const [isAmountSelectedError, setIsAmountSelectedError] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false); // New state for modal visibility
  const [otherAmount, setOtherAmount] = useState();

  const handleInputChange = (event) => {
    const input = event.target.value.replace(/[^0-9]/g, "").slice(0, 16);
    const formattedInput = formatCardNumber(input);
    setCardNumber(formattedInput);
    setIsValidCardNumber(validateCardNumber(formattedInput));
  };

  const formatCardNumber = (cardNumber) => {
    const regex = /(\d{4})(?=\d)/g;
    return cardNumber.replace(regex, "$1 ");
  };

  const validateCardNumber = (cardNumber) => {
    return /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(cardNumber);
  };

  const handleNameInputChange = (event) => {
    const input = event.target.value.replace(/[^A-Za-z]/g, "");
    if (input.length <= 20) {
      setNameOnCard(input);
      setIsValidNameOnCard(input.length >= 6);
    }
  };

  const handleSecurityCodeChange = (event) => {
    const input = event.target.value.replace(/[^0-9]/g, "").slice(0, 3);
    setSecurityCode(input);
    setIsValidSecurityCode(/^\d{3}$/.test(input));
  };

  const handleExpirationDateChange = (event) => {
    const input = event.target.value.replace(/\D/g, "").slice(0, 4);
    const formattedInput = formatExpirationDate(input);
    setExpirationDate(formattedInput);
    setIsValidExpirationDate(isExpirationDateValid(formattedInput));
  };

  const formatExpirationDate = (date) => {
    const month = date.slice(0, 2);
    const year = date.slice(2);
    return `${month}${year ? `/${year}` : ""}`;
  };

  const isExpirationDateValid = (date) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100; // Get current year's last two digits
    const currentMonth = currentDate.getMonth() + 1; // Get current month (1-12)

    // Extract month and year from the input
    const [inputMonth, inputYear] = date
      .split("/")
      .map((part) => parseInt(part));

    // Check if the year is in the future or the month is greater than 12
    if (inputYear < currentYear || inputMonth > 12) {
      return false;
    }

    // Check if the year is the current year and the month is in the past
    if (inputYear === currentYear && inputMonth < currentMonth) {
      return false;
    }

    return true;
  };

  const handleAmountSelection = (event) => {
    setSelectedAmount(event.target.value);
    setIsAmountSelectedError(false);
  };

  const handlePayment = () => {
    // Perform validation on button click
    const isCardNumberValid = validateCardNumber(cardNumber);
    const isNameValid = nameOnCard.length >= 6;
    const isSecurityCodeValid = /^\d{3}$/.test(securityCode);
    // const isExpirationDateValid = isExpirationDateValid(expirationDate);
    const isAmountSelected = selectedAmount !== "";

    // Set validity for each input field
    setIsValidCardNumber(isCardNumberValid);
    setIsValidNameOnCard(isNameValid);
    setIsValidSecurityCode(isSecurityCodeValid);
    // setIsValidExpirationDate(isExpirationDateValid);

    // Proceed with payment if all fields are valid
    if (
      isCardNumberValid &&
      isNameValid &&
      isSecurityCodeValid &&
      isAmountSelected
    ) {
      // Perform payment logic here
      console.log("Payment successful!");
      setIsPaymentSuccessful(true);
      setIsModalVisible(true); // Show the modal on successful payment
    } else {
      setIsAmountSelectedError(!isAmountSelected);
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
    navigate("/")
    
  };
    const navigate = useNavigate();

  // ! post payment info
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate input fields
    if (
      !isValidCardNumber ||
      nameOnCard.length < 6 ||
      nameOnCard.length > 20 ||
      securityCode.length !== 3 ||
      expirationDate.length !== 5 ||
      selectedAmount === ""
    ) {
      console.log("Please fill in all the required fields correctly.");
      return;
    }

    // Retrieve payment information from form fields
    const paymentData = {
      cardNumber,
      nameOnCard,
      securityCode,
      expirationDate,
      amountOfDonation: selectedAmount,
      user_id: User,
    };
    console.log(paymentData);

    try {
      const response = await axios
        .post("http://localhost:3100/payment/api/data", paymentData)
        .then(async () => {
          console.log(parseInt(selectedAmount) + parseInt(amount));
          console.log(amount);
          console.log(selectedAmount);
          try {
            const response = await axios.post(
              `http://localhost:3100/prob/updateProblem/${id}`,
              { raised: parseInt(selectedAmount) + parseInt(amount) }
            );
          } catch (err) {
            console.error(err);
            return false;
          }
        });
      console.log(response.data.message);
      // Display success message or perform any other actions
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Server Error:", error.response.status);
        console.error("Error:", error.response.data.error);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("Error:", error.message);
      }
      // Display error message or perform any other actions
    }
  };

  // USER_ID API
  const [User, setUser] = useState();

  console.log(User);

  useEffect(() => {
    const token = localStorage.getItem("token") || false;
    fetchUser(token);
  }, []);

  async function fetchUser(token) {
    try {
      const response = await axios
        .get("http://localhost:3100/user/checkToken", {
          headers: {
            authorization: `barear ${token}`,
          },
        })
        .then((response) => {
          setUser(response?.data.user_id);
        });
    } catch (error) {
      console.error(error);
      return false;
    }

    try {
      const response = await axios
        .get(`http://localhost:3100/prob/getproblemById/${id}`)
        .then((response) => {
          setamount(response?.data.raised);
        });
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  return (
    <div>
      <>
        <form
          onSubmit={handleSubmit}
          className="mt-24 mb-24 grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32"
        >
          <div className="px-4 pt-8">
            <p className="mt-8 text-lg font-medium">Donatation amount</p>
            <div className="mt-5 grid gap-6">
              <div className="relative">
                <input
                  className="peer hidden"
                  id="radio1"
                  type="radio"
                  name="donationAmount"
                  value="200"
                  onChange={handleAmountSelection}
                />
                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white" />
                <label
                  className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  htmlFor="radio1"
                >
                  <img
                    className="w-14 object-contain"
                    src="/images/naorrAeygcJzX0SyNI4Y0.png"
                    alt=""
                  />
                  <div className="ml-5">
                    <span className="mt-2 font-semibold">Starter donation</span>
                    <p className="text-slate-500 text-sm leading-6">200 JD</p>
                  </div>
                </label>
              </div>
              <div className="relative">
                <input
                  className="peer hidden"
                  id="radio2"
                  type="radio"
                  name="donationAmount"
                  value="400"
                  onChange={handleAmountSelection}
                />
                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white" />
                <label
                  className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  htmlFor="radio2"
                >
                  <img
                    className="w-14 object-contain"
                    src="/images/oG8xsl3xsOkwkMsrLGKM4.png"
                    alt=""
                  />
                  <div className="ml-5">
                    <span className="mt-2 font-semibold">
                      Significant contribution
                    </span>
                    <p className="text-slate-500 text-sm leading-6">400JD</p>
                  </div>
                </label>
              </div>
              <div className="relative">
                <input
                  className="peer hidden"
                  id="radio3"
                  type="radio"
                  name="donationAmount"
                  value="600"
                  onChange={handleAmountSelection}
                />
                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white" />
                <label
                  className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  htmlFor="radio3"
                >
                  <img
                    className="w-14 object-contain"
                    src="/images/oG8xsl3xsOkwkMsrLGKM4.png"
                    alt=""
                  />
                  <div className="ml-5">
                    <span className="mt-2 font-semibold">
                      Transformative gift
                    </span>
                    <p className="text-slate-500 text-sm leading-6">600 JD</p>
                  </div>
                </label>
              </div>
              <div className="relative">
                <input
                  className="peer block w-full px-20 py-7 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-teal-500 transition-colors"
                  id="other"
                  type="text"
                  name="otherAmount"
                  value={otherAmount}
                  onChange={handleAmountSelection}
                  placeholder="Other Amount"
                />
                {isAmountSelectedError && (
                  <p className="text-red-500 text-sm mt-2">
                    Please select a donation amount.
                  </p>
                )}
                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white" />
              </div>
            </div>
          </div>

          <div className="mt-10 bg-white px-4 pt-8 lg:mt-0">
            <br />
            <p className="text-xl font-medium">Payment Details</p>
            <br /> <br />
            <p className="text-gray-400">
              Complete your donation by providing your payment details.
            </p>
            <div className="">
              <label
                htmlFor="card-holder"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Card Holder
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="card-holder"
                  name="card-holder"
                  className={`w-full rounded-md border ${
                    nameOnCard.length > 0 &&
                    (nameOnCard.length < 6 || nameOnCard.length > 20)
                      ? "border-red-500"
                      : "border-gray-200"
                  } px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500`}
                  placeholder="Your full name here"
                  value={nameOnCard}
                  onChange={handleNameInputChange}
                  required
                />
                {nameOnCard.length > 0 &&
                  (nameOnCard.length < 6 || nameOnCard.length > 20) && (
                    <p className="text-red-500 text-sm">
                      Name must be between 6 and 20 characters
                    </p>
                  )}

                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                </div>
              </div>
              <label
                htmlFor="card-no"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Card Details
              </label>
              <div className="flex">
                <div className="relative w-7/12 flex-shrink-0">
                  <div className="flex items-center">
                    <input
                      type="text"
                      id="card-no"
                      name="card-no"
                      className={`w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                            ${
                                              !isValidCardNumber
                                                ? "border-red-500"
                                                : ""
                                            }`}
                      placeholder="xxxx-xxxx-xxxx-xxxx"
                      value={cardNumber}
                      onChange={handleInputChange}
                      required
                    />
                    {!isValidCardNumber && (
                      <p className="text-red-500 text-sm ml-2">
                        Please enter a valid 16-digit card number
                      </p>
                    )}
                  </div>
                  <div className="absolute inset-y-0 left-0 flex items-center px-3">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                      <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="relative flex-shrink-0 w-full sm:w-1/2 mb-4 sm:mb-0">
                    <input
                      type="text"
                      name="credit-expiry"
                      className={`w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500
                                            ${
                                              !isValidExpirationDate
                                                ? "ring-red-500"
                                                : "ring-teal-500"
                                            }`}
                      placeholder="MM/YY"
                      value={expirationDate}
                      onChange={handleExpirationDateChange}
                      required
                    />
                    {!isValidExpirationDate && (
                      <p className="text-red-500 text-sm mt-1">
                        Please enter a valid expiration date
                      </p>
                    )}
                  </div>
                  <div className="relative w-full sm:w-1/2">
                    <input
                      type="text"
                      name="credit-cvc"
                      className={`w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 
                                            ${
                                              !isValidSecurityCode
                                                ? "border-red-500"
                                                : ""
                                            }`}
                      placeholder="CVC"
                      value={securityCode}
                      onChange={handleSecurityCodeChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <label
                htmlFor="billing-email"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Billing Email <span className="text-gray-500">*(optional)</span>
              </label>
              <div className="flex flex-col sm:flex-row">
                <div className="relative flex-shrink-0 sm:w-7/12">
                  <input
                    type="text"
                    id="billing-email"
                    name="billing-email"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Email Address"
                  />
                  <div className="fa-regular fa-envelope pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={handlePayment}
              className="mt-10 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
            >
              Donate !
            </button>
            {isModalVisible && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white border-2 border-gray-300 rounded-lg p-8 text-center w-96">
                  {isPaymentSuccessful && (
                    <p className="text-gray-700 text-lg mt-4">
                      Your donation of {selectedAmount}$ has been successful.
                    </p>
                  )}

                  <div className="flex justify-center mt-8">
                    <button
                      className="bg-red-600 hover:bg-red-700 focus:bg-red-800 text-white rounded-lg px-6 py-3 font-semibold"
                      onClick={closeModal}
                      type="submit"
                    >
                      Close
                      {/* console.log("Payment done") */}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
      </>
    </div>
  );
};

export default Checkout;
