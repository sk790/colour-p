export default function WalletCard() {
  return (
    <div className="bg-gradient-to-r from-red-200 to-red-400 p-4 rounded-2xl shadow-md w-80 text-center">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold">₹0.00</h2>
        <p className="text-gray-500 flex items-center justify-center gap-2">
          <span className="text-red-400">
            <i className="fas fa-wallet"></i> {/* Wallet Icon */}
          </span>
          Wallet balance
        </p>

        <div className="flex justify-between mt-4">
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition">
            Withdraw
          </button>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition">
            Deposit
          </button>
        </div>
      </div>
    </div>
  );
}
