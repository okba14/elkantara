// البيانات الرسمية الكاملة لمترشحي التجمع الوطني الديمقراطي (RND) - القنطرة (القائمة رقم 02)
// محليات 28 نوفمبر 2026: المجلس الشعبي البلدي (22 مترشحاً) + المجلس الشعبي الولائي (11 مترشحاً)

const CANDIDATES = [
  // ================= قائمة المجلس الشعبي البلدي - بلدية القنطرة (22 مترشحاً) =================
  {
    id: 'apc-01',
    number: '01',
    assembly: 'apc',
    assemblyLabel: 'المجلس الشعبي البلدي • القنطرة',
    name: 'عوبيد أسامة',
    age: '38 سنة',
    qualification: 'ماجيستير إدارة الجماعات المحلية • طالب دكتوراه في العلوم السياسية والعلاقات الدولية',
    role: 'مدير وحدة الجزائرية للمياه القنطرة • نائب رئيس المجلس الشعبي البلدي (2021–2025)',
    category: 'management',
    avatar: 'image/candidates/apc-01.jpg',
    poster: 'image/oubid-oussama.jpg',
    featured: true
  },
  {
    id: 'apc-02',
    number: '02',
    assembly: 'apc',
    assemblyLabel: 'المجلس الشعبي البلدي • القنطرة',
    name: 'شايب عثمان',
    age: '37 سنة',
    qualification: 'ليسانس تسيير تقنيات حضرية',
    role: 'تخصص تسيير مدن',
    category: 'academic',
    avatar: 'image/candidates/apc-02.jpg',
    poster: 'image/886730799_1838982523963233_3743914913683221876_n.jpg'
  },
  {
    id: 'apc-03',
    number: '03',
    assembly: 'apc',
    assemblyLabel: 'المجلس الشعبي البلدي • القنطرة',
    name: 'شلي حسين',
    age: '53 سنة',
    qualification: 'ليسانس علوم قانونية وإدارية',
    role: 'مشرف رئيسي للتربية',
    category: 'academic',
    avatar: 'image/candidates/apc-03.jpg',
    poster: 'image/886730799_1838982523963233_3743914913683221876_n.jpg'
  },
  {
    id: 'apc-04',
    number: '04',
    assembly: 'apc',
    assemblyLabel: 'المجلس الشعبي البلدي • القنطرة',
    name: 'بوشعيب صابر',
    age: '51 سنة',
    qualification: 'ليسانس علوم الإتصال',
    role: 'مدير عام مؤسسة إقتصادية',
    category: 'management',
    avatar: 'image/candidates/apc-04.jpg',
    poster: 'image/886730799_1838982523963233_3743914913683221876_n.jpg'
  },
  {
    id: 'apc-05',
    number: '05',
    assembly: 'apc',
    assemblyLabel: 'المجلس الشعبي البلدي • القنطرة',
    name: 'هوارة فاتح',
    age: '42 سنة',
    qualification: 'موظف في فرع الأشغال العمومية',
    role: 'عضو مجلس شعبي بلدي سابق',
    category: 'management',
    avatar: 'image/candidates/apc-05.jpg',
    poster: 'image/886730799_1838982523963233_3743914913683221876_n.jpg'
  },
  {
    id: 'apc-06',
    number: '06',
    assembly: 'apc',
    assemblyLabel: 'المجلس الشعبي البلدي • القنطرة',
    name: 'حجاز يوسف',
    age: '59 سنة',
    qualification: 'نائب بالمجلس الشعبي البلدي',
    role: 'متقاعد من الصندوق الوطني للضمان الإجتماعي',
    category: 'management',
    avatar: 'image/candidates/apc-06.jpg',
    poster: 'image/886730799_1838982523963233_3743914913683221876_n.jpg'
  },
  {
    id: 'apc-07',
    number: '07',
    assembly: 'apc',
    assemblyLabel: 'المجلس الشعبي البلدي • القنطرة',
    name: 'بولطيف حبيب',
    age: '36 سنة',
    qualification: 'ليسانس علوم صحافية وإعلامية',
    role: 'أستاذ التعليم الإبتدائي',
    category: 'academic',
    avatar: 'image/candidates/apc-07.jpg',
    poster: 'image/886730799_1838982523963233_3743914913683221876_n.jpg'
  },
  {
    id: 'apc-08',
    number: '08',
    assembly: 'apc',
    assemblyLabel: 'المجلس الشعبي البلدي • القنطرة',
    name: 'بن حفيظ أحمد تقي الدين',
    age: '33 سنة',
    qualification: 'تقني سامي في الاتصال اللاسلكي',
    role: 'إطار في اتصالات الجزائر',
    category: 'youth',
    featured: true,
    avatar: 'image/candidates/apc-08.jpg',
    poster: 'image/869688791_1135728298852832_4416104918847094857_n.jpg'
  },
  {
    id: 'apc-09',
    number: '09',
    assembly: 'apc',
    assemblyLabel: 'المجلس الشعبي البلدي • القنطرة',
    name: 'مهناوي عبد المومن',
    age: '36 سنة',
    qualification: 'دراسات جامعية ميدان هندسة صناعية',
    role: 'مكلف بالمتابعة بمكتب دراسات',
    category: 'academic',
    avatar: 'image/candidates/apc-09.jpg',
    poster: 'image/886730799_1838982523963233_3743914913683221876_n.jpg'
  },
  {
    id: 'apc-10',
    number: '10',
    assembly: 'apc',
    assemblyLabel: 'المجلس الشعبي البلدي • القنطرة',
    name: 'دباش منتصر',
    age: '32 سنة',
    qualification: 'ماستر هندسة ميكانيكية',
    role: 'مساعد تمريض في الصحة العمومية',
    category: 'youth',
    avatar: 'image/candidates/apc-10.jpg',
    poster: 'image/886730799_1838982523963233_3743914913683221876_n.jpg'
  },
  {
    id: 'apc-11',
    number: '11',
    assembly: 'apc',
    assemblyLabel: 'المجلس الشعبي البلدي • القنطرة',
    name: 'زاوي إلياس',
    age: '33 سنة',
    qualification: 'شهادة تقني في التوثيق والأرشيف',
    role: 'موظف بالإدارة ببلدية القنطرة',
    category: 'management',
    avatar: 'image/candidates/apc-11.jpg',
    poster: 'image/886730799_1838982523963233_3743914913683221876_n.jpg'
  },
  {
    id: 'apc-12',
    number: '12',
    assembly: 'apc',
    assemblyLabel: 'المجلس الشعبي البلدي • القنطرة',
    name: 'سعادة رابح',
    age: '49 سنة',
    qualification: 'تقني سامي في المحاسبة',
    role: 'موظف في الحماية المدنية',
    category: 'management',
    avatar: 'image/candidates/apc-12.jpg',
    poster: 'image/886730799_1838982523963233_3743914913683221876_n.jpg'
  },
  {
    id: 'apc-13',
    number: '13',
    assembly: 'apc',
    assemblyLabel: 'المجلس الشعبي البلدي • القنطرة',
    name: 'مهناوي فارس',
    age: '30 سنة',
    qualification: 'تقني سامي في تسيير الموارد البشرية',
    role: 'موظف بالإدارة ببلدية القنطرة',
    category: 'youth',
    avatar: 'image/candidates/apc-13.jpg',
    poster: 'image/886730799_1838982523963233_3743914913683221876_n.jpg'
  },
  {
    id: 'apc-14',
    number: '14',
    assembly: 'apc',
    assemblyLabel: 'المجلس الشعبي البلدي • القنطرة',
    name: 'بلال نصر الدين (المدعو عز الدين)',
    age: '48 سنة',
    qualification: 'كفاءة مهنية وميدانية',
    role: 'عامل في مصنع الإسمنت سيلاس',
    category: 'management',
    avatar: 'image/candidates/apc-14.jpg',
    poster: 'image/886730799_1838982523963233_3743914913683221876_n.jpg'
  },
  {
    id: 'apc-15',
    number: '15',
    assembly: 'apc',
    assemblyLabel: 'المجلس الشعبي البلدي • القنطرة',
    name: 'حمود حمزة',
    age: '36 سنة',
    qualification: 'ليسانس تربية بدنية ورياضية',
    role: 'أستاذ تربية بدنية ورياضية',
    category: 'youth',
    avatar: 'image/candidates/apc-15.jpg',
    poster: 'image/886730799_1838982523963233_3743914913683221876_n.jpg'
  },
  {
    id: 'apc-16',
    number: '16',
    assembly: 'apc',
    assemblyLabel: 'المجلس الشعبي البلدي • القنطرة',
    name: 'شايب عبد العلي',
    age: '33 سنة',
    qualification: 'ماستر دراسات مالية معمقة',
    role: 'رئيس مصلحة المحاسبة التحليلية بالشركة التابعة حبوب الزيبان',
    category: 'management',
    avatar: 'image/candidates/apc-16.jpg',
    poster: 'image/886730799_1838982523963233_3743914913683221876_n.jpg'
  },
  {
    id: 'apc-17',
    number: '17',
    assembly: 'apc',
    assemblyLabel: 'المجلس الشعبي البلدي • القنطرة',
    name: 'قيدوام ياسين',
    age: '29 سنة',
    qualification: 'إطار شاب في الوقاية والأمن',
    role: 'موظف - مشرف أمن ووقاية صناعي',
    category: 'youth',
    avatar: 'image/candidates/apc-17.jpg',
    poster: 'image/886730799_1838982523963233_3743914913683221876_n.jpg'
  },
  {
    id: 'apc-18',
    number: '18',
    assembly: 'apc',
    assemblyLabel: 'المجلس الشعبي البلدي • القنطرة',
    name: 'حفناوي إبراهيم',
    age: '48 سنة',
    qualification: 'موظف بالجزائرية للمياه وحدة القنطرة',
    role: 'ناشط جمعوي فاعل بالقنطرة',
    category: 'youth',
    avatar: 'image/candidates/apc-18.jpg',
    poster: 'image/886730799_1838982523963233_3743914913683221876_n.jpg'
  },
  {
    id: 'apc-19',
    number: '19',
    assembly: 'apc',
    assemblyLabel: 'المجلس الشعبي البلدي • القنطرة',
    name: 'مروش صحراوي',
    age: '30 سنة',
    qualification: 'تقني سامي في الآلية والضبط',
    role: 'كفاءة تقنية شابة',
    category: 'youth',
    avatar: 'image/candidates/apc-19.jpg',
    poster: 'image/886730799_1838982523963233_3743914913683221876_n.jpg'
  },
  {
    id: 'apc-20',
    number: '20',
    assembly: 'apc',
    assemblyLabel: 'المجلس الشعبي البلدي • القنطرة',
    name: 'ترغيني ياسين',
    age: '37 سنة',
    qualification: 'مهندس دولة في الإحصائيات للإدارة الإقليمية',
    role: 'إطار ببلدية القنطرة',
    category: 'academic',
    avatar: 'image/candidates/apc-20.jpg',
    poster: 'image/886730799_1838982523963233_3743914913683221876_n.jpg'
  },
  {
    id: 'apc-21',
    number: '21',
    assembly: 'apc',
    assemblyLabel: 'المجلس الشعبي البلدي • القنطرة',
    name: 'بسكري باسم',
    age: '24 سنة',
    qualification: 'ليسانس تسويق',
    role: 'إطار جامعي شاب',
    category: 'youth',
    avatar: 'image/candidates/apc-21.jpg',
    poster: 'image/886730799_1838982523963233_3743914913683221876_n.jpg'
  },
  {
    id: 'apc-22',
    number: '22',
    assembly: 'apc',
    assemblyLabel: 'المجلس الشعبي البلدي • القنطرة',
    name: 'كيسة فريد',
    age: '36 سنة',
    qualification: 'مستشار رئيسي في الرياضة',
    role: 'تأطير شباني ورياضي',
    category: 'youth',
    avatar: 'image/candidates/apc-22.jpg',
    poster: 'image/886730799_1838982523963233_3743914913683221876_n.jpg'
  },

  // ================= قائمة المجلس الشعبي الولائي - القنطرة (11 مترشحاً) =================
  {
    id: 'apw-01',
    number: '01',
    assembly: 'apw',
    assemblyLabel: 'المجلس الشعبي الولائي • القنطرة',
    name: 'قيسي شعيب',
    age: '60 سنة',
    qualification: 'إطار سامي في تسيير وإدارة المرافق العمومية',
    role: 'رئيس مؤسسة مكتب بريد القنطرة',
    category: 'management',
    avatar: 'image/candidates/apw-01.jpg',
    poster: 'image/kissi-chouaib.jpg',
    featured: true
  },
  {
    id: 'apw-02',
    number: '02',
    assembly: 'apw',
    assemblyLabel: 'المجلس الشعبي الولائي • القنطرة',
    name: 'بوصلاح محمد',
    age: 'كفاءة قانونية ومحاسبية',
    qualification: 'ماستر قانون أعمال • ماستر قانون إداري',
    role: 'محاسب معتمد في مركز التكوين المهني والتمهين القنطرة',
    category: 'academic',
    avatar: 'image/candidates/apw-02.jpg',
    poster: 'image/894059576_122098363425542557_694586125396583683_n.jpg'
  },
  {
    id: 'apw-03',
    number: '03',
    assembly: 'apw',
    assemblyLabel: 'المجلس الشعبي الولائي • القنطرة',
    name: 'حمدان محمد الطيب',
    age: '42 سنة',
    qualification: 'بروفيسور في العلوم السياسية والعلاقات الدولية • ماجيستير تخصص دراسات مغاربية',
    role: 'أستاذ بجامعة محمد خيضر بسكرة • باحث وإطار سابق في مديرية التشغيل وكاتب صحفي وناشط جمعوي',
    category: 'academic',
    avatar: 'image/candidates/apw-03.jpg',
    poster: 'image/hamdane-mohamed-tayeb.jpg',
    featured: true
  },
  {
    id: 'apw-04',
    number: '04',
    assembly: 'apw',
    assemblyLabel: 'المجلس الشعبي الولائي • القنطرة',
    name: 'بن حفيظ شفيق عبد المالك',
    age: 'إطار إداري وجمعوي',
    qualification: 'ماستر تخصص إدارة الموارد البشرية',
    role: 'رئيس مصلحة الموارد البشرية والوسائل العامة - ناشط جمعوي',
    category: 'management',
    avatar: 'image/candidates/apw-04.jpg',
    poster: 'image/894059576_122098363425542557_694586125396583683_n.jpg'
  },
  {
    id: 'apw-05',
    number: '05',
    assembly: 'apw',
    assemblyLabel: 'المجلس الشعبي الولائي • القنطرة',
    name: 'حفناوي أسامة',
    age: 'إطار مسيّر',
    qualification: 'ماستر علوم سياسية وعلاقات دولية • تقني سامي تسيير الموارد البشرية',
    role: 'رئيس مصلحة الإدارة Agrodiv',
    category: 'management',
    avatar: 'image/candidates/apw-05.jpg',
    poster: 'image/894059576_122098363425542557_694586125396583683_n.jpg'
  },
  {
    id: 'apw-06',
    number: '06',
    assembly: 'apw',
    assemblyLabel: 'المجلس الشعبي الولائي • القنطرة',
    name: 'بولطيف محمد نجيب',
    age: 'منتخب محلي وأستاذ',
    qualification: 'ليسانس تربية بدنية ورياضية',
    role: 'نائب رئيس المجلس الشعبي البلدي - أستاذ التربية البدنية والرياضية',
    category: 'youth',
    avatar: 'image/candidates/apw-06.jpg',
    poster: 'image/894059576_122098363425542557_694586125396583683_n.jpg'
  },
  {
    id: 'apw-07',
    number: '07',
    assembly: 'apw',
    assemblyLabel: 'المجلس الشعبي الولائي • القنطرة',
    name: 'زروق إبراهيم (المدعو عبد الحميد)',
    age: 'متعامل اقتصادي',
    qualification: 'الاستثمار والخدمات اللوجستية',
    role: 'صاحب مؤسسة زروق إبراهيم لنقل المسافرين',
    category: 'management',
    avatar: 'image/candidates/apw-07.jpg',
    poster: 'image/894059576_122098363425542557_694586125396583683_n.jpg'
  },
  {
    id: 'apw-08',
    number: '08',
    assembly: 'apw',
    assemblyLabel: 'المجلس الشعبي الولائي • القنطرة',
    name: 'بنارة سماح',
    age: 'خبرة مهنية تتجاوز 12 سنة',
    qualification: 'قابلة رئيسية بقطاع الصحة',
    role: 'عضو في مكتب التكوين في المؤسسة العمومية للصحة الجوارية القنطرة',
    category: 'academic',
    avatar: 'image/candidates/apw-08.jpg',
    poster: 'image/bennara-samah.jpg',
    featured: true
  },
  {
    id: 'apw-09',
    number: '09',
    assembly: 'apw',
    assemblyLabel: 'المجلس الشعبي الولائي • القنطرة',
    name: 'حقي جمال الدين',
    age: 'كفاءة هندسية وصناعية',
    qualification: 'مهندس دولة في التجهيزات الإلكترونية',
    role: 'رئيس قسم الإستغلال بمطاحن الزيبان',
    category: 'academic',
    avatar: 'image/candidates/apw-09.jpg',
    poster: 'image/894059576_122098363425542557_694586125396583683_n.jpg'
  },
  {
    id: 'apw-10',
    number: '10',
    assembly: 'apw',
    assemblyLabel: 'المجلس الشعبي الولائي • القنطرة',
    name: 'عتروس باديس',
    age: 'إطار شباني ورياضي',
    qualification: 'مستشار رئيسي في الرياضة',
    role: 'رئيس جمعية رياضية فاعلة',
    category: 'youth',
    avatar: 'image/candidates/apw-10.jpg',
    poster: 'image/894059576_122098363425542557_694586125396583683_n.jpg'
  },
  {
    id: 'apw-11',
    number: '11',
    assembly: 'apw',
    assemblyLabel: 'المجلس الشعبي الولائي • القنطرة',
    name: 'عبد الدايم ليلى',
    age: 'إطار تربوي وأكاديمي',
    qualification: 'ليسانس علوم سياسية وعلاقات دولية',
    role: 'أستاذة التعليم الإبتدائي',
    category: 'academic',
    avatar: 'image/candidates/apw-11.jpg',
    poster: 'image/894059576_122098363425542557_694586125396583683_n.jpg'
  }
];

// State
let activeAssembly = 'apc'; // افتراضياً نبرز قائمة المجلس الشعبي البلدي (22 مترشحاً) مع إمكانية عرض الولائي أو الكل
let activeCategory = 'all';
let searchQuery = '';

const gridEl = document.getElementById('candidatesGrid');
const resultsCountEl = document.getElementById('resultsCount');
const candidateDialog = document.getElementById('candidateDialog');
const lightboxDialog = document.getElementById('lightboxDialog');

function renderCandidates() {
  if (!gridEl) return;

  const q = searchQuery.trim().toLowerCase();
  const filtered = CANDIDATES.filter((c) => {
    const matchAssembly = activeAssembly === 'all' || c.assembly === activeAssembly;
    const matchCategory = activeCategory === 'all' || c.category === activeCategory;
    const matchSearch =
      !q ||
      c.name.toLowerCase().includes(q) ||
      c.qualification.toLowerCase().includes(q) ||
      c.role.toLowerCase().includes(q) ||
      c.number.includes(q);
    return matchAssembly && matchCategory && matchSearch;
  });

  if (resultsCountEl) {
    resultsCountEl.textContent = `عرض ${filtered.length} من أصل ${CANDIDATES.length} مترشحاً`;
  }

  if (filtered.length === 0) {
    const emptyBox = document.createElement('div');
    emptyBox.className = 'empty-results';

    const titleP = document.createElement('p');
    titleP.className = 'empty-results__title';
    titleP.textContent = 'لا توجد نتائج مطابقة لبحثك';

    const descP = document.createElement('p');
    descP.className = 'empty-results__desc';
    descP.textContent = 'جرّب البحث باسم آخر أو اختر "كل المترشحين" لعرض القائمة الكاملة.';

    emptyBox.append(titleP, descP);
    gridEl.replaceChildren(emptyBox);
    return;
  }

  const fragment = document.createDocumentFragment();

  filtered.forEach((c) => {
    const article = document.createElement('article');
    article.className = 'candidate-card';
    if (c.assembly === 'apw') article.classList.add('candidate-card--apw');
    if (c.featured) article.classList.add('candidate-card--featured');
    article.dataset.candidateId = c.id;
    article.tabIndex = 0;

    const topDiv = document.createElement('div');
    topDiv.className = 'candidate-card__top';

    const avatarWrap = document.createElement('div');
    avatarWrap.className = 'candidate-card__avatar-wrap';

    const img = document.createElement('img');
    img.src = c.avatar;
    img.alt = `المترشح ${c.name}`;
    img.className = 'candidate-card__avatar';
    img.loading = 'lazy';
    img.width = 78;
    img.height = 78;

    const numBadge = document.createElement('span');
    numBadge.className = 'candidate-card__number';
    numBadge.title = 'الترتيب في القائمة';
    numBadge.textContent = c.number;

    avatarWrap.append(img, numBadge);

    const headInfo = document.createElement('div');
    headInfo.className = 'candidate-card__head-info';

    const assemblySpan = document.createElement('span');
    assemblySpan.className = 'candidate-card__assembly';
    assemblySpan.textContent = c.assemblyLabel;

    const nameH3 = document.createElement('h3');
    nameH3.className = 'candidate-card__name';
    nameH3.textContent = c.name;

    const ageSpan = document.createElement('span');
    ageSpan.className = 'candidate-card__age';
    ageSpan.textContent = c.age;

    headInfo.append(assemblySpan, nameH3, ageSpan);
    topDiv.append(avatarWrap, headInfo);

    const bodyDiv = document.createElement('div');
    bodyDiv.className = 'candidate-card__body';

    const infoWrap = document.createElement('div');
    const qualP = document.createElement('p');
    qualP.className = 'candidate-card__qual';
    qualP.textContent = c.qualification;

    const roleP = document.createElement('p');
    roleP.className = 'candidate-card__role';
    roleP.textContent = c.role;

    infoWrap.append(qualP, roleP);

    const footerDiv = document.createElement('div');
    footerDiv.className = 'candidate-card__footer';

    const listOrderSpan = document.createElement('span');
    listOrderSpan.textContent = `القائمة رقم 02 • ترتيب ${c.number}`;

    const viewCardSpan = document.createElement('span');
    viewCardSpan.textContent = 'عرض البطاقة ←';

    footerDiv.append(listOrderSpan, viewCardSpan);
    bodyDiv.append(infoWrap, footerDiv);

    article.append(topDiv, bodyDiv);
    fragment.appendChild(article);
  });

  gridEl.replaceChildren(fragment);
  observeRevealElements();
}

function openCandidateModal(candidateId) {
  const c = CANDIDATES.find((item) => item.id === candidateId);
  if (!c || !candidateDialog) return;

  document.getElementById('dialogTitle').textContent = `${c.name} — رقم ${c.number}`;
  document.getElementById('dialogAssembly').textContent = `${c.assemblyLabel} • القائمة رقم 02`;
  const avatarEl = document.getElementById('dialogAvatar');
  avatarEl.src = c.avatar;
  avatarEl.alt = c.name;
  document.getElementById('dialogName').textContent = c.name;
  document.getElementById('dialogAge').textContent = c.age;
  document.getElementById('dialogQual').textContent = c.qualification;
  document.getElementById('dialogRole').textContent = c.role;
  document.getElementById('dialogVoteBadge').textContent = `القائمة رقم 02 — المترشح رقم ${c.number}`;

  const viewPosterBtn = document.getElementById('dialogViewPosterBtn');
  viewPosterBtn.onclick = () => {
    candidateDialog.close();
    openLightbox(c.poster, `الملصق الرسمي — ${c.name}`);
  };

  const shareBtn = document.getElementById('dialogShareBtn');
  shareBtn.onclick = async () => {
    const shareData = {
      title: `${c.name} | مترشح رقم ${c.number} - القائمة رقم 02 (RND القنطرة)`,
      text: `ادعموا المترشح ${c.name} (رقم ${c.number}) ضمن قائمة التجمع الوطني الديمقراطي RND رقم 02 لـ ${c.assemblyLabel} - محليات 28 نوفمبر 2026.`,
      url: `${window.location.origin}${window.location.pathname}#candidates`
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (_) {}
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
      shareBtn.textContent = 'تم نسخ رابط البطاقة ✓';
      setTimeout(() => {
        shareBtn.textContent = 'مشاركة بطاقة المترشح';
      }, 2200);
    }
  };

  candidateDialog.showModal();
}

function openLightbox(imgSrc, captionText) {
  if (!lightboxDialog) return;
  const imgEl = document.getElementById('lightboxImg');
  const titleEl = document.getElementById('lightboxTitle');
  const downloadEl = document.getElementById('lightboxDownload');

  imgEl.src = imgSrc;
  imgEl.alt = captionText;
  titleEl.textContent = captionText;
  downloadEl.href = imgSrc;

  lightboxDialog.showModal();
}

// Setup Filter Tabs & Search
function initFilters() {
  const assemblyTabs = document.querySelectorAll('[data-assembly-tab]');
  assemblyTabs.forEach((btn) => {
    btn.addEventListener('click', () => {
      assemblyTabs.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      activeAssembly = btn.getAttribute('data-assembly-tab');
      renderCandidates();
    });
  });

  const categoryChips = document.querySelectorAll('[data-category-chip]');
  categoryChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      categoryChips.forEach((c) => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      activeCategory = chip.getAttribute('data-category-chip');
      renderCandidates();
    });
  });

  const searchInput = document.getElementById('candidateSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderCandidates();
    });
  }

  if (gridEl) {
    gridEl.addEventListener('click', (e) => {
      const card = e.target.closest('[data-candidate-id]');
      if (card) {
        openCandidateModal(card.getAttribute('data-candidate-id'));
      }
    });

    gridEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const card = e.target.closest('[data-candidate-id]');
        if (card) {
          e.preventDefault();
          openCandidateModal(card.getAttribute('data-candidate-id'));
        }
      }
    });
  }

  // Lightbox triggers
  document.querySelectorAll('[data-lightbox-src]').forEach((el) => {
    el.addEventListener('click', () => {
      openLightbox(
        el.getAttribute('data-lightbox-src'),
        el.getAttribute('data-lightbox-caption') || 'ملصق الحملة الانتخابية الرسمي'
      );
    });
  });

  // Spotlight buttons for featured candidates (Benhafidh Ahmed #08, Bennara Samah #08, Kissi Chouaib #01)
  document.querySelectorAll('[data-open-candidate]').forEach((btn) => {
    btn.addEventListener('click', () => {
      openCandidateModal(btn.getAttribute('data-open-candidate'));
    });
  });
}

// Countdown Timer to Election Day: 28 November 2026 08:00:00 (Algeria Time UTC+1)
function initCountdown() {
  const targetDate = new Date('2026-11-28T08:00:00+01:00').getTime();
  const daysEl = document.getElementById('cdDays');
  const hoursEl = document.getElementById('cdHours');
  const minsEl = document.getElementById('cdMins');
  const secsEl = document.getElementById('cdSecs');

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  function updateClock() {
    const now = Date.now();
    const diff = Math.max(0, targetDate - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(mins).padStart(2, '0');
    secsEl.textContent = String(secs).padStart(2, '0');
  }

  updateClock();
  setInterval(updateClock, 1000);
}

// Mobile Menu & Share Site Button
function initNavigationAndSharing() {
  const menuBtn = document.getElementById('menuToggleBtn');
  const navEl = document.getElementById('mainNav');

  if (menuBtn && navEl) {
    menuBtn.addEventListener('click', () => {
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!expanded));
      navEl.classList.toggle('is-open');
    });

    navEl.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuBtn.setAttribute('aria-expanded', 'false');
        navEl.classList.remove('is-open');
      });
    });
  }

  async function triggerSiteShare(btnEl, defaultText) {
    const shareData = {
      title: 'التجمع الوطني الديمقراطي RND - القنطرة | انتخب رقم 02',
      text: 'الموقع الرسمي للحملة الانتخابية للمجلس الشعبي البلدي والولائي بالقنطرة - التجمع الوطني الديمقراطي (RND) - القائمة رقم 02. استمرارية... ثقة... وإنجاز.',
      url: 'https://elkantra.com/'
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (_) {}
    } else if (navigator.clipboard && btnEl) {
      await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
      const labelSpan = btnEl.querySelector('span') || btnEl;
      labelSpan.textContent = 'تم النسخ ✓';
      setTimeout(() => {
        labelSpan.textContent = defaultText;
      }, 2200);
    }
  }

  const shareSiteBtn = document.getElementById('shareSiteBtn');
  if (shareSiteBtn) {
    shareSiteBtn.addEventListener('click', () =>
      triggerSiteShare(shareSiteBtn, 'مشاركة الموقع مع أصدقائك')
    );
  }

  const floatingShareBtn = document.getElementById('floatingShareBtn');
  if (floatingShareBtn) {
    floatingShareBtn.addEventListener('click', () =>
      triggerSiteShare(floatingShareBtn, 'مشاركة')
    );
  }
}

// 7. Gmail-Inspired Splash Screen Controller
function initSplashScreen() {
  const splashEl = document.getElementById('splashScreen');
  if (!splashEl) return;

  const hideSplash = () => {
    splashEl.classList.add('is-hidden');
  };

  setTimeout(hideSplash, 1450);
  splashEl.addEventListener('click', hideSplash, { once: true });
}

// 1. Scroll Progress Bar Fallback (CSP-safe via adoptedStyleSheets without inline styles)
function initScrollProgressFallback() {
  if (!CSS.supports('animation-timeline', 'scroll()')) {
    const progress = document.getElementById('scrollProgress');
    if (!progress || !('adoptedStyleSheets' in document)) return;

    const sheet = new CSSStyleSheet();
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];

    window.addEventListener(
      'scroll',
      () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const progressPercentage = scrollable > 0 ? Math.min(1, Math.max(0, scrolled / scrollable)) : 0;
        sheet.replaceSync(`.scroll-progress { transform: scaleX(${progressPercentage.toFixed(4)}); }`);
      },
      { passive: true }
    );
  }
}

// 2. Subtle Scroll Reveal Observer
let revealObserver = null;

function observeRevealElements() {
  const targets = document.querySelectorAll(
    '.candidate-card:not(.reveal-ready), .pillar-card:not(.reveal-ready), .gallery-card:not(.reveal-ready), .step-card:not(.reveal-ready), .stat-card:not(.reveal-ready), .spotlight-card:not(.reveal-ready), .program-vision-card:not(.reveal-ready), .program-pledge-card:not(.reveal-ready)'
  );

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
  }

  targets.forEach((el) => {
    el.classList.add('reveal-item', 'reveal-ready');
    revealObserver.observe(el);
  });
}

// 4. Floating Action Pill Visibility (Modern Web Guidance: scroll-position-aware-elements)
function initFloatingActions() {
  const sentinel = document.getElementById('scrollSentinel');
  const floatingEl = document.getElementById('floatingActions');
  if (!sentinel || !floatingEl || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        floatingEl.classList.add('is-visible');
      } else {
        floatingEl.classList.remove('is-visible');
      }
    });
  });

  observer.observe(sentinel);
}

// Modern Web Guidance: Mandatory fallback for browsers without <dialog closedby="any"> support
function initDialogLightDismissFallback() {
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    document.querySelectorAll('dialog[closedby="any"]').forEach((dialog) => {
      dialog.addEventListener('click', (event) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;
        if (isDialogContent) return;
        dialog.close();
      });
    });
  }
}

// 8. Smart Glass Header & Active Section Spy
function initSmartHeader() {
  const header = document.querySelector('.site-header');
  if (header) {
    const toggleScrolled = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 40);
    };
    toggleScrolled();
    window.addEventListener('scroll', toggleScrolled, { passive: true });
  }

  const navLinks = Array.from(document.querySelectorAll('.main-nav a[href^="#"]'));
  if (!navLinks.length || !('IntersectionObserver' in window)) return;

  const sectionMap = new Map();
  navLinks.forEach((link) => {
    const id = link.getAttribute('href').slice(1);
    const section = document.getElementById(id);
    if (section) sectionMap.set(section, link);
  });

  if (!sectionMap.size) return;

  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const activeLink = sectionMap.get(entry.target);
        if (!activeLink) return;
        navLinks.forEach((l) => l.classList.remove('is-active'));
        activeLink.classList.add('is-active');
      });
    },
    { rootMargin: '-28% 0px -56% 0px', threshold: 0.01 }
  );

  sectionMap.forEach((_, section) => spyObserver.observe(section));
}

// 9. Animated Stats Counters
function initAnimatedCounters() {
  const counters = document.querySelectorAll('[data-count-target]');
  if (!counters.length) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const formatVal = (el, val) => {
    const pad = parseInt(el.getAttribute('data-count-pad') || '0', 10);
    const str = String(Math.round(val));
    return pad > 0 ? str.padStart(pad, '0') : str;
  };

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-count-target'), 10);
    if (Number.isNaN(target)) return;
    if (reducedMotion) {
      el.textContent = formatVal(el, target);
      return;
    }

    const duration = 850;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = formatVal(el, target * eased);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = formatVal(el, target);
      }
    };
    requestAnimationFrame(step);
  };

  if (!('IntersectionObserver' in window)) {
    counters.forEach(animateCounter);
    return;
  }

  const strip = document.querySelector('.stats-strip');
  if (!strip) {
    counters.forEach(animateCounter);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          counters.forEach(animateCounter);
          observer.disconnect();
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(strip);
}

// 10. Subtle 3D Card Tilt & Glare (Desktop fine-pointer only)
function initCardTiltGlare() {
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!canHover || reducedMotion) return;

  const selector = '.mp-spotlight-card, .program-poster-banner, .spotlight-card, .gallery-card, .candidate-card, .step-card';

  const ensureGlare = (card) => {
    if (!card.classList.contains('is-tilt-ready')) {
      card.classList.add('is-tilt-ready');
      if (!card.querySelector(':scope > .tilt-glare')) {
        const glare = document.createElement('span');
        glare.className = 'tilt-glare';
        glare.setAttribute('aria-hidden', 'true');
        card.appendChild(glare);
      }
    }
  };

  let activeCard = null;

  document.addEventListener('pointermove', (e) => {
    const card = e.target.closest(selector);
    if (activeCard && activeCard !== card) {
      activeCard.classList.remove('is-tilting');
      activeCard.style.setProperty('--rx', '0deg');
      activeCard.style.setProperty('--ry', '0deg');
      activeCard = null;
    }
    if (!card) return;

    ensureGlare(card);
    activeCard = card;
    card.classList.add('is-tilting');

    const rect = card.getBoundingClientRect();
    const px = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    const py = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height));

    const maxTilt = card.classList.contains('mp-spotlight-card') || card.classList.contains('program-poster-banner') ? 2.5 : 4.5;
    const rx = ((0.5 - py) * maxTilt * 2).toFixed(2);
    const ry = ((px - 0.5) * maxTilt * 2).toFixed(2);

    card.style.setProperty('--rx', `${rx}deg`);
    card.style.setProperty('--ry', `${ry}deg`);
    card.style.setProperty('--gx', `${(px * 100).toFixed(1)}%`);
    card.style.setProperty('--gy', `${(py * 100).toFixed(1)}%`);
  });

  document.addEventListener('pointerleave', () => {
    if (activeCard) {
      activeCard.classList.remove('is-tilting');
      activeCard.style.setProperty('--rx', '0deg');
      activeCard.style.setProperty('--ry', '0deg');
      activeCard = null;
    }
  });
}

// Best-effort iframe hiding only; this is not a replacement for an HTTP frame-ancestors header.
function applyBestEffortFrameGuard() {
  if (window.top !== window.self) {
    document.documentElement.classList.add('is-framed-blocked');
  }
}
applyBestEffortFrameGuard();

document.addEventListener('DOMContentLoaded', () => {
  initSplashScreen();
  renderCandidates();
  initFilters();
  initCountdown();
  initNavigationAndSharing();
  initScrollProgressFallback();
  observeRevealElements();
  initFloatingActions();
  initDialogLightDismissFallback();
  initSmartHeader();
  initAnimatedCounters();
  initCardTiltGlare();
});
