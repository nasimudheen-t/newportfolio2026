"use client";
import { useState } from "react";
import { toast } from "sonner";
import { Send, Terminal } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    toast.success("Command Executed: Message transmitted successfully.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[#020617] text-white flex justify-center"
    >
      <div className="w-full max-w-2xl">
        <div className="bg-black/80 border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="bg-gray-900 px-4 py-2 flex items-center gap-2 border-b border-gray-800">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="ml-4 text-xs text-gray-400 font-mono flex items-center gap-2">
              <Terminal size={12} />
              root@nasim-dev:~/contact
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm">
            <div className="mb-4 text-gray-400">
              <span className="text-green-400">➜</span>{" "}
              <span className="text-cyan-400">~</span> enter contact details
              below...
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <label className="text-purple-400 whitespace-nowrap min-w-[60px]">
                  name:
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-transparent border-b border-gray-700 focus:border-green-500 text-gray-200 w-full outline-none py-1 px-2"
                  placeholder="Enter Name"
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <label className="text-purple-400 whitespace-nowrap min-w-[60px]">
                  email:
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-transparent border-b border-gray-700 focus:border-green-500 text-gray-200 w-full outline-none py-1 px-2"
                  placeholder="Enter Email"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-purple-400">message:</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-gray-900/50 border border-gray-700 focus:border-green-500 text-gray-200 w-full outline-none p-3 h-32 rounded resize-none"
                  placeholder="// Write your query here..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-4 flex items-center gap-2 bg-green-600/20 text-green-400 hover:bg-green-600/30 px-6 py-2 rounded border border-green-500/50 transition-all font-bold group"
              >
                {loading ? "Transmitting..." : "Execute Send"}
                {!loading && (
                  <Send
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
