import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Afficher = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    axios.get("http://127.0.0.1:8999/api/leo")
      .then(response => setUsers(response.data))
      .catch(err => console.log(err));
  }, []);
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(search.toLowerCase())
  ); 
  const handleDelete = (id) => {
    console.log("Deleting user with ID:", id); // Vérifie l'ID transmis
    axios.delete(`http://127.0.0.1:8999/api/delete/${id}`)
        .then(() => {
            setUsers((prevUsers) => prevUsers.filter(user => user._id !== id));
            console.log("User deleted successfully");
        })
        .catch(err => console.error("Erreur suppression:", err));
};



  return (
    <div   id="afficher" className='w-full h-screen flex justify-center items-center p-4 bg-gray-100' >
        <Link to='/' className='bg-green-500' >Portfolio </Link>
      <div className='w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden'>
      <input 
          type='text' 
          placeholder='Rechercher...' 
          className='w-full p-2 mb-4 border border-gray-300 rounded' 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
        />
        <table className='w-full table-auto border-collapse border border-gray-300'>
          <thead className='bg-gray-200'>
            <tr className='text-left'>
              <th className='border border-gray-300 px-4 py-2'>Name</th>
              <th className='border border-gray-300 px-4 py-2'>Email</th>
              <th className='border border-gray-300 px-4 py-2'>Message</th>
            </tr>
          </thead>
          
          <tbody>
          {filteredUsers.map((user, index) => (
              <tr key={index} className='hover:bg-gray-100'>
                <td className='border border-gray-300 px-4 py-2'>{user.name}</td>
                <td className='border border-gray-300 px-4 py-2'>{user.email}</td>
                <td className='border border-gray-300 px-4 py-2'>{user.message}</td>
                <td className='border border-gray-300 px-4 py-2'>
                <button
                                            onClick={() => handleDelete(user._id)}  // On passe l'ID de l'utilisateur ici
                                            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800 transition"
                                        >
                           Supprimer
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
