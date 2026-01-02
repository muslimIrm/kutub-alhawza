
import After from './stages/afterMuqdemat/After';
import AfterSudoh from './stages/afterSudoh/AfterSudoh';
import Almuqadimat from './stages/almuqadimat/Almuqadimat';
import Sudoh from './stages/sudoh/Sudoh';

const Books = () => {
    return (
        <div className='w-full' id='books'>
            <div className='container flex-col'>
                <div className='w-full flex flex-col items-center justify-center text-center !pb-7 !gap-3'>
                    <h1 className='text-4xl'>كتب الدراسة الحوزوية</h1>
                    <p className='texg-xl  text-neutral-600'>يعرض موقع مكتبة الحوزة العلمية الكتب مرتبة حسب المراحل وفق منهج واضح ويسير لطلبة العلم</p>
                </div>
                <After/>
                <Almuqadimat/>
                <AfterSudoh/>
                <Sudoh/>
            </div>

        </div>
    )
}


export default Books