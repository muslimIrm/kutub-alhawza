
import ContactModel from "./ContactModel";


const Contact = ()=>{


    return(
        <div className="w-full" id="contact">
            <div className="container ">
                <div className="flex items-center justify-center flex-col w-full">
                    <div className="w-full flex flex-col items-center justify-center !pb-7 !gap-3">
                        <h1 className="text-4xl">تواصل معنا</h1>
                        <p className='texg-xl text-neutral-600'>في حالة وجود اي مشكلة او خطأ في المنهج او موقع مكتبة الحوزة العلمية</p>
                    </div>

                    <ContactModel/>
                </div>
            </div>
        </div>
    );
}


export default Contact