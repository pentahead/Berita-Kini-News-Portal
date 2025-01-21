import React, { useState } from 'react';
// import './Komentar.css'; 

const Komentar = () => {
  const [komentar, setKomentar] = useState([]);
  const [inputKomentar, setInputKomentar] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputKomentar.trim() !== '') {
      setKomentar([...komentar, {
        nama: 'Anda',
        waktu: new Date().toLocaleString(),
        isi: inputKomentar
      }]);
      setInputKomentar('');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Komentar</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full border border-gray-300 p-2 rounded"
          value={inputKomentar}
          onChange={(e) => setInputKomentar(e.target.value)}
          placeholder="Tuliskan komentar Anda"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Kirim
        </button>
      </form>
      <div className="mt-4">
        {komentar.map((komentar, index) => (
          <div key={index} className="border border-gray-200 p-4 rounded mb-2">
            <p className="font-bold">{komentar.nama}</p>
            <p className="text-gray-600">{komentar.waktu}</p>
            <p>{komentar.isi}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Komentar;