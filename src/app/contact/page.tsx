"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit");
      
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <div className="container mx-auto px-4 py-24 min-h-[80vh] flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-light to-accent-dark" />
        
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-foreground/70">
            Interested in collaboration or learning more about our ecosystem? Drop us a line.
          </p>
        </div>

        {status === "success" ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Message Sent</h2>
            <p className="text-foreground/70 mb-6">Thank you for reaching out. We will get back to you shortly.</p>
            <button 
              onClick={() => setStatus("idle")}
              className="px-6 py-2 rounded-md bg-surface-200 text-foreground hover:bg-surface-100 transition-colors"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className="w-full bg-surface-200/50 border border-surface-200 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent-light focus:ring-1 focus:ring-accent-light transition-all"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="w-full bg-surface-200/50 border border-surface-200 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent-light focus:ring-1 focus:ring-accent-light transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-foreground/80">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                required
                className="w-full bg-surface-200/50 border border-surface-200 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent-light focus:ring-1 focus:ring-accent-light transition-all"
                placeholder="What is this regarding?"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5}
                required
                className="w-full bg-surface-200/50 border border-surface-200 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent-light focus:ring-1 focus:ring-accent-light transition-all resize-none"
                placeholder="How can we accelerate your future?"
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-md">
                <AlertCircle className="w-5 h-5" />
                <span className="text-sm">Something went wrong. Please try again later.</span>
              </div>
            )}

            <button 
              type="submit" 
              disabled={status === "submitting"}
              className="w-full py-4 rounded-lg bg-accent-light text-background font-semibold hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? (
                <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
