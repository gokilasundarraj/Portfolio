import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:9000/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.success ? "Sent" : "Failed...!");
    } catch {
      setStatus("Server Error...!");
    }
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <input placeholder="Name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
      <textarea placeholder="Message" value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})}/>
      <button type="submit">Send</button>
      {status && (
       <p className={status.includes("Sent") ? "status success" : "status error"}>
          {status}
       </p>
   )}

    </form>
  );
}
