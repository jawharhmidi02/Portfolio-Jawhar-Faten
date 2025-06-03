"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { toast } from "sonner";

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent!", {
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong.", {
          description: data.message || "Please try again later.",
        });
      }
    } catch (error) {
      toast.error("Error", {
        description: "Could not send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 transition-colors"
          />
          <Input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 transition-colors"
          />
        </div>
        <Input
          name="email"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 transition-colors"
        />
        <Input
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 transition-colors"
        />
        <Textarea
          name="message"
          placeholder="Tell us about your project..."
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 transition-colors resize-none"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-blue-600 hover:bg-white/90 hover:scale-105 transition-all duration-300 font-semibold"
          size="lg"
        >
          <Send className="h-5 w-5 mr-2" />
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
