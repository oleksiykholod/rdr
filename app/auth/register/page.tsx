"use client"
import { useState } from 'react';

export default function PostForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/add_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        setStatus('Успішно надіслано!');
        setName('');
        setEmail('');
      } else {
        setStatus('Щось пішло не так.');
      }
    } catch (error) {
      setStatus('Помилка при надсиланні.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block"></label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-2 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-2 rounded-md w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Надіслати
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}