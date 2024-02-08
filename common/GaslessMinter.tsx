import { useAuth } from "@common/AuthProvider";
import { useState } from "react";
import Confetti from "react-confetti";

export default function GaslessMinter() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [hasMinted, setHasMinted] = useState(false);
  const [to, setTo] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function handleMint() {
    setIsLoading(true);
    const data = {
      userId: user?.userId,
      userScwAddress: user?.scwAddress,
      nameOfFunction: "mint",
    };

    await fetch("/api/mint-nft-user-op/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setTimeout(() => {}, 10000); // 10 seconds
    setIsLoading(false);
    setHasMinted(true);
  }

  async function transferNFT() {
    setIsLoading(true);
    
    const data = {
      userId: user?.userId,
      userScwAddress: user?.scwAddress,
      to,
      tokenId: Number(tokenId)
    };

    await fetch("/api/transfer-nft-user-op/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
      setTimeout(() => {}, 10000); // 10 seconds
    setIsLoading(false);
    setHasMinted(true);
  }
  return (
    <div className="flex items-center justify-center mt-12">
      {hasMinted ? <Confetti /> : ""}
      <div className="card lg:card-side shadow-xl w-[70%] mb-16">
        <figure>
          <img
            src="https://github-production-user-asset-6210df.s3.amazonaws.com/83442423/267730896-dd9791c9-00b9-47ff-816d-0d626177909c.png"
            alt="sample nft"
          />
        </figure>

        <div className="card-body text-black">
          <h2 className="card-title text-2xl">
            Generic Pudgy Penguin on Sepolia
          </h2>
          <p className="text-sm">
            You are about to mint a fake NFT purely for testing purposes. The
            NFT will be minted directly to your smart contract wallet!
          </p>
          <div className="flex items-center justify-end">
            <div
              className={`alert w-[75%] mr-4 ${
                hasMinted ? "visible" : "hidden"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="flex justify-end text-right">
                <span className="text-white">NFT minted. ✅</span>
              </div>
            </div>
            <button className="btn btn-primary text-white" onClick={handleMint}>
              <span
                className={`${
                  isLoading ? "loading loading-spinner" : "hidden"
                }`}
              ></span>
              {isLoading ? "Minting" : hasMinted ? "Mint Again" : "Mint"}
            </button>
          </div>
        </div>
      </div>

           <div className="w-full max-w-sm">
            <div
              className="bg-white rounded px-8 pt-6 pb-8 mb-24 font-mono"
              
            >
              <label
                className="block text-center text-gray-700 font-bold mb-2 text-xl"
                htmlFor="username"
              >
                Transfer NFT 👋
              </label>
              <div className="divider"></div>
              <div className="mb-4 text-xl">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => setTo(e.target.value)}
                  id="to"
                  type="text"
                  placeholder="To"
                />
              </div>
              <div className="mb-6 text-xl">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="tokeId"
                >
                  TokenId
                </label>
                <input
                  className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="tokenId"
                  type="tokenId"
                  placeholder="TokenID"
                  onChange={(e) => setTokenId(e.target.value)}
                />
              </div>
              {error && <p className="text-red-500 mb-4">{error}</p>}{" "}
                <button className="btn btn-primary text-white" onClick={transferNFT}>
              <span
                className={`${
                  isLoading ? "loading loading-spinner" : "hidden"
                }`}
              ></span>
              {isLoading ? "Transfering" : hasMinted ? "Mint Again" : "Transfer Nft"}
            </button>
            </div>
          </div>
    </div>
  );
}