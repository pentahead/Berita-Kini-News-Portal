import React, { useState } from "react";
import avatar from "../../assets/avatar.svg";
import avatar2 from "../../assets/avatar2.svg";
import avatar3 from "../../assets/avatar3.svg";
import { comment } from "postcss";

const Comment = () => {
  const [Comment, setComment] = useState([
    {
      nama: "Kunnybee",
      image:  avatar3 ,
      waktu: new Date().toLocaleString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }),
      isi: "First nih. Terima kasih sudah membuat aplikasi ini!",
    },
    {
      nama: "Dhiyaul Faruq",
      image:  avatar ,
      waktu: new Date().toLocaleString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }),
      isi: "Semoga aplikasi terus berkembang!",
    },
    {
      nama: "Ahmad Fauzi",
      image:  avatar2 ,
      waktu: new Date().toLocaleString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }),
      isi: " Suka dengan desainnya!",
    },
  ]);
  const [inputComment, setInputComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputComment.trim() !== "") {
      setComment([
        ...Comment,
        {
          nama: "Anda",
          image:  avatar ,
          waktu: new Date().toLocaleString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          }),
          isi: inputComment,
        },
      ]);
      setInputComment("");
    }
  };

  return (
    <div className="container mx-auto p-4 my-10">
      <h2 className="text-xl font-bold border-l-4 border-blue-500 pl-2 mb-6">
        Komentar
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row space-x-2">
          <img
            src={avatar}
            alt="avatar"
            className="w-10 h-10 object-cover rounded-full"
          />
          <textarea
            className="w-full border border-gray-300 p-2 rounded"
            value={inputComment}
            onChange={(e) => setInputComment(e.target.value)}
            placeholder="Berikan komentar anda"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Kirim
        </button>
      </form>
      <div className="mt-4">
        {Comment.map((Comment, index) => (
          <div
            key={index}
            className="border border-gray-200 p-4 rounded mb-2 flex items-start space-x-4"
          >
            <div className="relative">
              <img
                src={Comment.image}
                alt="avatar"
                className="w-12 h-12 object-cover rounded-full"
              />
            </div>
            <div className="flex-1">
              <p className="font-bold">{Comment.nama}</p>
              <p className="text-gray-600">{Comment.waktu}</p>
              <p>{Comment.isi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
