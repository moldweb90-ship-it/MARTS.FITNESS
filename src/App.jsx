import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Dumbbell,
  Facebook,
  Flame,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Play,
  Send,
  Wind,
  X,
  Zap,
  Droplets,
  Volume2,
  VolumeX
} from "lucide-react";
import jelezoImg from "../images/jelezo.jpg";
import boycovskiiImg from "../images/Boycovskii_klub.jpg";
import cycleRaveImg from "../images/CYCLE_RAVE.jpg";
import spaImg from "../images/SPA.jpg";
import openAirImg from "../images/OPEN_AIR.jpg";
import heroTrack from "./MARTS.FITNESS.mp3";

const translations = {
  ru: {
    nav_home: "ГЛАВНАЯ",
    nav_about: "О НАС",
    nav_zones: "ЗОНЫ",
    nav_contact: "ВРЫВАЙСЯ",
    hero_sub: "ЧЕКАНЫ. СКОРО ОТКРЫТИЕ.",
    hero_title: "САМЫЙ БОЛЬШОЙ.",
    hero_title_2: "САМЫЙ ДЕРЗКИЙ.",
    hero_cta: "ПОЛУЧИТЬ СПЕЦОФФЕР",
    scroll_text: "MARTS FITNESS CIOCANA /// 2500 M² ЧИСТОЙ ЭНЕРГИИ /// TECHNOGYM /// SPA LEVEL /// ROOF TOP CROSSFIT ///",
    stats_area: "ОБЩАЯ ПЛОЩАДЬ",
    stats_gym: "ТРЕНАЖЕРНЫЙ ЗАЛ",
    stats_spa: "SPA КОМПЛЕКС",
    concept_title: "НЕ ПРОСТО КАЧАЛКА",
    concept_text:
      "Мы строим экосистему. Тренируйся, восстанавливайся, живи. Это место силы, куда приходят не просто 'позаниматься', а за состоянием.",
    zones_title: "ЧТО ТЕБЯ ЖДЕТ",
    zone_gym_title: "ЖЕЛЕЗО",
    zone_gym_desc: "700 м² убойной мощи. Полный фарш от Technogym. Каждое движение бьет в цель.",
    zone_fight_title: "БОЙЦОВСКИЙ КЛУБ",
    zone_fight_desc: "Зона единоборств с про-инфраструктурой. Выпусти пар или поставь удар.",
    zone_cycle_title: "CYCLE RAVE",
    zone_cycle_desc: "Энергия, темнота, музыка и динамика. Полное погружение в ритм.",
    zone_spa_title: "SPA & RELAX",
    zone_spa_desc:
      "Целый этаж (650 м²) для ресета. Сауны, лаунж, кафе. Восстановись, чтобы рвать завтра.",
    zone_roof_title: "OPEN AIR",
    zone_roof_desc: "Терраса с видом. CrossFit под открытым небом и летний бар. Свобода как она есть.",
    welcome_family: "ДОБРО ПОЖАЛОВАТЬ В СЕМЬЮ",
    form_title: "ЗАКРЫТЫЙ PRESALE",
    form_subtitle:
      "Не будь как все. Запишись в лист ожидания и забери абонемент по самой низкой цене до открытия.",
    form_name: "Как зовут, атлет?",
    form_phone: "Твой номер",
    form_contact_pref: "Где ловить?",
    form_btn: "ЗАЛЕТЕТЬ В СПИСОК 🚀",
    modal_title: "ТВОЙ ШАНС",
    modal_sub: "Оставь заявку сейчас. Зафиксируй лучшую цену до официального старта продаж.",
    footer_addr: "Кишинев, Чеканы",
    footer_phone: "+373 61 200 100",
    footer_rights: "© 2024 MARTS FITNESS. LEGEND LOADING."
  },
  ro: {
    nav_home: "PRINCIPALA",
    nav_about: "DESPRE",
    nav_zones: "ZONE",
    nav_contact: "INTRĂ",
    hero_sub: "CIOCANA. DESCHIDEREA ÎN CURÂND.",
    hero_title: "CEL MAI MARE.",
    hero_title_2: "CEL MAI TARE.",
    hero_cta: "IA OFERTA SPECIALĂ",
    scroll_text: "MARTS FITNESS CIOCANA /// 2500 M² ENERGIE PURĂ /// TECHNOGYM /// SPA LEVEL /// ROOF TOP CROSSFIT ///",
    stats_area: "SUPRAFAȚA TOTALĂ",
    stats_gym: "SALA DE FORȚĂ",
    stats_spa: "COMPLEX SPA",
    concept_title: "NU E DOAR O SALĂ",
    concept_text:
      "Construim un ecosistem. Antrenează-te, recuperează-te, trăiește. E locul puterii unde vii pentru o stare de spirit.",
    zones_title: "CE TE AȘTEAPTĂ",
    zone_gym_title: "FIER",
    zone_gym_desc: "700 m² de putere brută. Echipat complet Technogym. Eficiență maximă.",
    zone_fight_title: "FIGHT CLUB",
    zone_fight_desc: "Zona de arte marțiale pro. Descarcă energia sau perfecționează lovitura.",
    zone_cycle_title: "CYCLE RAVE",
    zone_cycle_desc: "Energie, muzică, dinamică. Imersiune totală în ritm.",
    zone_spa_title: "SPA & RELAX",
    zone_spa_desc:
      "Un etaj întreg (650 m²) pentru reset. Saune, lounge, bar. Recuperează-te pentru a rupe mâine.",
    zone_roof_title: "OPEN AIR",
    zone_roof_desc:
      "Terasă cu vedere. CrossFit sub cerul liber și bar de vară. Libertate pură.",
    welcome_family: "BINE AI VENIT ÎN FAMILIE",
    form_title: "PRESALE ÎNCHIS",
    form_subtitle:
      "Nu fi ca toți ceilalți. Intră în lista de așteptare și ia abonamentul la cel mai mic preț înainte de deschidere.",
    form_name: "Cum te numești?",
    form_phone: "Numărul tău",
    form_contact_pref: "Unde te găsim?",
    form_btn: "INTRĂ ÎN LISTĂ 🚀",
    modal_title: "ȘANSA TA",
    modal_sub: "Aplică acum. Fixează cel mai bun preț înainte de startul oficial al vânzărilor.",
    footer_addr: "Chișinău, Ciocana",
    footer_phone: "+373 61 200 100",
    footer_rights: "© 2024 MARTS FITNESS. LEGEND LOADING."
  }
};

const MartsLanding = () => {
  const [lang, setLang] = useState("ru");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioReady, setAudioReady] = useState(false);
  const [wasPlayingBeforeVideo, setWasPlayingBeforeVideo] = useState(false);
  const [waitingForGesture, setWaitingForGesture] = useState(false);
  const audioRef = useRef(null);
  const targetVolume = 0.45;
  const playAttempts = useRef(0);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const audio = new Audio(heroTrack);
    audio.loop = true;
    audio.volume = 0;
    audio.autoplay = true;
    audioRef.current = audio;

    const tryPlay = async () => {
      if (!audioRef.current) return;
      playAttempts.current += 1;
      audioRef.current.volume = 0;
      try {
        await audioRef.current.play();
        fadeIn();
        setIsAudioPlaying(true);
        setWaitingForGesture(false);
        setAudioReady(true);
        return true;
      } catch {
        setIsAudioPlaying(false);
        setWaitingForGesture(true);
        setAudioReady(true);
        return false;
      }
    };

    const fadeIn = () => {
      if (!audioRef.current) return;
      const steps = 12;
      const step = targetVolume / steps;
      let current = 0;
      const id = setInterval(() => {
        if (!audioRef.current) {
          clearInterval(id);
          return;
        }
        current += step;
        if (current >= targetVolume) {
          audioRef.current.volume = targetVolume;
          clearInterval(id);
        } else {
          audioRef.current.volume = current;
        }
      }, 80);
    };

    const cleanup = () => {
      document.removeEventListener("click", onFirstInteraction);
      document.removeEventListener("touchstart", onFirstInteraction);
      document.removeEventListener("keydown", onFirstInteraction);
      document.removeEventListener("scroll", onFirstInteraction);
      window.removeEventListener("focus", onWindowFocus);
      document.removeEventListener("visibilitychange", onVisibility);
      document.removeEventListener("pointermove", onPointerMove);
    };

    const startAudio = async () => {
      const ok = await tryPlay();
      if (!ok) {
        // retry a couple times with small delay
        setTimeout(() => tryPlay(), 400);
        setTimeout(() => tryPlay(), 1200);
      } else {
        cleanup();
      }
    };

    const onFirstInteraction = () => {
      startAudio().finally(cleanup);
    };

    const onWindowFocus = () => startAudio();
    const onVisibility = () => {
      if (document.visibilityState === "visible") startAudio();
    };
    const onPointerMove = () => startAudio();

    // попытка автозапуска сразу
    startAudio();

    // и страховка — запуск после первого взаимодействия, если браузер заблокировал
    document.addEventListener("click", onFirstInteraction, { once: true });
    document.addEventListener("touchstart", onFirstInteraction, { once: true });
    document.addEventListener("keydown", onFirstInteraction, { once: true });
    document.addEventListener("scroll", onFirstInteraction, { once: true });
    document.addEventListener("pointermove", onPointerMove, { once: true });
    window.addEventListener("focus", onWindowFocus);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cleanup();
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (showVideo) {
      if (!audio.paused) {
        setWasPlayingBeforeVideo(true);
        audio.pause();
        setIsAudioPlaying(false);
      } else {
        setWasPlayingBeforeVideo(false);
      }
    } else if (wasPlayingBeforeVideo) {
      audio
        .play()
        .then(() => setIsAudioPlaying(true))
        .catch(() => setIsAudioPlaying(false));
      setWasPlayingBeforeVideo(false);
    }
  }, [showVideo, wasPlayingBeforeVideo]);

  const toggleLang = () => setLang((prev) => (prev === "ru" ? "ro" : "ru"));

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      waitingForGesture && setWaitingForGesture(false);
      audio.volume = 0;
      audio
        .play()
        .then(() => {
          const steps = 12;
          const step = targetVolume / steps;
          let current = 0;
          const id = setInterval(() => {
            if (!audioRef.current) {
              clearInterval(id);
              return;
            }
            current += step;
            if (current >= targetVolume) {
              audioRef.current.volume = targetVolume;
              clearInterval(id);
            } else {
              audioRef.current.volume = current;
            }
          }, 80);
          setIsAudioPlaying(true);
        })
        .catch(() => {
          setIsAudioPlaying(false);
          setWaitingForGesture(true);
        });
    } else {
      audio.pause();
      setIsAudioPlaying(false);
      setWaitingForGesture(false);
    }
  };

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-lime-400 selection:text-black">
      {showVideo && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-sm max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-lime-400 transition-colors"
            >
              <X size={40} />
            </button>
            <div className="w-full aspect-[9/16] bg-zinc-900 rounded-2xl overflow-hidden border-2 border-lime-400/50 shadow-[0_0_50px_rgba(132,204,22,0.3)]">
              <video
                src="https://www.dropbox.com/scl/fi/5th0r5ve9j3cg13welmn4/IMG_2043.MP4?rlkey=trwwmzqkf04bsn9qhytrnsx7c&st=uv9zgkxn&raw=1"
                className="w-full h-full object-cover"
                autoPlay
                controls
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      )}

      {showOfferModal && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in zoom-in duration-300">
          <div className="relative w-full max-w-md bg-zinc-900 border-2 border-lime-400 p-8 rounded-none md:rounded-3xl shadow-[0_0_100px_rgba(132,204,22,0.2)]">
            <button
              onClick={() => setShowOfferModal(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-8">
              <h3 className="text-4xl font-black italic uppercase text-white mb-2 tracking-tighter">
                {t.modal_title}
              </h3>
              <p className="text-lime-400 font-bold uppercase text-xs tracking-widest">{t.modal_sub}</p>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                className="w-full bg-black border border-zinc-700 text-white p-4 focus:outline-none focus:border-lime-400 transition-colors font-bold placeholder-zinc-700"
                placeholder={t.form_name}
              />
              <input
                type="tel"
                className="w-full bg-black border border-zinc-700 text-white p-4 focus:outline-none focus:border-lime-400 transition-colors font-bold placeholder-zinc-700"
                placeholder={t.form_phone}
              />

              <div className="flex gap-2 pt-2">
                <a
                  href="https://t.me/+37361200100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 border border-zinc-700 hover:border-lime-400 hover:text-lime-400 transition-all flex justify-center items-center gap-2 text-sm font-bold uppercase cursor-pointer text-white no-underline"
                >
                  <Send size={14} /> Telegram
                </a>
                <a
                  href="tel:+37361200100"
                  className="flex-1 py-3 border border-zinc-700 hover:border-lime-400 hover:text-lime-400 transition-all flex justify-center items-center gap-2 text-sm font-bold uppercase cursor-pointer text-white no-underline"
                >
                  <Phone size={14} /> Phone
                </a>
              </div>

              <button
                type="button"
                className="group w-full relative overflow-hidden bg-lime-400 text-black font-black text-xl md:text-2xl uppercase py-6 px-4 hover:bg-white hover:scale-[1.02] transition-all duration-300 tracking-widest mt-8 shadow-[0_0_20px_rgba(132,204,22,0.5)] hover:shadow-[0_0_40px_rgba(255,255,255,0.7)]"
              >
                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[20deg] animate-shine" />
                <span className="relative z-10 flex items-center justify-center gap-3 whitespace-nowrap">
                  {t.form_btn}
                </span>
              </button>
            </form>
          </div>
        </div>
      )}

      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div
            className="text-2xl md:text-3xl font-black italic tracking-tighter text-white cursor-pointer select-none"
            onClick={() => scrollToSection("home")}
          >
            MARTS<span className="text-lime-400">.FITNESS</span>
          </div>

          <div className="hidden md:flex space-x-8 text-sm font-bold tracking-widest">
            <button onClick={() => scrollToSection("home")} className="hover:text-lime-400 transition-colors uppercase">
              {t.nav_home}
            </button>
            <button
              onClick={() => scrollToSection("concept")}
              className="hover:text-lime-400 transition-colors uppercase"
            >
              {t.nav_about}
            </button>
            <button onClick={() => scrollToSection("zones")} className="hover:text-lime-400 transition-colors uppercase">
              {t.nav_zones}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-lime-400 transition-colors uppercase"
            >
              {t.nav_contact}
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="px-3 py-1 border border-white/20 rounded-full text-xs font-bold hover:bg-white hover:text-black transition-all"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={toggleAudio}
              className="px-3 py-1 border border-white/20 rounded-full text-xs font-bold hover:bg-white hover:text-black transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!audioReady && !waitingForGesture}
            >
              {isAudioPlaying || waitingForGesture ? <Volume2 size={16} /> : <VolumeX size={16} />}
              {lang === "ru"
                ? isAudioPlaying || waitingForGesture
                  ? "ЗВУК ВКЛ"
                  : "ЗВУК ВЫКЛ"
                : isAudioPlaying || waitingForGesture
                  ? "SUNET PORNIT"
                  : "SUNET OPRIT"}
            </button>
            <button onClick={() => setIsMenuOpen((prev) => !prev)} className="md:hidden text-white">
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 text-3xl font-black italic">
          <button onClick={() => scrollToSection("home")} className="hover:text-lime-400">
            {t.nav_home}
          </button>
          <button onClick={() => scrollToSection("concept")} className="hover:text-lime-400">
            {t.nav_about}
          </button>
          <button onClick={() => scrollToSection("zones")} className="hover:text-lime-400">
            {t.nav_zones}
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-lime-400 border-b-4 border-lime-400 pb-2">
            {t.nav_contact}
          </button>
        </div>
      )}

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center md:text-left mt-20">
          <div className="inline-block px-4 py-2 border border-lime-400/50 rounded-full mb-6 backdrop-blur-sm animate-pulse">
            <span className="text-lime-400 font-bold tracking-widest text-xs md:text-sm uppercase">{t.hero_sub}</span>
          </div>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black italic tracking-tighter leading-[0.9] mb-6">
            {t.hero_title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600">{t.hero_title_2}</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-6 mt-12">
            <button
              onClick={() => setShowOfferModal(true)}
              className="group relative px-8 py-4 bg-lime-400 text-black font-black text-lg skew-x-[-10deg] hover:bg-white transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(132,204,22,0.6)]"
            >
              <span className="block skew-x-[10deg] flex items-center gap-2">
                {t.hero_cta} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-4 cursor-pointer group hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <Play size={20} fill="currentColor" />
              </div>
              <span className="text-sm font-bold tracking-widest opacity-80 group-hover:opacity-100">WATCH TEASER</span>
            </button>
          </div>
        </div>
      </section>

      <div className="bg-lime-400 text-black py-3 overflow-hidden whitespace-nowrap border-y-4 border-black relative z-20 rotate-1 scale-105">
        <div className="animate-marquee inline-block font-black text-xl tracking-widest">
          {t.scroll_text} &nbsp; {t.scroll_text} &nbsp; {t.scroll_text}
        </div>
      </div>

      <section className="py-20 bg-zinc-900 border-b border-zinc-800 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <div className="text-6xl md:text-8xl font-black text-white mb-2">
                2500<span className="text-lime-400 text-4xl">m²</span>
              </div>
              <div className="text-sm font-bold text-gray-400 tracking-widest">{t.stats_area}</div>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-black text-white mb-2">
                700<span className="text-lime-400 text-4xl">m²</span>
              </div>
              <div className="text-sm font-bold text-gray-400 tracking-widest">{t.stats_gym}</div>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-black text-white mb-2">
                650<span className="text-lime-400 text-4xl">m²</span>
              </div>
              <div className="text-sm font-bold text-gray-400 tracking-widest">{t.stats_spa}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="concept" className="py-24 relative overflow-hidden scroll-mt-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-lime-400/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase italic">{t.concept_title}</h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light border-l-4 border-lime-400 pl-6">
              {t.concept_text}
            </p>
          </div>
        </div>
      </section>

      <section id="zones" className="py-20 bg-black scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl md:text-6xl font-black mb-16 uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
            {t.zones_title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative h-96 overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-lime-400 transition-colors">
              <div
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 opacity-40 group-hover:opacity-60 group-hover:scale-110"
                style={{ backgroundImage: `url(${jelezoImg})` }}
              />
              <div className="absolute bottom-0 left-0 p-8">
                <Dumbbell className="text-lime-400 mb-4 w-10 h-10" />
                <h3 className="text-2xl font-black uppercase mb-2">{t.zone_gym_title}</h3>
                <p className="text-gray-400 text-sm">{t.zone_gym_desc}</p>
              </div>
            </div>

            <div className="group relative h-96 overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-lime-400 transition-colors">
              <div
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 opacity-40 group-hover:opacity-60 group-hover:scale-110"
                style={{ backgroundImage: `url(${boycovskiiImg})` }}
              />
              <div className="absolute bottom-0 left-0 p-8">
                <Flame className="text-lime-400 mb-4 w-10 h-10" />
                <h3 className="text-2xl font-black uppercase mb-2">{t.zone_fight_title}</h3>
                <p className="text-gray-400 text-sm">{t.zone_fight_desc}</p>
              </div>
            </div>

            <div className="group relative h-96 overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-lime-400 transition-colors">
              <div
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 opacity-40 group-hover:opacity-60 group-hover:scale-110"
                style={{ backgroundImage: `url(${cycleRaveImg})` }}
              />
              <div className="absolute bottom-0 left-0 p-8">
                <Zap className="text-lime-400 mb-4 w-10 h-10" />
                <h3 className="text-2xl font-black uppercase mb-2">{t.zone_cycle_title}</h3>
                <p className="text-gray-400 text-sm">{t.zone_cycle_desc}</p>
              </div>
            </div>

            <div className="group relative h-96 overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-lime-400 transition-colors lg:col-span-2">
              <div
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 opacity-40 group-hover:opacity-60 group-hover:scale-110"
                style={{ backgroundImage: `url(${spaImg})` }}
              />
              <div className="absolute bottom-0 left-0 p-8 w-full md:w-2/3">
                <Droplets className="text-lime-400 mb-4 w-10 h-10" />
                <h3 className="text-3xl font-black uppercase mb-2">{t.zone_spa_title}</h3>
                <p className="text-gray-400">{t.zone_spa_desc}</p>
              </div>
            </div>

            <div className="group relative h-96 overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-lime-400 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 to-black opacity-80" />
              <div
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 opacity-40 group-hover:opacity-60 group-hover:scale-110"
                style={{ backgroundImage: `url(${openAirImg})` }}
              />
              <div className="absolute bottom-0 left-0 p-8">
                <Wind className="text-lime-400 mb-4 w-10 h-10" />
                <h3 className="text-2xl font-black uppercase mb-2 text-lime-400">{t.zone_roof_title}</h3>
                <p className="text-gray-400 text-sm">{t.zone_roof_desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <span className="text-[20vw] font-black text-white whitespace-nowrap">MARTS</span>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-lime-400 to-white animate-pulse mb-4">
            {t.welcome_family}
          </h2>
          <div className="h-1 w-32 bg-lime-400 mx-auto transform -skew-x-12" />
        </div>
      </section>

      <section id="contact" className="py-24 bg-zinc-950 relative scroll-mt-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-16 rounded-3xl shadow-2xl shadow-lime-900/20 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-lime-400 to-transparent" />

            <div className="text-center mb-12 relative z-10">
              <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">{t.form_title}</h2>
              <p className="text-gray-400 md:text-lg">{t.form_subtitle}</p>
            </div>

            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-lime-400 uppercase mb-2 tracking-widest">
                    {t.form_name}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black border border-zinc-700 text-white p-4 focus:outline-none focus:border-lime-400 transition-colors text-lg font-bold placeholder-zinc-700"
                    placeholder="ALEX"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-lime-400 uppercase mb-2 tracking-widest">
                    {t.form_phone}
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-black border border-zinc-700 text-white p-4 focus:outline-none focus:border-lime-400 transition-colors text-lg font-bold placeholder-zinc-700"
                    placeholder="+373 6X XX XX XX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-lime-400 uppercase mb-4 tracking-widest">
                  {t.form_contact_pref}
                </label>
                <div className="flex gap-4">
                  <label className="flex-1 cursor-pointer">
                    <input type="radio" name="contact" className="peer sr-only" />
                    <div className="flex items-center justify-center gap-2 p-4 border border-zinc-700 bg-black peer-checked:bg-lime-400 peer-checked:text-black peer-checked:border-lime-400 transition-all font-bold uppercase hover:bg-zinc-800">
                      <Send size={18} /> Telegram
                    </div>
                  </label>
                  <label className="flex-1 cursor-pointer">
                    <input type="radio" name="contact" className="peer sr-only" />
                    <div className="flex items-center justify-center gap-2 p-4 border border-zinc-700 bg-black peer-checked:bg-lime-400 peer-checked:text-black peer-checked:border-lime-400 transition-all font-bold uppercase hover:bg-zinc-800">
                      <Phone size={18} /> Phone
                    </div>
                  </label>
                </div>
              </div>

              <button
                type="button"
                className="group w-full relative overflow-hidden bg-lime-400 text-black font-black text-xl md:text-2xl uppercase py-6 px-4 skew-x-[-10deg] hover:bg-white hover:scale-[1.02] transition-all duration-300 tracking-widest mt-8 shadow-[0_0_20px_rgba(132,204,22,0.5)] hover:shadow-[0_0_40px_rgba(255,255,255,0.7)]"
              >
                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[20deg] animate-shine" />
                <span className="block skew-x-[10deg] flex items-center justify-center gap-3 whitespace-nowrap">
                  {t.form_btn}
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-zinc-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-black italic">
              MARTS<span className="text-lime-400">.FITNESS</span>
            </div>

            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/martsfitness.md/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-lime-400 hover:text-black transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/share/17ZsRUWU2K/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-lime-400 hover:text-black transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://t.me/+37361200100"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-lime-400 hover:text-black transition-colors"
              >
                <Send size={20} />
              </a>
              <a
                href="tel:+37361200100"
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-lime-400 hover:text-black transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>

            <div className="text-right">
              <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400 font-bold justify-center md:justify-end mb-2">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-lime-400" />
                  <a href="tel:+37361200100" className="hover:text-lime-400 transition-colors">
                    {t.footer_phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-lime-400" />
                  {t.footer_addr}
                </div>
              </div>
              <p className="text-zinc-600 text-xs">{t.footer_rights}</p>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes shine {
          0% { left: -100%; opacity: 0; }
          20% { left: 100%; opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        .animate-shine {
          animation: shine 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default MartsLanding;

