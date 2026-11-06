// components/contact/ContactForm.tsx

"use client";

import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { handleSubmit, reset } = useForm<Record<string, string>>();

  async function onSubmit(data: Record<string, string>) {
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" border p-10 border-gray-200 rounded-sm"
    >
      <h2 className="text-4xl my-5 font-bold text-amber-700">
        Send Us a Message
      </h2>

      {/* <input
        {...register("name")}
        placeholder="Your Name"
        className="w-full border outline-none my-3 border-gray-300 rounded-sm p-3 placeholder:text-gray-600"
      />

      <input
        {...register("email")}
        placeholder="Email Address"
        className="w-full border outline-none my-3 border-gray-300 rounded-sm p-3 placeholder:text-gray-600"
      />
      

      <input
        {...register("phone")}
        placeholder="Phone Number"
        className="w-full border outline-none my-3 border-gray-300 rounded-sm p-3 placeholder:text-gray-600"
      />

      <input
        {...register("subject")}
        placeholder="Subject"
        className="w-full border outline-none my-3 border-gray-300 rounded-sm p-3 placeholder:text-gray-600"
      />

      <textarea
        {...register("message")}
        rows={6}
        placeholder="Message"
        className="w-full border outline-none my-3 border-gray-300 rounded-sm p-3 placeholder:text-gray-600"
      />

      <button
        className="bg-amber-700 text-white px-8 py-4 rounded-xl"
      >
        Send Message
      </button> */}
    <div className="my-8">
    <label
      htmlFor="name"
      className="block mb-2 text-sm font-medium text-gray-700"
    >
      Your Name <span className="text-red-500">*</span>
    </label>
    <input
      id="name"
      type="text"
      name="name"
      placeholder="Enter your full name"
      className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
    />
  </div >

  {/* Email */}
  <div className="my-8">
    <label
      htmlFor="email"
      className="block mb-2 text-sm font-medium text-gray-700"
    >
      Email Address <span className="text-red-500">*</span>
    </label>
    <input
      id="email"
      type="email"
      name="email"
      placeholder="example@email.com"
      className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
    />
  </div >

  {/* Phone */}
  <div className="my-8">
    <label
      htmlFor="phone"
      className="block mb-2 text-sm font-medium text-gray-700"
    >
      Phone Number
    </label>
    <input
      id="phone"
      type="tel"
      name="phone"
      placeholder="+1 234 567 890"
      className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
    />
  </div >

  {/* Subject */}
  <div className="my-8">
    <label
      htmlFor="subject"
      className="block mb-2 text-sm font-medium text-gray-700"
    >
      Subject <span className="text-red-500">*</span>
    </label>
    <input
      id="subject"
      type="text"
      name="subject"
      placeholder="What is your message about?"
      className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
    />
  </div >

  {/* Message */}
  <div className="my-8">
    <label
      htmlFor="message"
      className="block mb-2 text-sm font-medium text-gray-700"
    >
      Message <span className="text-red-500">*</span>
    </label>
    <textarea
      id="message"
      name="message"
      rows={6}
      placeholder="Write your message here..."
      className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
    />
  </div >

  <button
    type="submit"
    className="rounded-md bg-amber-700 px-8 py-3 text-white transition hover:bg-amber-800"
  >
    Send Message
  </button>



    </form>
  );
}