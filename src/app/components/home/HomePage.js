"client user"
import { Instagram, Mail, Telegram, WhatsApp } from '@mui/icons-material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const HomePage = () => {

    return (
        <div className="w-full h-screen flex items-center justify-center">

            <div className="container ">
                <div className="flex flex-col w-full justify-center items-center text-center !gap-7">
                    <div className='absolute top-0 left-1/2 -translate-x-1/2 flex !gap-3 !px-4 !py-3 bg-white rounded-br-2xl rounded-bl-2xl'>
                        <a
                            href="https://t.me/i1_muslim"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Telegram className='!text-3xl cursor-pointer hover:text-neutral-600 text-black' />
                        </a>

                        <a
                            href="https://wa.me/07863756645"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <WhatsApp className='!text-3xl cursor-pointer hover:text-neutral-600 text-black' />
                        </a>

                        <a
                            href="https://www.instagram.com/i1_muslim"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Instagram className='!text-3xl cursor-pointer hover:text-neutral-600 text-black' />
                        </a>

                        <a
                            href="mailto:muslim.hashim.dev@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Mail className='!text-3xl cursor-pointer hover:text-neutral-600 text-black' />
                        </a>
                    </div>

                    <h1 className="text-5xl font-bold !font-cairo">مكتبة الحوزة العلمية</h1>
                    <p className="text-lg text-neutral-600 max-w-1/2 max-md:max-w-full">
                        مرحبًا بك في مكتبة 'كتب الحوزة العلمية'، حيث نجمع كل كتب الحوزة في مكان واحد لتسهيل البحث والدراسة على طلاب العلم. اكتشف الكتب والمراجع المنظمة بعناية لتجد ما تحتاجه بسرعة وسهولة. صُممت مكتبة 'كتب الحوزة العلمية' لتكون بوابتك لعالم علوم أهل البيت عليهم السلام، لتجعل رحلتك العلمية أكثر إثراءً وسلاسة.

                    </p>
                    <div className="!py-7">

                        <a href={"#contact"} className="!px-5 !py-3 text-lg border border-neutral-400 rounded">للتواصل</a>

                    </div>

                    <a href="#books" className="Down absolute !text-xl bottom-[5%] left-[10%]">انزل للاسفل<ArrowDownwardIcon /></a>
                </div>
            </div>
        </div>
    )
}

export default HomePage