
import Model from '../model';


const stages = [
    "المرحلة الاولى",
    "المرحلة الثانية",
    "المرحلة الثالثة",
    "المرحلة الرابعة"
]

const books = [
    [
        {
            title: "موسوعة الشهيد الثاني - الروضة البهية في شرح اللمعة الدمشقية (كتاب الطهارة وكتاب الصلاة الى النية)",
            details: "شرح فقهي استدلالي على متن اللمعة الدمشقية يتناول أحكام الطهارة وبداية كتاب الصلاة بدقة علمية عالية، من أهم مصادر الفقه الإمامي.",
            link: "https://drive.google.com/file/d/1fMF8I8YlaElDy90_iUC1J2Zsmx0mIMli/view?usp=sharing"
        },
        {
            title: "دروس في علم الاصول",
            details: "كتاب تعليمي في علم أصول الفقه يشرح المبادئ الأساسية للاستنباط بأسلوب درسي منظم مناسب لطلبة الحوزة في المراحل الأولى.",
            link: "https://drive.google.com/file/d/10ef8-nlty1t2ShH02s6dSqbZgA1OJAm1/view?usp=sharing"
        },
        {
            title: "بداية الحكمة - الى المرحلة السابعة في العلة والمعلول",
            details: "متن فلسفي حوزوي للسيد محمد باقر الصدر يشرح أسس الحكمة والفلسفة الإسلامية حتى بحث العلة والمعلول بأسلوب تدريجي.",
            link: "https://drive.google.com/file/d/1McGvHZt0gep9s1wl6A0Vitd1XIzVsWnx/view?usp=sharing"
        }
    ],
    [
        {
            title: "موسوعة الشهيد الثاني - الروضة البهية في شرح اللمعة الدمشقية (كتاب الصلاة من النية الى آخر كتاب الخمس)",
            details: "شرح فقهي موسع لأحكام الصلاة والخمس ضمن كتاب الروضة البهية، مع تحقيق علمي يعكس منهج الفقه الإمامي الاستدلالي.",
            link: "https://drive.google.com/file/d/1fMF8I8YlaElDy90_iUC1J2Zsmx0mIMli/view?usp=sharing"
        },
        {
            title: "أصول الفقه للشيخ المظفر الجزء الأول الى مقدمة الوجوب في الجزء الثاني",
            details: "من أشهر كتب أصول الفقه الحوزوية، يعرض القواعد الأصولية الأساسية بأسلوب واضح ومنهجي معتمد في الدراسة الحوزوية.",
            link: "https://drive.google.com/file/d/1tm6DJGx2LlKVafyIRozxgeIOFOP9GMOE/view?usp=sharing"
        },
        {
            title: "بداية الحكمة من المرحلة السابعة في العلة والمعلول",
            details: "تكملة مباحث بداية الحكمة في الفلسفة الإسلامية، يركز على قضايا العلية والمعلول ضمن منهج عقلي دقيق.",
            link: "https://drive.google.com/file/d/1McGvHZt0gep9s1wl6A0Vitd1XIzVsWnx/view?usp=sharing"
        }
    ],
    [
        {
            title: "موسوعة الشهيد الثاني - الروضة البهية في شرح اللمعة الدمشقية (من كتاب الصوم الى آخر كتاب الحج)",
            details: "شرح فقهي شامل لأحكام الصوم والحج ضمن موسوعة الروضة البهية، يعد مرجعًا أساسيًا في الفقه الاستدلالي الإمامي.",
            link: "https://drive.google.com/file/d/1fMF8I8YlaElDy90_iUC1J2Zsmx0mIMli/view?usp=sharing"
        },
        {
            title: "أصول الفقه للشيخ المظفر الجزء الثاني من مقدمة الوجوب الى حجية ظواهر الكتاب من الجزء الثالث",
            details: "يتناول مباحث الوجوب والأدلة اللفظية وحجية ظواهر القرآن بأسلوب أصولي معتمد في مناهج الحوزة العلمية.",
            link: "https://drive.google.com/file/d/1HNweOhH56Uy-KbewTB2KOZMJ6WlScMpO/view?usp=sharing"
        },
        {
            title: "دروس تمهيدية في القواعد الرجالية",
            details: "كتاب مدخل إلى علم الرجال يشرح القواعد الأساسية لتقييم الرواة وتمييز الصحيح من الضعيف بأسلوب مبسط.",
            link: "https://drive.google.com/file/d/1stjNlEZ3p1Rlp6d9O2SH0ZF3U42Unnow/view?usp=sharing"
        }
    ],
    [
        {
            title: "الروضة البهية في شرح اللمعة الدمشقية (الكفارات - النذر وتوابعه - القضاء - الوقف والعطية - المتاجر)",
            details: "شرح فقهي استدلالي لأبواب المعاملات والعبادات المتأخرة ضمن اللمعة الدمشقية، مع تحليل دقيق للمسائل الفقهية.",
            link: "https://drive.google.com/file/d/1nBMYkpplpE5z3EyNQQ3pthSMBNfKTHgn/view?usp=sharing"
        },
        {
            title: "أصول الفقه للشيخ المظفر الجزء الثالث من حجية ظواهر الكتاب الى نهاية تتمة الجزء الرابع",
            details: "تكملة مباحث الأدلة والأصول العملية في علم أصول الفقه، يعد مرجعًا دراسيًا متقدمًا لطلبة السطوح.",
            link: "https://drive.google.com/file/d/186bxGTqFVGgK-kjUsWX7SIE4sQ9AzHMM/view?usp=sharing"
        }
    ]
]

const Sudoh = () => {
    return (

        <Model title={"السطوح"} stages={stages} books={books} />
    )
}





export default Sudoh