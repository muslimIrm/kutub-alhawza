"use client"
import { sendForm } from "@emailjs/browser"
import { useRef, useState } from "react"
const ContactModel = () => {
    const formRef = useRef()
    const [button, setBut] = useState(true)
    const sendEmail = (e) => {
        setBut(false)
        e.preventDefault();




        sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            formRef.current,
            process.env.NEXT_PUBLIC_PUBLIC_ID
        )
            .then(() => {
                alert("تم إرسال الرسالة بنجاح ✅");
                formRef.current.reset();
            })
            .finally(()=>{setBut(true)})
            .catch((e) => {
                console.log(e)
                alert("حدث خطأ ❌");
            });
    }
    return (
        <form ref={formRef} className="w-full flex flex-col !gap-3" onSubmit={sendEmail}>
            <div className=" grid grid-cols-2 max-md:grid-cols-1 !gap-3">

                <input required name="user_name" placeholder="الاسم الكامل" className={"w-full text-xl rounded-2xl !bg-white  !px-2 !py-4 outline-none border border-transparent hover:border-neutral-100 shadow"} />
                <input required name="user_email"  placeholder="بريد الاكتروني او رقم الهاتف" className={"w-full text-xl rounded-2xl !bg-white  !px-2 !py-4 outline-none border border-transparent hover:border-neutral-100 shadow"} />

            </div>
            <input required placeholder="الموضوع" className={"w-full rounded-2xl !bg-white text-xl !px-2 !py-4 outline-none border border-transparent hover:border-neutral-100 shadow"} />
            <textarea rows={5} required name="message" placeholder="الرسالة" className={"w-full rounded-2xl !bg-white text-xl !px-2 !py-4 outline-none border border-transparent hover:border-neutral-100 shadow"} />

            <input disabled={!button} className="bg-white w-1/2 max-md:w-full text-center flex self-center !py-3 rounded-2xl text-xl shadow-xl font-medium cursor-pointer !font-[Tajawal]" value={button? "إرسل رسالتك": "جار الارسال"} type="submit" />
        </form>
    )
}

export default ContactModel