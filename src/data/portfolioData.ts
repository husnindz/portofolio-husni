export interface ProjectDetail {
  id: string;
  title: string;
  tagline: { en: string; id: string };
  category: string;
  role: { en: string; id: string };
  duration?: string;
  featured: boolean;
  featuredOrder?: number;
  problem: { en: string; id: string };
  approach: { en: string[]; id: string[] };
  contribution: { en: string; id: string };
  technologies: string[];
  metrics?: { label: { en: string; id: string }; value: string }[];
  githubUrl: string;
  demoUrl?: string;
  image: string;
  imageAlt: string;
  gallery?: { url: string; caption: { en: string; id: string } }[];
  disclaimer?: { en: string; id: string };
}

export interface ExpertiseArea {
  id: string;
  title: { en: string; id: string };
  iconName: string;
  description: { en: string; id: string };
  skills: string[];
  tools: string[];
  relatedProject: string;
}

export const PERSONAL_INFO = {
  name: "Husni Nur Dzaki",
  shortName: "HND",
  headline: "Data Scientist · Data Engineer · Analytics & Software Developer",
  tagline: {
    en: "Turning Data Into Insight. Building Technology Into Solutions.",
    id: "Mengubah Data Menjadi Wawasan. Membangun Teknologi Menjadi Solusi.",
  },
  heroBio: {
    en: "I build data-driven products and practical software solutions — spanning resilient data pipelines, predictive machine learning models, interactive business analytics, and modern web applications.",
    id: "Saya membangun produk berbasis data dan solusi perangkat lunak praktis — mulai dari pipeline data yang tangguh, model machine learning prediktif, analitik bisnis interaktif, hingga aplikasi web modern.",
  },
  aboutExtended: {
    en: "Bridging the gap between data intelligence and functional software engineering. Rather than treating data and software as isolated silos, I focus on the entire lifecycle: collecting and validating raw datasets, architecting ETL pipelines, uncovering key exploratory patterns, deploying predictive models, and packaging solutions into accessible digital interfaces.",
    id: "Menjembatani kecerdasan data dengan rekayasa perangkat lunak fungsional. Tidak memandang data dan software secara terpisah, saya berfokus pada siklus utuh: mengumpulkan dan memvalidasi dataset mentah, merancang pipeline ETL, menemukan pola eksplorasi utama, mengimplementasikan model prediktif, dan menyajikan solusi melalui antarmuka digital yang mudah diakses.",
  },
  email: "husnindz@gmail.com",
  github: "https://github.com/husnindz",
  linkedin: "https://www.linkedin.com/in/husni-nur-dzaki/",
  location: "Indonesia",
  availabilityStatus: {
    en: "Open for freelance & full-time roles",
    id: "Terbuka untuk freelance & pekerjaan penuh waktu",
  },
};

export const EXPERTISE_AREAS: ExpertiseArea[] = [
  {
    id: "data-science",
    title: {
      en: "Data Science & Machine Learning",
      id: "Data Science & Machine Learning",
    },
    iconName: "BrainCircuit",
    description: {
      en: "Designing predictive models, feature engineering pipelines, and sequence anomaly detection with clear explainability (SHAP).",
      id: "Merancang model prediktif, pipeline feature engineering, dan deteksi anomali sekuensial dengan explainability yang jelas (SHAP).",
    },
    skills: [
      "Exploratory Data Analysis (EDA)",
      "Feature Engineering & Selection",
      "Classification & Regression",
      "Sequence Anomaly Detection (LSTM/Transformer)",
      "Model Evaluation (ROC-AUC, Confusion Matrix)",
      "Explainable AI (SHAP)",
    ],
    tools: ["Python", "Scikit-Learn", "TensorFlow / Keras", "Pandas", "NumPy", "SHAP"],
    relatedProject: "Mirai",
  },
  {
    id: "data-engineering",
    title: {
      en: "Data Engineering & ETL",
      id: "Data Engineering & ETL",
    },
    iconName: "DatabaseZap",
    description: {
      en: "Building modular, automated data extraction, cleaning, and multi-destination loading pipelines with high test coverage.",
      id: "Membangun pipeline ekstraksi data modular, pembersihan otomatis, dan pemuatan multi-tujuan dengan cakupan uji tinggi.",
    },
    skills: [
      "Automated Web Scraping & Multi-Page Parsing",
      "Data Cleaning & Schema Normalization",
      "Currency & Type Transformation",
      "Multi-destination Storage (CSV, Sheets, PostgreSQL)",
      "Unit Testing & API Mocking (Pytest)",
      "Database Integration & Schemas",
    ],
    tools: ["Python", "Requests", "BeautifulSoup4", "PostgreSQL", "SQLAlchemy", "Pytest", "Google Sheets API"],
    relatedProject: "ETL Fashion Data Pipeline",
  },
  {
    id: "data-analytics",
    title: {
      en: "Analytics & Business Intelligence",
      id: "Analitik & Business Intelligence",
    },
    iconName: "LineChart",
    description: {
      en: "Translating raw operational metrics into actionable insights through exploratory analysis and interactive dashboards.",
      id: "Menerjemahkan metrik operasional mentah menjadi wawasan bisnis yang dapat ditindaklanjuti lewat analisis dan dashboard interaktif.",
    },
    skills: [
      "Exploratory Pattern Discovery",
      "Temporal & Environmental Trend Analysis",
      "Interactive Dashboard Development",
      "KPI Definition & Data Storytelling",
      "Visual Data Communication",
    ],
    tools: ["Streamlit", "Matplotlib", "Seaborn", "Chart.js", "Pandas"],
    relatedProject: "Bike Sharing Dashboard",
  },
  {
    id: "web-development",
    title: {
      en: "Software & Web Development",
      id: "Pengembangan Perangkat Lunak & Web",
    },
    iconName: "Code2",
    description: {
      en: "Crafting intuitive web applications, interactive property platforms, and client-side prototypes with structured component architecture.",
      id: "Mengembangkan aplikasi web intuitif, platform properti interaktif, dan prototipe client-side dengan arsitektur komponen terstruktur.",
    },
    skills: [
      "Responsive Frontend Architecture",
      "Interactive Geospatial Maps (Leaflet.js)",
      "Client-side State & Storage Management",
      "RESTful API Consumption & Integration",
      "Clean Semantic UI & Performance Optimization",
    ],
    tools: ["TypeScript", "Next.js / React", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap 5", "Leaflet.js"],
    relatedProject: "Hunian.id",
  },
];

export const FEATURED_PROJECTS: ProjectDetail[] = [
  {
    id: "mirai",
    title: "Mirai — Healthcare Risk Assessment Platform",
    tagline: {
      en: "A data-driven healthcare platform that analyzes medical check-up parameters to identify potential disease risk patterns.",
      id: "Platform kesehatan berbasis data yang menganalisis hasil medical check-up untuk mengidentifikasi pola risiko penyakit.",
    },
    category: "Data Science · Machine Learning",
    role: {
      en: "Data Science Division Contributor",
      id: "Kontributor Divisi Data Science",
    },
    featured: true,
    featuredOrder: 1,
    problem: {
      en: "Laboratory check-up results consist of numerous complex clinical parameters that patients and non-specialists struggle to interpret. Mirai explores how routine medical test indicators can be integrated and synthesized to identify patterns associated with specific health risks before chronic deterioration.",
      id: "Hasil pemeriksaan laboratorium berisi banyak parameter klinis kompleks yang sulit dipahami oleh masyarakat awam. Mirai mengeksplorasi bagaimana indikator tes medis rutin dapat diintegrasikan dan dianalisis untuk mengenali pola risiko kesehatan tertentu sebelum terjadi perburukan kronis.",
    },
    approach: {
      en: [
        "Collected and structured lab test datasets across major risk categories: Cardiovascular, Metabolic (Internal Medicine), and Pulmonary disorders.",
        "Performed thorough preprocessing: missing value imputation, outlier handling, and normalization across diverse clinical test scales.",
        "Executed feature engineering and feature selection to isolate high-signal biological indicators.",
        "Trained and compared classification models with SMOTE to resolve medical class imbalances.",
        "Integrated SHAP (SHapley Additive exPlanations) to ensure model explainability for individual biomarker contributions.",
      ],
      id: [
        "Mengumpulkan dan menyusun dataset tes lab lintas kategori risiko: Jantung & Pembuluh Darah, Gangguan Metabolisme, dan Penyakit Paru-Paru.",
        "Melakukan preprocessing menyeluruh: imputasi missing value, penanganan outlier, dan normalisasi pada berbagai skala tes klinis.",
        "Menjalankan feature engineering dan feature selection untuk memilih indikator biologis dengan signifikansi tertinggi.",
        "Melatih dan membandingkan model klasifikasi menggunakan SMOTE untuk mengatasi ketidakseimbangan kelas medis.",
        "Mengintegrasikan SHAP untuk memastikan transparansi dan explainability pada kontribusi masing-masing biomarker.",
      ],
    },
    contribution: {
      en: "Personal contribution focused specifically on the Data Science Division: medical data preprocessing, feature engineering & selection, dataset construction for machine learning, model training & evaluation, and ML explainability documentation. Developed as a collaborative team capstone project.",
      id: "Kontribusi personal berfokus secara spesifik pada Divisi Data Science: data preprocessing medis, feature engineering & feature selection, penyusunan dataset machine learning, evaluasi model, dan dokumentasi explainability. Dikembangkan sebagai proyek capstone tim kolaboratif.",
    },
    technologies: [
      "Python",
      "Scikit-Learn",
      "TensorFlow / Keras",
      "SHAP",
      "Imbalanced-Learn (SMOTE)",
      "Pandas",
      "NumPy",
      "PostgreSQL",
    ],
    metrics: [
      { label: { en: "Risk Categories", id: "Kategori Risiko" }, value: "3 Core Domains" },
      { label: { en: "Explainability", id: "Transparansi" }, value: "SHAP Values" },
      { label: { en: "Evaluation", id: "Evaluasi" }, value: "Confusion Matrix" },
    ],
    githubUrl: "https://github.com/husnindz/Mirai",
    demoUrl: "https://www.youtube.com/watch?v=miVFbIggkfQ",
    image: "/images/projects/mirai-shap-summary.png",
    imageAlt: "Mirai ML feature importance SHAP summary plot",
    gallery: [
      {
        url: "/images/projects/mirai-shap-summary.png",
        caption: {
          en: "SHAP summary plot illustrating feature contribution across risk classes.",
          id: "Plot ringkasan SHAP yang mengilustrasikan kontribusi fitur pada kelas risiko.",
        },
      },
      {
        url: "/images/projects/mirai-confusion-matrix.png",
        caption: {
          en: "Confusion matrix evaluating classification accuracy and false positive rates.",
          id: "Confusion matrix untuk evaluasi akurasi klasifikasi dan false positive.",
        },
      },
      {
        url: "/images/projects/mirai-db-schema.png",
        caption: {
          en: "Relational database schema integrating patient profiles and lab metrics.",
          id: "Skema basis data relasional yang mengintegrasikan profil pasien dan metrik lab.",
        },
      },
    ],
    disclaimer: {
      en: "Mirai is designed strictly as an educational and analytical risk-indication aid. It is NOT a clinical diagnosis tool and does not substitute professional medical consultation.",
      id: "Mirai dirancang khusus sebagai alat bantu analisis dan edukasi indikasi risiko. BUKAN alat diagnosis medis dan bukan pengganti konsultasi tenaga kesehatan profesional.",
    },
  },
  {
    id: "hunian-id",
    title: "Hunian.id — Property Marketplace & Management Platform",
    tagline: {
      en: "An interactive property discovery web application connecting property seekers with owners through map exploration, KPR simulations, and management tools.",
      id: "Aplikasi web pencarian properti interaktif yang mempertemukan pencari dan pemilik melalui peta interaktif, simulasi KPR, dan portal pengelolaan.",
    },
    category: "Software Development · Web Application",
    role: {
      en: "Sole Developer (Frontend Implementation & Prototype)",
      id: "Pengembang Utama (Implementasi Frontend & Prototipe)",
    },
    featured: true,
    featuredOrder: 2,
    problem: {
      en: "Property hunting and rental management in Indonesia are frequently fragmented across disparate classifieds, social media groups, and offline channels with minimal interactive exploration tools or transparency.",
      id: "Pencarian dan pengelolaan properti di Indonesia kerap terfragmentasi di berbagai iklan baris, grup media sosial, dan kanal offline tanpa alat eksplorasi peta yang interaktif dan transparan.",
    },
    approach: {
      en: [
        "Architected an intuitive single-portal interface supporting houses, boarding houses (kost), and rented homes (kontrakan).",
        "Integrated Leaflet.js to deliver geospatial property mapping with custom interactive pins and dynamic budget filtering.",
        "Built a real-time KPR mortgage installment simulation calculating down payments, interest rates, and loan tenures.",
        "Implemented multi-property comparison side-by-side (up to 3 properties simultaneously).",
        "Designed comprehensive seller portal UI featuring room/unit management, tenant tracking, and transaction expense charts.",
      ],
      id: [
        "Merancang antarmuka terpadu untuk kategori rumah, kamar kost, dan rumah kontrakan.",
        "Mengintegrasikan Leaflet.js untuk pemetaan geospasial properti dengan pin interaktif dan filter harga dinamis.",
        "Membangun kalkulator simulasi cicilan KPR real-time yang menghitung uang muka, suku bunga, dan tenor pinjaman.",
        "Mengimplementasikan fitur komparasi properti berdampingan (hingga 3 properti sekaligus).",
        "Merancang UI portal pemilik/agen yang mencakup manajemen unit, pelacakan penyewa, dan grafik pengeluaran.",
      ],
    },
    contribution: {
      en: "Conceived and implemented the complete client-side application prototype using vanilla modern JavaScript, Bootstrap 5, Leaflet.js, and Chart.js with local storage persistence and mock data catalogs.",
      id: "Mengonsep dan mengimplementasikan seluruh prototipe aplikasi client-side menggunakan JavaScript modern, Bootstrap 5, Leaflet.js, dan Chart.js dengan persistensi local storage dan katalog data demo.",
    },
    technologies: [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "Leaflet.js",
      "Chart.js",
      "Web Storage API",
    ],
    metrics: [
      { label: { en: "Comparison Tool", id: "Fitur Komparasi" }, value: "3 Properties" },
      { label: { en: "Interactive Map", id: "Peta Interaktif" }, value: "Leaflet.js" },
      { label: { en: "Management Modules", id: "Modul Kelola" }, value: "7 Portals" },
    ],
    githubUrl: "https://github.com/husnindz/Hunian.id",
    image: "/images/projects/hunian-hero.png",
    imageAlt: "Hunian.id hero showcase and property search interface",
    gallery: [
      {
        url: "/images/projects/hunian-hero.png",
        caption: {
          en: "Platform homepage with smart search filter and featured property highlights.",
          id: "Beranda platform dengan filter pencarian pintar dan sorotan properti unggulan.",
        },
      },
      {
        url: "/images/projects/hunian-rumah1.jpg",
        caption: {
          en: "Detailed listing view featuring property specs, image galleries, and KPR calculator.",
          id: "Tampilan listing detail dengan spesifikasi properti, galeri foto, dan kalkulator KPR.",
        },
      },
    ],
    disclaimer: {
      en: "This repository represents a frontend client-side prototype utilizing local browser storage and mock demo data, built to demonstrate UX flow, geospatial mapping, and management dashboards.",
      id: "Repositori ini merepresentasikan prototipe frontend/client-side dengan local storage dan data demo, dibangun untuk mendemonstrasikan alur UX, pemetaan geospasial, dan dashboard manajemen.",
    },
  },
  {
    id: "etl-fashion",
    title: "ETL Fashion Data Pipeline — Multi-Destination Architecture",
    tagline: {
      en: "A production-grade modular ETL pipeline that extracts fashion e-commerce records, standardizes unstructured attributes, and loads them into multiple storage systems.",
      id: "Pipeline ETL modular terstandar produksi yang mengekstrak data produk fashion, menstandarisasi atribut tidak terstruktur, dan memuatnya ke berbagai penyimpanan.",
    },
    category: "Data Engineering · ETL & Data Quality",
    role: {
      en: "Lead Data Engineer & Pipeline Architect",
      id: "Lead Data Engineer & Arsitek Pipeline",
    },
    featured: true,
    featuredOrder: 3,
    problem: {
      en: "Web scraped e-commerce catalogs contain invalid sentinel values ('Unknown Product', 'Not Rated'), inconsistent currency formatting, duplicate items, and unstructured textual strings that prevent direct downstream analytical ingestion.",
      id: "Katalog e-commerce hasil scraping sering kali memuat nilai anomali ('Unknown Product', 'Not Rated'), format mata uang tidak seragam, duplikasi data, dan teks mentah yang belum siap dianalisis.",
    },
    approach: {
      en: [
        "Extract: Scraped 50 paginated catalog pages utilizing Requests and BeautifulSoup with error-handling and automated page iteration.",
        "Transform: Enforced strict data validation rules, discarded corrupted/null records, standardized currency (USD to IDR @ Rp16,000), parsed numeric rating scales, and normalized category tags.",
        "Load: Built a multi-destination dispatcher writing clean records to CSV flat files, Google Sheets API, and a relational PostgreSQL database.",
        "Testing: Authored unit test suites using Pytest with mocked HTTP endpoints, database connections, and Google API calls.",
      ],
      id: [
        "Extract: Scraping 50 halaman katalog secara otomatis menggunakan Requests dan BeautifulSoup dengan penanganan error iteratif.",
        "Transform: Menerapkan aturan validasi ketat, membuang data rusak/null, konversi mata uang (USD ke IDR kurs Rp16.000), parsing rating numerik, dan normalisasi teks.",
        "Load: Membangun dispatcher multi-tujuan yang menulis data bersih ke file CSV, Google Sheets API, dan database relasional PostgreSQL.",
        "Testing: Menulis unit test suite menggunakan Pytest dengan mock HTTP endpoint, koneksi basis data, dan Google Sheets API.",
      ],
    },
    contribution: {
      en: "Sole developer responsible for pipeline design, modular ETL code structuring, currency and data type transformers, multi-destination loading logic, and comprehensive unit test coverage.",
      id: "Pengembang tunggal yang bertanggung jawab atas desain pipeline, pemisahan modul ETL, modul konversi mata uang & tipe data, logika multi-destination, dan unit testing menyeluruh.",
    },
    technologies: [
      "Python",
      "Requests",
      "BeautifulSoup4",
      "Pandas",
      "PostgreSQL",
      "SQLAlchemy / psycopg2",
      "Google Sheets API",
      "Pytest",
    ],
    metrics: [
      { label: { en: "Test Coverage", id: "Cakupan Uji" }, value: "90%+ (Pytest)" },
      { label: { en: "Scraped Depth", id: "Kedalaman Scrape" }, value: "Pages 1–50" },
      { label: { en: "Storage Targets", id: "Target Simpan" }, value: "3 Destinations" },
    ],
    githubUrl: "https://github.com/husnindz/etl-pipeline-fashion-dicoding",
    image: "/images/projects/mirai-db-schema.png", // will use diagrammatic visualization
    imageAlt: "ETL Pipeline multi-destination architecture diagram",
    disclaimer: {
      en: "90%+ test coverage is verified as documented directly within the project's Pytest test suites and repository specifications.",
      id: "Cakupan uji 90%+ diverifikasi sesuai dokumentasi dan test suite Pytest di dalam repositori resmi proyek.",
    },
  },
];

export const OTHER_PROJECTS: ProjectDetail[] = [
  {
    id: "deep-learning-anomaly",
    title: "Deep Learning Anomaly Detection for Predictive Maintenance",
    tagline: {
      en: "Sequence-based unsupervised anomaly detection in industrial machines using LSTM and Transformer Autoencoders.",
      id: "Deteksi anomali tanpa pengawasan berbasis sekuens pada mesin industri menggunakan LSTM dan Transformer Autoencoder.",
    },
    category: "Data Science · Deep Learning",
    role: { en: "Independent ML Engineer", id: "ML Engineer Independen" },
    featured: false,
    problem: {
      en: "Industrial telemetry data often lacks explicit timestamps but contains critical sequential machine operating patterns preceding component failure.",
      id: "Data telemetri industri sering kali tidak memiliki timestamp, namun menyimpan pola sekuensial mesin sebelum terjadi kerusakan komponen.",
    },
    approach: {
      en: [
        "Evaluated AI4I 2020 Predictive Maintenance industrial dataset.",
        "Engineered sequence-based windowing without relying on timestamps.",
        "Built and benchmarked LSTM Autoencoder against Transformer Autoencoder reconstruction error thresholds.",
      ],
      id: [
        "Mengevaluasi dataset AI4I 2020 Predictive Maintenance.",
        "Merekayasa sequence windowing tanpa bergantung pada stempel waktu.",
        "Membangun dan membandingkan rekonstruksi error LSTM Autoencoder dan Transformer Autoencoder.",
      ],
    },
    contribution: {
      en: "End-to-end dataset preprocessing, neural network architecture design, hyperparameter tuning, and threshold evaluation for predictive maintenance alerts.",
      id: "Preprocessing data ujung ke ujung, perancangan arsitektur jaringan saraf, penyetelan hyperparameter, dan evaluasi threshold anomali.",
    },
    technologies: ["Python", "TensorFlow", "Keras", "LSTM", "Transformers", "Scikit-Learn", "NumPy", "Pandas"],
    githubUrl: "https://github.com/husnindz/deep-learning-anomaly-detection",
    image: "/images/projects/mirai-confusion-matrix.png",
    imageAlt: "Deep learning anomaly detection reconstruction loss",
  },
  {
    id: "credit-card-risk",
    title: "Credit Card Default Risk Prediction (Multi-Model Evaluation)",
    tagline: {
      en: "Comprehensive comparative multi-model evaluation to assess customer default probabilities using tabular financial data.",
      id: "Evaluasi komparatif multi-model untuk memprediksi probabilitas gagal bayar nasabah menggunakan data tabular finansial.",
    },
    category: "Data Science · Machine Learning",
    role: { en: "Data Science Project Author", id: "Author Proyek Data Science" },
    featured: false,
    problem: {
      en: "Financial institutions require accurate, explainable risk scoring to prevent credit default while minimizing false positive loan rejections.",
      id: "Institusi keuangan membutuhkan penilaian risiko yang akurat dan transparan untuk mencegah kredit macet serta meminimalkan penolakan pinjaman yang salah.",
    },
    approach: {
      en: [
        "Utilized UCI Credit Card Clients dataset with demographic, repayment, and billing statement history.",
        "Benchmarked Logistic Regression, Decision Tree, Random Forest, KNN, and SVM models.",
        "Analyzed ROC-AUC curves, precision-recall trade-offs, and confusion matrix costs.",
      ],
      id: [
        "Memanfaatkan dataset UCI Credit Card Clients dengan riwayat demografis, pembayaran, dan tagihan.",
        "Melakukan benchmark pada model Logistic Regression, Decision Tree, Random Forest, KNN, dan SVM.",
        "Menganalisis kurva ROC-AUC, trade-off presisi-recall, dan metrik confusion matrix.",
      ],
    },
    contribution: {
      en: "Formulated complete EDA, class balance analysis, multi-model benchmarking pipeline, and comparative performance visualization.",
      id: "Menyusun analisis EDA lengkap, evaluasi keseimbangan kelas, pipeline perbandingan model, dan visualisasi kinerja.",
    },
    technologies: ["Python", "Scikit-Learn", "Random Forest", "SVM", "Pandas", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/husnindz/credit-card-default-risk-prediction",
    image: "/images/projects/mirai-confusion-matrix.png",
    imageAlt: "Credit card default risk model comparison",
  },
  {
    id: "bike-sharing-dashboard",
    title: "Bike Sharing Analytics & Interactive Dashboard",
    tagline: {
      en: "An interactive Streamlit analytics platform dissecting urban bicycle rental behavior across temporal and meteorological factors.",
      id: "Platform analitik interaktif berbasis Streamlit yang mengulas perilaku sewa sepeda perkotaan berdasarkan faktor waktu dan cuaca.",
    },
    category: "Analytics & BI · Web Application",
    role: { en: "Data Analyst & Dashboard Developer", id: "Data Analyst & Pengembang Dashboard" },
    featured: false,
    problem: {
      en: "Urban transport planners need intuitive visibility into how weather, peak commuting hours, and seasonal changes impact bike fleet demand.",
      id: "Perencana transportasi perkotaan membutuhkan visibilitas intuitif tentang bagaimana cuaca, jam sibuk, dan musim memengaruhi armada sepeda.",
    },
    approach: {
      en: [
        "Cleaned and aggregated hourly bike rental logs across 2 years of environmental data.",
        "Identified peak commuting windows and weather vulnerability correlations.",
        "Engineered an interactive Streamlit application with intuitive dynamic date and weather filtering controls.",
      ],
      id: [
        "Membersihkan dan mengagregasi data rental per jam selama 2 tahun data cuaca.",
        "Mengidentifikasi jam sibuk komuter dan korelasi kondisi cuaca terhadap permintaan armada.",
        "Membangun aplikasi Streamlit interaktif dengan filter rentang tanggal dan parameter cuaca dinamis.",
      ],
    },
    contribution: {
      en: "Developed data cleansing logic, exploratory visualization charts, and deployed interactive Streamlit dashboard.",
      id: "Mengembangkan logika pembersihan data, grafik eksplorasi, dan menerapkan dashboard interaktif berbasis Streamlit.",
    },
    technologies: ["Python", "Streamlit", "Pandas", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/husnindz/bike-sharing-dashboard",
    demoUrl: "https://bike-sharing-dashboard-5z9zwmoapp.streamlit.app/",
    image: "/images/projects/hunian-hero.png",
    imageAlt: "Streamlit bike sharing analytics dashboard interface",
  },
];
