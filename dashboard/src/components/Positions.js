import React, { useState, useEffect } from "react";
import api from "../api/axios"; // Make sure the path is correct

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const res = await api.get("/allPositions");
        setAllPositions(res.data);
      } catch (err) {
        console.error("Failed to fetch positions:", err);
        setError("Could not load positions.");
      } finally {
        setLoading(false);
      }
    };

    fetchPositions();
  }, []);

  if (loading) return <p>Loading positions...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      {allPositions.length === 0 ? (
        <p>No positions available</p>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg.</th>
                <th>LTP</th>
                <th>P&amp;L</th>
                <th>Chg.</th>
              </tr>
            </thead>
            <tbody>
              {allPositions.map(
                ({ product, name, qty, avg, price, isLoss, day }, index) => {
                  const curValue = price * qty;
                  const pnl = curValue - avg * qty;
                  const isProfit = pnl >= 0;

                  return (
                    <tr key={index}>
                      <td>{product}</td>
                      <td>{name}</td>
                      <td>{qty}</td>
                      <td>{avg.toFixed(2)}</td>
                      <td>{price.toFixed(2)}</td>
                      <td className={isProfit ? "profit" : "loss"}>
                        {pnl.toFixed(2)}
                      </td>
                      <td className={isLoss ? "loss" : "profit"}>{day}</td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Positions;
