
import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import { Github, Linkedin, Mail, SendHorizontal } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Message sent successfully!", {
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out. I'd love to hear from you!
          </p>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Methods */}
            <AnimatedSection delay={100} className="md:col-span-1">
              <div className="space-y-6">
                <div className="p-6 border border-border rounded-lg glass">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 mt-1 mr-3 text-foreground" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">your-email@example.com</p>
                      <a
                        href="mailto:your-email@example.com"
                        className="text-sm text-foreground underline hover:no-underline mt-2 inline-block"
                      >
                        Send an email
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 border border-border rounded-lg glass">
                  <div className="flex items-start">
                    <Github className="w-5 h-5 mt-1 mr-3 text-foreground" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">GitHub</h3>
                      <p className="text-muted-foreground">Koon-Kiat</p>
                      <a
                        href="https://github.com/Koon-Kiat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground underline hover:no-underline mt-2 inline-block"
                      >
                        View profile
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 border border-border rounded-lg glass">
                  <div className="flex items-start">
                    <Linkedin className="w-5 h-5 mt-1 mr-3 text-foreground" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
                      <p className="text-muted-foreground">Your LinkedIn Profile</p>
                      <a
                        href="https://linkedin.com/in/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground underline hover:no-underline mt-2 inline-block"
                      >
                        Connect with me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={200} className="md:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="p-6 border border-border rounded-lg glass"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-input transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-input transition"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-input transition"
                    placeholder="Subject of your message"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-input transition resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-colors disabled:bg-muted disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-background"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <SendHorizontal className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
