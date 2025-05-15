import React from 'react';
import './App.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const InstagramIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M7.75 2C5.678 2 4 3.678 4 5.75v12.5C4 20.322 5.678 22 7.75 22h8.5c2.072 0 3.75-1.678 3.75-3.75V5.75C20 3.678 18.322 2 16.25 2h-8.5zm0 2h8.5c.966 0 1.75.784 1.75 1.75v8.5c0 .966-.784 1.75-1.75 1.75h-8.5c-.966 0-1.75-.784-1.75-1.75v-8.5c0-.966.784-1.75 1.75-1.75zm4.25 1.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm3.5-.5a.75.75 0 110 1.5.75.75 0 010-1.5z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M4.98 3.5C3.35 3.5 2 4.83 2 6.45c0 1.61 1.34 2.95 2.98 2.95 1.65 0 2.98-1.34 2.98-2.95 0-1.62-1.33-2.95-2.98-2.95zm.02 4.98H3V21h3v-12.52zm7.5 0h-2.98v12.52h3v-6.54c0-3.2 4.25-3.46 4.25 0v6.54h3v-7.54c0-6.48-7.25-6.24-7.25 0v1z" />
    </svg>
);

const GithubIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M12 2C6.48 2 2 6.48 2 12a10 10 0 006.84 9.49c.5.09.68-.22.68-.49v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.89 1.52 2.34 1.08 2.9.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.26-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02a9.53 9.53 0 012.5-.33 9.5 9.5 0 012.5.33c1.9-1.29 2.74-1.02 2.74-1.02.56 1.39.21 2.41.1 2.67.64.7 1.02 1.6 1.02 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.93.68 1.87v2.78c0 .27.18.59.69.49A10 10 0 0012 2z" />
    </svg>
);
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const sectionVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (


        <div className="app">
            <nav className="navbar">
                <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li><a href="#anasayfa" onClick={() => setMenuOpen(false)}>Ana Sayfa</a></li>
                    <li><a href="#benkimim" onClick={() => setMenuOpen(false)}>Ben Kimim</a></li>
                    <li><a href="#neler-yapabilirim" onClick={() => setMenuOpen(false)}>Neler Yapabilirim</a></li>
                    <li><a href="#portfolyo" onClick={() => setMenuOpen(false)}>Portfolyo</a></li>
                    <li><a href="#iletisim" onClick={() => setMenuOpen(false)}>İletişim</a></li>
                </ul>
            </nav>
            <header
                className="hero-section" id="anasayfa">
                <div className="overlay" />
                <div className="hero-content">
                    <img src="/ben.jpeg" alt="Ben" className="hero-photo" />
                    <h1 className="hero-title">
                        <Typewriter
                            words={['Ömer Faruk Yiğit']}
                            loop={0}  // sonsuz döngü
                            cursor
                            cursorStyle="_"
                            typeSpeed={100}
                            deleteSpeed={70}
                            delaySpeed={1500}
                        />
                    </h1>
                </div>
            </header>

            <main className="main-content">
                {/* Ben Kimim */}
                <motion.section
                    id="benkimim"
                    className="benkimim-section"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <div className="images-wrapper">
                        <img src="/yalova.jpg" alt="Yalova" className="img-left" />
                        <img src="/balikesir.png" alt="Balıkesir" className="img-right" />
                    </div>
                    <motion.div className="text-overlay" variants={itemVariants}>
                        <h2>Ben Kimim?</h2>
                        <p>
                            Merhaba ben <strong>Ömer Faruk Yiğit</strong>, 7 Temmuz 2005 tarihinde Yalova'da doğdum.
                            Balıkesir üniversitesi bilgisayar mühendisliği 2. sınıf öğrencisiyim.
                            Bilgisayarlara ve teknolojiye ilgiliyim.Amacım; öğrendiğim bilgileri gerçek hayattaki sorunlara çözüm üretecek uygulamalara dönüştürmek.
                            Ayrıca yeni teknolojileri öğrenmeye açık, üretmeyi ve paylaşmayı seven biriyim.
                        </p>
                    </motion.div>
                </motion.section>

                {/* Neler Yapabilirim */}
                <motion.section
                    id="neler-yapabilirim"
                    className="skills-section"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <h2>Neler Yapabilirim?</h2>
                    <motion.div
                        className="skills-grid"
                        variants={containerVariants}
                    >
                        <motion.div className="skill-card" variants={itemVariants}>
                            <img src="/csharp.png" alt="C# Logo" className="skill-img" />
                            <h3>C# ile Kodlama</h3>
                            <p>Masaüstü ve basit oyun uygulamaları geliştirebiliyorum.</p>
                        </motion.div>
                        <motion.div className="skill-card" variants={itemVariants}>
                            <img src="/js-css.jpg" alt="JS CSS" className="skill-img" />
                            <h3>JavaScript & CSS</h3>
                            <p>Modern web siteleri oluşturmak için temel JS ve CSS bilgim var.</p>
                        </motion.div>
                        <motion.div className="skill-card" variants={itemVariants}>
                            <img src="/python.jpeg" alt="Python" className="skill-img" />
                            <h3>Python</h3>
                            <p>Basit otomasyonlar ve temel algoritma çözümleri yazabiliyorum.</p>
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* Portfolyo */}
                <motion.section
                    id="portfolyo"
                    className="portfolio-section"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h2>Portfolyo</h2>
                    <motion.div className="portfolio-grid" variants={containerVariants}>
                        <motion.div className="portfolio-card" variants={itemVariants}>
                            <img src="/bankacilik.png" alt="Mobil Bankacılık" />
                            <h3>Mobil Bankacılık Uygulaması</h3>
                            <p>PyQt ile geliştirilmiş temel bankacılık işlemleri yapan masaüstü uygulama.</p>
                        </motion.div>
                        <motion.div className="portfolio-card" variants={itemVariants}>
                            <img src="/wordbenzeri.png" alt="Word Benzeri" />
                            <h3>Word Benzeri Uygulama</h3>
                            <p>Qt Designer kullanarak yazı düzenleme işlevleri olan bir uygulama tasarlandı.</p>
                        </motion.div>
                        <motion.div className="portfolio-card" variants={itemVariants}>
                            <img src="/sorubankasi.png" alt="Soru Bankası" />
                            <h3>Soru Bankası</h3>
                            <p>Sorular eklenip cevaplanabilen etkileşimli bir masaüstü uygulama.</p>
                        </motion.div>
                        <motion.div className="portfolio-card" variants={itemVariants}>
                            <img src="/fusion.jpg" alt="Fusion 360" />
                            <h3>Fusion ile Çizim</h3>
                            <p>Fusion 360 programıyla yaptığım 3D modelleme çalışmaları.</p>
                        </motion.div>
                        <motion.div className="portfolio-card" variants={itemVariants}>
                            <img src="/ardunio.jpeg" alt="Arduino Tarım Aracı" />
                            <h3>Arduino Tarım Aracı</h3>
                            <p>Arduino ile uzaktan kumandalı, tarım destekli bir araç tasarladım.</p>
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* İletişim */}
                <motion.section
                    id="iletisim"
                    className="section"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <h2>İletişim</h2>
                    <form>
                        <label>Ad Soyad</label>
                        <input type="text" name="name" placeholder="Ad Soyad" required />
                        <label>Email</label>
                        <input type="email" name="email" placeholder="E-posta adresiniz" required />
                        <label>Mesajınız</label>
                        <textarea name="message" placeholder="Mesajınızı yazın" required />
                        <button type="submit">Gönder</button>
                    </form>
                </motion.section>
            </main>

            <footer className="footer">
                <a href="https://www.instagram.com/omerrffaruk_/" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <InstagramIcon />
                </a>
                <a href="https://www.linkedin.com/in/ömerfarukyigit" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/omerfarukYigit77" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <GithubIcon />
                </a>
            </footer>
        </div>
    );
}

export default App;
