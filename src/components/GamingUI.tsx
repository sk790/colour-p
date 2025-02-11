import { FaWallet, FaClock } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import GameHistory from "./history/GameHistory";
import Chart from "./history/Chart";
import MyHistory from "./history/MyHistory";
import { useEffect, useState } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import toast from "react-hot-toast";

const GamingUI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Game history");
  const [selectItem, setSelectItem] = useState(null);
  const [amount, setAmount] = useState(10);
  const [isAgree, setIsAgree] = useState(true);
  const [isAmountSelect, setIsAmountSelect] = useState(10);
  const [multiples, setMultiples] = useState(0);
  const [time, setTime] = useState(30); // Set initial countdown time in seconds (3 minutes)
  const [selectedTime, setSelectedTime] = useState(30);
  const onChange = (item: any) => {
    setSelectItem(item);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleSetAmount = (amount: number) => {
    setAmount(amount);
    setIsAmountSelect(amount);
  };

  const handleCancel = () => {
    setIsAgree(false);
    setSelectItem(null);
    setIsAmountSelect(10);
    closeModal();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      if (time === 0) {
        setTime(selectedTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time, setTime]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return {
      m1: Math.floor(minutes / 10),
      m2: minutes % 10,
      s1: Math.floor(seconds / 10),
      s2: seconds % 10,
    };
  };

  const { m1, m2, s1, s2 } = formatTime(time);
  const handleSendData = async () => {
    if (!isAgree) {
      toast.error("Please agree to the terms and conditions.");
      return;
    }
    if (amount < 10) {
      toast.error("Minimum amount is 10");
      return;
    }
    toast.error("Ruk ja bhosdike abhi sabar rakh");
    closeModal();
    console.log("Amount:", amount, "selectItem", selectItem);
  };

  return (
    <div className="bg-gradient-to-b max-w-sm from-red-400 to-pink-300 min-h-screen p-4 flex flex-col items-center">
      {/* Header */}
      <div className="text-white text-2xl font-bold flex items-center gap-2">
        <span className="text-3xl">Dream99</span>
        <span className="text-lg">🎰</span>
      </div>

      {/* Wallet Section */}
      <div className="bg-white p-4 rounded-xl shadow-lg mt-4 w-full flex flex-col items-center">
        <p className="text-gray-600 font-semibold">₹0.00</p>
        <div className="flex items-center gap-2">
          <FaWallet color="#FF0000" />
          <p className="font-bold">Wallet balance</p>
        </div>
        <div className="flex justify-between mt-4 w-full gap-10">
          <button className="bg-red-500 text-white px-10 py-2 rounded-4xl font-semibold hover:bg-red-600 transition">
            Withdraw
          </button>
          <button className="bg-green-500 text-white px-10 py-2  rounded-4xl font-semibold hover:bg-green-600 transition">
            Deposit
          </button>
        </div>
      </div>
      <section className="flex gap-2 mt-3 bg-white p-2 w-full rounded-2xl justify-between">
        <div
          className={`flex flex-col items-center hover:bg-red-500 transition-all duration-200 hover:text-white hover:cursor-pointer p-2 rounded-xl ${
            selectedTime === 30 && "bg-red-500"
          }`}
          onClick={() => setSelectedTime(30)}
        >
          <FaClock size={30} color="gray" />
          <p>Win Go</p>
          <p>30s</p>
        </div>
        <div
          className={`flex flex-col items-center hover:bg-red-500 transition-all duration-200 hover:text-white hover:cursor-pointer p-2 rounded-xl ${
            selectedTime === 60 && "bg-red-500 text-white"
          }`}
          onClick={() => setSelectedTime(60)}
        >
          <FaClock size={30} color="gray" />
          <p>Win Go</p>
          <p>1Min</p>
        </div>
        <div
          className={`flex flex-col items-center hover:bg-red-500 ${
            selectedTime === 180 && "bg-red-500"
          } transition-all duration-200 hover:text-white hover:cursor-pointer p-2 rounded-xl`}
          onClick={() => setSelectedTime(180)}
        >
          <FaClock size={30} color="gray" />
          <p>Win Go</p>
          <p>3Min</p>
        </div>
        <div
          className={`flex flex-col items-center hover:bg-red-500 transition-all duration-200 hover:text-white hover:cursor-pointer p-2 rounded-xl ${
            selectedTime === 300 && "bg-red-500"
          }`}
          onClick={() => setSelectedTime(300)}
        >
          <FaClock size={30} color="gray" />
          <p>Win Go</p>
          <p>5Min</p>
        </div>
      </section>
      <section className="flex gap-2 mt-3 justify-between w-full bg-red-500 p-2 rounded-2xl ">
        <div className="flex-col items-center border-r border-white text-sm text-white w-1/2 pr-2">
          <div className="flex gap-1 border border-white rounded-2xl p-1 items-center justify-center">
            <IoDocumentTextOutline size={20} color="white" />
            <button>How to play</button>
          </div>
          <p className="text-white mt-2">Win Go 5Min</p>
          <div className="flex justify-between mt-2">
            <p>0</p>
            <p>1</p>
            <p>5</p>
            <p>3</p>
            <p>8</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-white font-semibold text-sm text-right pr-2">
            Time Remaining
          </p>
          <div className="flex justify-center items-center gap-1 mt-1">
            <div className="box">{m1}</div>
            <div className="box">{m2}</div>
            <div className="box2">:</div>
            <div className="box">{s1}</div>
            <div className="box">{s2}</div>
          </div>
          <p className="text-white font-semibold text-sm tracking-wider mt-3">
            {"201254521263662"}
          </p>
        </div>
      </section>
      <section className="flex gap-2 mt-3 bg-gray-400 p-5 rounded-2xl w-full flex-col">
        <div className="flex gap-2 justify-between w-full">
          <button
            className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold"
            onClick={() => onChange("Green")}
          >
            Green
          </button>
          <button
            className="bg-violet-500 text-white px-6 py-2 rounded-lg font-semibold"
            onClick={() => onChange("Violet")}
          >
            Violet
          </button>
          <button
            className="bg-red-500 text-white py-2 rounded-lg font-semibold px-6"
            onClick={() => onChange("Red")}
          >
            Red
          </button>
        </div>
        <div className="grid grid-cols-5 gap-2 mt-3">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-600 hover:cursor-pointer rounded-full py-3 text-white text-center font-semibold"
              onClick={() => onChange(index)}
            >
              {index}
            </div>
          ))}
        </div>
        <div className="flex w-full justify-between mt-3">
          <button
            className="p-2 rounded-xl border-red-500 border-2 text-white focus:bg-amber-300 focus:border-none transition"
            onClick={() => setMultiples(Math.floor(Math.random() * 5 + 1))}
          >
            Random
          </button>
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className={`bg-gray-600 hover:cursor-pointer rounded-xl hover:bg-green-500 transition py-2 px-3 text-white font-semibold ${
                multiples === index + 1 ? "bg-green-500" : ""
              }`}
              onClick={() => setMultiples(index + 1)}
            >
              <p>{index + 1 + "x"}</p>
            </div>
          ))}
        </div>
        <div className="flex mt-3 w-full justify-between">
          <button
            className="bg-red-500 cursor-pointer text-white px-6 py-2  font-semibold w-full rounded-tl-2xl rounded-bl-2xl"
            onClick={() => onChange("Big")}
          >
            Big
          </button>
          <button
            className="bg-green-500 cursor-pointer text-white px-6 py-2 rounded-tr-2xl rounded-br-2xl font-semibold w-full"
            onClick={() => onChange("Small")}
          >
            Small
          </button>
        </div>
        {isOpen && (
          <div className="fixed inset-0  bg-opacity-50 flex justify-center items-end pointer-events-auto">
            <div className="bg-amber-300 rounded-t-2xl w-sm pt-4">
              <p className="text-lg font-semibold text-center">Win Go 30s</p>
              <div className={`bg-white p-2 rounded-md mx-5 mt-2`}>
                <p className="text-lg font-semibold text-center">
                  You selected: {selectItem}
                </p>
              </div>
              <div className="flex flex-col mx-2 mt-5 gap-2">
                <div className="flex justify-between items-center">
                  <p>Amount</p>
                  <div className="flex gap-2 ">
                    {[1, 10, 100, 1000].map((amount, index) => (
                      <div
                        key={index}
                        className={`hover:bg-green-500 hover:text-white transition hover:cursor-pointer rounded-md px-3 py-2 ${
                          isAmountSelect === amount && "bg-green-500"
                        }`}
                        onClick={() => handleSetAmount(amount)}
                      >
                        <p>{amount}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p>Quantity</p>
                  <div className="flex gap-3">
                    <button
                      className="w-10 h-10 bg-green-500 text-4xl  text-white flex justify-center items-center rounded-sm"
                      onClick={() => setAmount((prev) => prev - 1)}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      className="w-12 text-center bg-white outline-none"
                      disabled
                      value={amount}
                    />
                    <button
                      className="w-10 h-10 bg-green-500 text-4xl  text-white flex justify-center items-center rounded-sm"
                      onClick={() => setAmount((prev) => prev + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex gap-5 justify-end mt-3">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div
                      key={index}
                      className={`bg-gray-600 hover:cursor-pointer rounded-xl hover:bg-green-500 transition py-2 px-3 text-white font-semibold ${
                        multiples === index + 1 ? "bg-green-500" : ""
                      }`}
                      onClick={() => setMultiples(index + 1)}
                    >
                      <p>{index + 1 + "x"}</p>
                    </div>
                  ))}
                </div>
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setIsAgree(!isAgree)}
                >
                  <FaCheckCircle
                    size={20}
                    color={`${isAgree ? "green" : "red"}`}
                  />
                  <p>I agree</p>
                </div>
              </div>
              <div className="flex">
                <button
                  className="bg-red-500 text-white px-6 py-2 font-semibold w-1/3 mt-4 hover:cursor-pointer"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className="bg-green-500 text-white px-6 py-2  font-semibold w-full mt-4 hover:cursor-pointer"
                  onClick={handleSendData}
                >
                  <div className="flex items-center gap-2 justify-center">
                    <p>Total Amount</p>
                    <div className="flex items-center">
                      <FaIndianRupeeSign size={12} />
                      <p>{multiples ? amount * multiples : amount}.00</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
      {/* <section className="flex gap-2 mt-3 bg-white p-5 rounded-2xl w-full"> */}
      <div className="bg-gradient-to-b from-red-300 to-white p-4 w-full mt-5">
        {/* Tabs */}
        <div className="flex justify-around bg-white p-2 rounded-lg shadow-md">
          {["Game history", "Chart", "My history"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-md font-semibold ${
                activeTab === tab
                  ? "bg-red-500 text-white text-sm"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
          {activeTab === "Game history" && <GameHistory />}
          {activeTab === "Chart" && <Chart />}
          {activeTab === "My history" && <MyHistory />}
        </div>
      </div>
    </div>
  );
};

export default GamingUI;
