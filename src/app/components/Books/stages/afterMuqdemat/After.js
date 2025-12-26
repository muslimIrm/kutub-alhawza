
import Model from '../model';


const Books = [
    {
        title: "الوجيز في احكام العبادات",
        details: "كتاب يشمل احكام العبادات التي قد يبتلى بها المكلف وهو تمهيد لكتاب المسائل المنتخبة.",
        link: "https://drive.google.com/file/d/1wZDihv-qmOcKmtSGezlp2skKAL7pt3Fu/view?usp=sharing"
    },
    {
        title: "دروس تمهيدية في عقائد الامامية",
        details: "يعتبر كتاب الدروس التمهيدية في عقائد الامامية كتاب مهم وغني بمحتواه، يبتعد عن استعمال الالفاظ المنطقية والفلسفية التي قد تثير قلق بعض الشباب الذين ليس لديهم معرفة بهذال مصطلحات التي تستخدم في علم الكلام.",
        link: "https://drive.google.com/file/d/1Gsk2RGVQahX7nwqwzPpp5vgb6453vKZt/view?usp=sharing"
        
    },
    
    {
        title: "خلاصة المنطق",
        details: "كتاب 'خلاصة المنطق' هو مقدمة مبسطة وضعها العلامة الشيخ عبد الهادي الفضلي، وهو تلميذ الشيخ المظفر. صُمم الكتاب ليكون بوابة سهلة ومدخلاً تمهيدياً لدراسة علم المنطق قبل التوسع في الكتاب الرئيسي للشيخ المظفر.",
        link: "https://drive.google.com/file/d/1FINU-m4RMrHettas9NvOqUZJ0RUXCSs2/view?usp=sharing"
        
    },
    {
        title: "كتاب التحفة السنية",
        details: "كتاب التحفة السنية بشرح المقدمة الآجرومية هو شرح مبسط وميسر للمقدمة الآجرومية، أحد المتون الأساسية في علم النحو العربي. يهدف الكتاب إلى تقديم قواعد النحو للطلاب المبتدئين بأسلوب واضح وعملي، معززاً بالأمثلة التطبيقية لتسهيل الفهم وبناء أساس قوي في اللغة العربية.",
        link: "https://drive.google.com/file/d/1aOeKlquEDvM5JOVUEgP5stN_oPBLeLh2/view?usp=sharing"
        
    },
    
    {
        title: "قواعد التجويد",
        details:" كتاب علمي مختصّ يلخّص المبادئ الأساسية والأحكام العملية لتلاوة القرآن الكريم تلاوةً صحيحةً مجوّدة، وفق قواعد علم التجويد",
        link: "https://drive.google.com/file/d/1bdjQ-UssAvITxWSNapGZsvbqxKU_yjY6/view?usp=sharing"
        
    }
]


const After = () => {
    return (


        <Model books={Books} title={"المرحلة التمهيدية للمقدمات"}/>
    )
}

export default After