"use client";
import React, { useState, useEffect } from "react";

type BlockedIp = {
  id: number;
  ipAddress: string;
};

async function fetchBlockedIps(): Promise<BlockedIp[]> {
  // Simulating data fetching - replace this with actual API call if needed
  return [
    { id: 1, ipAddress: "192.168.0.1" },
    { id: 2, ipAddress: "127.0.0.1" },
  ];
}

export default function BlockedIpList() {
  const [blockedIps, setBlockedIps] = useState<BlockedIp[]>([]);

  useEffect(() => {
    async function loadBlockedIps() {
      const data = await fetchBlockedIps();
      setBlockedIps(data);
    }
    loadBlockedIps();
  }, []);

  return (
    <div className="w-full flex justify-start">
      <div className="w-[300px] p-3 overflow-x-auto">
        <table className="w-full bg-white border border-solid border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="py-2 px-4 border-b border-solid">ID</th>
              <th className="py-2 px-4 border-b border-solid">IP Address</th>
            </tr>
          </thead>
          <tbody>
            {blockedIps.map((ip, index) => (
              <tr
                key={ip.id}
                className={`text-gray-600 text-sm ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-200 transition-colors duration-200`}
              >
                <td className="py-2 px-4 border-b border-solid text-center">
                  {ip.id}
                </td>
                <td className="py-2 px-4 border-b border-solid text-center">
                  {ip.ipAddress}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
