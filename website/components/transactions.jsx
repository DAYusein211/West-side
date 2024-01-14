'use client'
import { useEffect } from "react";

export default function Transactions() {


  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await fetch('api/accounts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    balance:524
                }),
            });

            if (!res.ok) {
                console.error('Error updating user:', res.statusText);
                // Handle error, show message, etc.
            }
        } catch (error) {
            console.error('Error during fetch:', error);
        }
    };

    fetchData();
}, []);

  // The rest of your component remains unchanged

  return (
    <div className='text-white'>
      <h1>Money Transaction Simulator</h1>
      <div>
        <h2>Accounts:</h2>
      </div>

      <form className='relative top-[100px]'>
        <div>
          <label>Receiver:</label>
          <input
            type="text"
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="text"
          />
        </div>
        <button type="submit">Transfer</button>
      </form>

      {/* The rest of your component remains unchanged */}
    </div>
  );
}