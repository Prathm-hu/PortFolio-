"use client"
import React, {useRef, useState} from 'react'
import emailjs from "@emailjs/browser";


const Contact = () => {
    const formRef = useRef(null)
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

            try {
                await emailjs.sendForm(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                    formRef.current,
                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
                );

                setForm({ name: "", email: "", message: "" });
            } catch (error) {
                console.error("EmailJS Error: ", error);
            } finally {
                setLoading(false);
            }
    }
    return (
        <div id="contact" className="mt-[150px] scroll-mt-[130px]">
            <h1 className="text-center text-2xl md:text-5xl">Contact Me</h1>
            <span className="block mx-auto mt-5 h-1 w-25 rounded-full bg-gradient-to-r from-gray-600 to-white"/>
            <p className="mt-10 text-xl text-center">Feel free to Contact me by submitting the form below and I will get
                back to you as soon as <br/> possible.</p>
            <div className="max-w-3xl mx-auto my-10 p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
                <form
                    className="space-y-6"
                    ref={formRef}
                onSubmit={handleSubmit}>
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
                            Message
                        </label>
                        <textarea
                            rows="5"
                            placeholder="Enter Your Message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-right">
                        <button
                            type="submit"
                            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-md shadow-md transition"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Contact
