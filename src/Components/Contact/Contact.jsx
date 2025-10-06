import React from 'react';

const Contact = () => {
  return (
    <div className="bg-black text-white py-16 px-6 min-h-screen">
      
      <div className="max-w-2xl mx-auto bg-black text-white p-8 rounded-lg shadow-lg shadow-orange-400">
        <h2 className="text-4xl font-bold text-center mb-6">Contact<spam className="text-orange-500"> Us</spam></h2>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 bg-white text-black border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-white text-black border border-orange-500 rounded focus:outline-none focus:ring-4 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-2 bg-white text-black border border-orange-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-orange-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black border border-orange-500 text-white hover:bg-orange-500 hover:border-white hover:text-black font-semibold py-2 px-4 rounded transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
