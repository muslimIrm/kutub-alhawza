
import Model from '../model';

const books = [
    {
        title: "دروس استدلالية في شرائع الاسلام",
        details: "كتاب فقهي استدلالي حوزوي للشيخ حسين عبد الرضا الأسدي، يتناول شرحًا استدلاليًا لجزء مختار من كتاب شرائع الإسلام للمحقق الحلي، ويهدف إلى تدريب طلاب الحوزة على فهم مناهج الفقهاء وأساليب الاستنباط الفقهي.",
        link: "https://drive.google.com/file/d/1RM6n6ucOfA1Njop1rToPcOKhris5gFTx/view?usp=sharing"
    },
    {
        title: "دروس في علم الاصول",
        details: "كتاب في علم أصول الفقه للسيد الشهيد محمد باقر الصدر، مناسب للمبتدئين، يوضّح القواعد الأصولية والعناصر المشتركة في استنباط الأحكام الشرعية.",
        link: "https://drive.google.com/file/d/1DK6VsrZgwiwz9MUjfzbmk8bA8RwQ1BE0/view?usp=sharing"
    },
    {
        title: "المدخل الى نظرية المعرفة",
        details: "كتاب فلسفي إسلامي تمهيدي يبحث في نظرية المعرفة وحدودها وأدواتها، مناسب لطلاب الفلسفة الإسلامية والدراسات العقائدية قبل المراحل المتقدمة.",
        link: "https://drive.google.com/file/d/1ZZ1F40gXXKDEt_3vyhnq3tJKuxIizP6_/view?usp=sharing"
    },
    {
        title: "مختصر الصرف",
        details: "كتاب تعليمي في علم الصرف العربي للدكتور عبد الهادي الفضلي، يشرح أبنية الكلمة وقواعد الأفعال والأسماء بأسلوب مبسط لطلاب اللغة العربية.",
        link: "https://drive.google.com/file/d/1kl0L8qSSeJp0qwBjUJA1cJGDjdKu_QPy/view?usp=sharing"
    },
    {
        title: "تهذيب البلاغة",
        details: "كتاب في علم البلاغة العربية يشرح المعاني والبيان والبديع بأسلوب عصري، مناسب لطلاب الحوزة واللغة العربية لتنمية الذوق الأدبي.",
        link: "https://drive.google.com/file/d/1qOZtzvD0KR6XBhbR0z29aWfQJ4_xkNqZ/view?usp=sharing"
    },
    {
        title: "مغني اللبيب",
        details: "مرجع نحوي مشهور لابن هشام الأنصاري في علم النحو والإعراب، يعالج القواعد الدقيقة والإشكالات النحوية المتقدمة، ويعد من أهم كتب العربية.",
        link: "https://drive.google.com/file/d/1E8D7z9VRrV8gEzM_YvyyC-gvcFCyi08r/view?usp=sharing"
    }


]
const AfterSudoh = () => {

    return (

        <Model title={"المرحلة التمهيدية للسطوح"} books={books} />
    )
}





export default AfterSudoh