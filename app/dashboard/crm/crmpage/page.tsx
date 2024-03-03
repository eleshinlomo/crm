'use client'
import React, { useEffect, useState } from "react";

interface Client {
   id: number,
   name: string,
   phone: string,
   email: string,
   action: string
}

const dummyClients: Client[] = [
  {
    id: 1,
    name: "John Doe",
    phone: "12345669",
    email: "john@example.com",
    action: "" // Add action property for each client
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "9876543210",
    email: "jane@example.com",
    action: "" // Add action property for each client
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "9876543210",
    email: "jane@example.com",
    action: "" // Add action property for each client
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "9876543210",
    email: "jane@example.com",
    action: "" // Add action property for each client
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "9876543210",
    email: "jane@example.com",
    action: "" // Add action property for each client
  }
];

const CRMPage = () => {
  const [clients, setClients] = useState<Client[]>([]);

  // Set Clients
  useEffect(() => {
    setClients(dummyClients);
  }, []);

  const handleActionChange = (e: any, clientId: any) => {
    const { value } = e.target;
    setClients(prevClients =>
      prevClients.map(client =>
        client.id === clientId ? { ...client, action: value } : client
      )
    );
  };

  const handleModify = (id: any) => {
    // Implement modify logic here
    console.log("Modify row with ID:", id);
  };

  const handleDelete = (id: any) => {
    // Implement delete logic here
    console.log("Delete row with ID:", id);
  };

  return (
    <div>
      <p className="text-center bg-clip-text text-2xl py-4 font-extrabold">
        CRM</p>
      <p className="text-center py-4 font-extrabold">COMING SOON</p>
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border">
        <thead>
          <tr className="text-white">
            <th className="px-4 py-2 bg-gray-800 border">ID</th>
            <th className="px-4 py-2 bg-gray-800 border">Name</th>
            <th className="px-4 py-2 bg-gray-800 border">Phone</th>
            <th className="px-4 py-2 bg-gray-800 border">Email</th>
            <th className="px-4 py-2 bg-gray-800 border">Actions</th>
          </tr>
        </thead>

        {clients?.map((client: any, index) => (
          <tbody key={index}>
            <tr>
              <td className="px-4 py-2 border">{client.id}</td>
              <td className="px-4 py-2 border">{client.name}</td>
              <td className="px-4 py-2 border">{client.phone}</td>
              <td className="px-4 py-2 border">{client.email}</td>
              <td className="px-4 py-2 border">
                <select
                  className="p-2 border rounded bg-gray-800 text-white"
                  value={client.action}
                  onChange={(e) => handleActionChange(e, client.id)}
                >
                  <option value="">Select Action</option>
                  <option value="modify">Modify</option>
                  <option value="delete">Delete</option>
                </select>
                {client.action === "modify" && (
                  <button
                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => handleModify(client.id)}
                  >
                    Apply
                  </button>
                )}
                {client.action === "delete" && (
                  <button
                    className="ml-2 px-4 py-2 bg-red-500 text-white rounded"
                    onClick={() => handleDelete(client.id)}
                  >
                    Confirm
                  </button>
                )}
              </td>
            </tr>
          </tbody>
        ))}
      </table>

      {/* Custom scrollbar */}
      <style jsx>{`
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
    </div>
  );
};

export default CRMPage;
