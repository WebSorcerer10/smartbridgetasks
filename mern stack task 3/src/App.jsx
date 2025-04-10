import React from 'react'
import TextUpdater from './components/TextUpdater';
import Form from './components/Form';
import UserCard from './components/UserCard';
import Button from './components/Button';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Text Updater</h2>
          <TextUpdater />
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Form</h2>
          <Form />
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">User Card</h2>
          <UserCard name="Shivang" email="shivang@gmail.com" />
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Button</h2>
          <Button>Click Me</Button>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Login Form</h2>
          <LoginForm />
        </section>
      </div>
    </div>
  )
}

export default App