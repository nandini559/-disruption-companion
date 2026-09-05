import { useState, useEffect } from "react";
import type { Language } from "../data/disruptions";
import type { ResolvedDisruption } from "../types/disruption";

interface PassengerTabletViewProps {
    activeDisruption?: ResolvedDisruption | null;
}

export function PassengerTabletView({ activeDisruption }: PassengerTabletViewProps) {
    const [selectedLang, setSelectedLang] = useState<Language>(
        activeDisruption?.language || "en"
    );
    const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

<<<<<<< HEAD
  // Cancel speech synthesis when unmounting or switching languages
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "speechSynthesis" in window
    ) {
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();

        console.log(
          "Available speech voices:",
          voices.map((voice) => ({
            name: voice.name,
            lang: voice.lang,
            localService: voice.localService,
          }))
        );
      };

      // Load immediately
      loadVoices();

      // Chrome may load voices later
      window.speechSynthesis.addEventListener(
        "voiceschanged",
        loadVoices
      );

      return () => {
        window.speechSynthesis.removeEventListener(
          "voiceschanged",
          loadVoices
        );
      };
    }
  }, []);

  // Retrieve current language explanation from activeDisruption or fallback
  // const currentScenario = activeDisruption?.scenario;
  // const currentExplanation = currentScenario
  //   ? currentScenario.explanations[selectedLang] || currentScenario.explanations.en
  //   : {
  //     title: "Service Delayed • Toy Train #52541",
  //     explanation:
  //       "Your train to Darjeeling is delayed due to heavy monsoon rainfall and track clearance near Batasia Loop.",
  //     action: "Please wait in the station waiting hall or explore alternate transport at Gate 2.",
  //   };


  const fallbackExplanations: Record<
    Language,
    {
      title: string;
      explanation: string;
      action: string;
    }
  > = {
    en: {
      title: "Service Delayed • Toy Train #52541",
      explanation:
        "Your train to Darjeeling is delayed due to heavy monsoon rainfall and track clearance near Batasia Loop.",
      action:
        "Please wait in the station waiting hall or explore alternate transport at Gate 2.",
    },

    hi: {
      title: "सेवा में देरी • टॉय ट्रेन #52541",
      explanation:
        "भारी मानसूनी बारिश और बतासिया लूप के पास ट्रैक साफ करने के कारण दार्जिलिंग जाने वाली आपकी ट्रेन में देरी हो रही है।",
      action:
        "कृपया स्टेशन के प्रतीक्षालय में प्रतीक्षा करें या गेट 2 से वैकल्पिक परिवहन की सुविधा लें।",
    },

    bn: {
      title: "পরিষেবায় বিলম্ব • টয় ট্রেন #৫২৫৪১",
      explanation:
        "ভারী বর্ষণ এবং বাতাসিয়া লুপের কাছে রেলপথ পরিষ্কার করার কারণে দার্জিলিং যাওয়ার আপনার ট্রেনটি বিলম্বিত হয়েছে।",
      action:
        "অনুগ্রহ করে স্টেশনের অপেক্ষা কক্ষে অপেক্ষা করুন অথবা গেট ২ থেকে বিকল্প পরিবহন ব্যবহার করুন।",
    },

    ne: {
      title: "सेवा ढिलो • टॉय ट्रेन #५२५४१",
      explanation:
        "भारी मनसुन वर्षा र बतासिया लूप नजिकको रेलमार्ग सफा गर्ने कामका कारण दार्जिलिङ जाने तपाईंको रेल ढिलो भएको छ।",
      action:
        "कृपया स्टेशनको प्रतीक्षालयमा पर्खनुहोस् वा गेट २ बाट वैकल्पिक यातायात प्रयोग गर्नुहोस्।",
    },
  };

  const currentScenario = activeDisruption?.scenario;

  const currentExplanation =
    currentScenario?.explanations[selectedLang] ??
    fallbackExplanations[selectedLang] ??
    currentScenario?.explanations.en ??
    fallbackExplanations.en;

  console.log("Selected language:", selectedLang);
  console.log("Current scenario:", currentScenario);
  console.log("Available explanations:", currentScenario?.explanations);
  console.log("Current explanation:", currentExplanation);

  const currentAction = activeDisruption?.recommendedAction || "WAIT";

  // Real Web Speech API Implementation
  // const handleToggleSpeech = () => {
  //   if (typeof window === "undefined" || !("speechSynthesis" in window)) {
  //     alert("Web Speech API is not supported in this browser.");
  //     return;
  //   }

  const handleToggleSpeech = () => {
    if (
      typeof window === "undefined" ||
      !("speechSynthesis" in window)
    ) {
      alert("Speech synthesis is not supported in this browser.");
      return;
    }

    const synth = window.speechSynthesis;

    // Stop currently playing speech
    if (isPlayingAudio) {
      synth.cancel();
      setIsPlayingAudio(false);
      return;
    }

    // Stop any previous speech
    synth.cancel();

    const textToSpeak =
      `${currentExplanation.title}. ` +
      `${currentExplanation.explanation}. ` +
      `${currentExplanation.action}`;

    const langMap: Record<Language, string> = {
      en: "en-IN",
      hi: "hi-IN",
      bn: "bn-IN",
      ne: "ne-NP",
    };

    const targetLang = langMap[selectedLang];

    console.log("=================================");
    console.log("Selected language:", selectedLang);
    console.log("Requested language:", targetLang);
    console.log("Text:", textToSpeak);

    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    utterance.lang = targetLang;
    utterance.rate = 0.85;
    utterance.pitch = 1;
    utterance.volume = 1;

    const voices = synth.getVoices();

    console.log(
      "Available voices:",
      voices.map((voice) => ({
        name: voice.name,
        lang: voice.lang,
      }))
    );

    // 1. Try exact language
    let matchingVoice = voices.find(
      (voice) =>
        voice.lang.toLowerCase() === targetLang.toLowerCase()
    );

    // 2. Try language prefix
    if (!matchingVoice) {
      const languagePrefix = targetLang
        .split("-")[0]
        .toLowerCase();

      matchingVoice = voices.find((voice) =>
        voice.lang.toLowerCase().startsWith(languagePrefix)
      );
    }

    if (matchingVoice) {
      utterance.voice = matchingVoice;

      console.log(
        "✅ Selected voice:",
        matchingVoice.name,
        matchingVoice.lang
      );
    } else {
      console.error(
        `❌ No voice available for ${selectedLang} (${targetLang})`
      );

      if (selectedLang === "bn") {
        alert(
          "Bengali speech voice is not installed/available in this browser."
        );
      }

      if (selectedLang === "ne") {
        alert(
          "Nepali speech voice is not installed/available in this browser."
        );
      }

      return;
    }

    utterance.onstart = () => {
      console.log("🔊 Speech started");
      setIsPlayingAudio(true);
    };

    utterance.onend = () => {
      console.log("✅ Speech finished");
      setIsPlayingAudio(false);
    };

    utterance.onerror = (event) => {
      console.error("❌ Speech synthesis error:", event);
      setIsPlayingAudio(false);
    };

    synth.speak(utterance);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Live Kiosk Header Bar */}
      <div className="bg-primary text-on-primary rounded-xl p-space-md shadow-md mb-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-sm">
          <div className="relative flex h-4 w-4 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary-fixed"></span>
          </div>
          <div>
            <span className="font-headline-sm text-headline-sm uppercase tracking-wider text-secondary-fixed font-bold">
              Live Station Update
            </span>
            <span className="font-headline-sm text-headline-sm text-on-primary font-bold sm:ml-space-xs block sm:inline">
              Ghum Railway Station (2,258 m)
            </span>
          </div>
        </div>
        <div className="flex items-center gap-space-sm bg-primary-container px-space-md py-space-xs rounded-lg">
          <span className="material-symbols-outlined text-primary-fixed text-[20px]">
            schedule
          </span>
          <span className="font-label-lg text-label-lg text-primary-fixed font-bold">
            14:15 IST
          </span>
          <span className="font-label-sm text-label-sm text-on-primary-container uppercase px-2 py-0.5 rounded bg-surface-container-highest/20 ml-2 font-semibold">
            Display Node #04
          </span>
        </div>
      </div>

      {/* Prominent Multilingual Language Switcher (56px height targets) */}
      <section
        aria-label="Language Selector"
        className="w-full bg-surface-container-high rounded-xl p-space-xs shadow-sm mb-space-xl"
      >
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-space-xs"
          role="tablist"
        >
          <button
            onClick={() => setSelectedLang("en")}
            type="button"
            role="tab"
            aria-selected={selectedLang === "en"}
            className={`h-14 rounded-lg font-headline-sm text-headline-sm font-bold flex items-center justify-center gap-space-xs transition-all shadow-sm ${selectedLang === "en"
              ? "bg-primary text-on-primary"
              : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
              }`}
          >
            <span className="text-xl">🇬🇧</span>
            <span>English</span>
          </button>

          <button
            onClick={() => setSelectedLang("hi")}
            type="button"
            role="tab"
            aria-selected={selectedLang === "hi"}
            className={`h-14 rounded-lg font-headline-sm text-headline-sm font-bold flex items-center justify-center gap-space-xs transition-all ${selectedLang === "hi"
              ? "bg-primary text-on-primary"
              : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
              }`}
          >
            <span className="text-xl">🇮🇳</span>
            <span>हिंदी (Hindi)</span>
          </button>

          <button
            onClick={() => setSelectedLang("bn")}
            type="button"
            role="tab"
            aria-selected={selectedLang === "bn"}
            className={`h-14 rounded-lg font-headline-sm text-headline-sm font-bold flex items-center justify-center gap-space-xs transition-all ${selectedLang === "bn"
              ? "bg-primary text-on-primary"
              : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
              }`}
          >
            <span className="text-xl">🇧🇩</span>
            <span>বাংলা (Bengali)</span>
          </button>

          <button
            onClick={() => setSelectedLang("ne")}
            type="button"
            role="tab"
            aria-selected={selectedLang === "ne"}
            className={`h-14 rounded-lg font-headline-sm text-headline-sm font-bold flex items-center justify-center gap-space-xs transition-all ${selectedLang === "ne"
              ? "bg-primary text-on-primary"
              : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
              }`}
          >
            <span className="text-xl">🇳🇵</span>
            <span>नेपाली (Nepali)</span>
          </button>
        </div>
      </section>

      {/* Main Announcement Hero Card */}
      <section className="bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden mb-space-2xl">
        {/* Severity Banner Strip */}
        <div className="bg-tertiary-container text-tertiary-fixed p-space-md flex flex-wrap items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm">
            <span
              className="material-symbols-outlined text-[32px] text-tertiary-fixed animate-pulse"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              warning
            </span>
            <span className="font-headline-md text-headline-md font-bold tracking-wide uppercase">
              {currentExplanation.title}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {activeDisruption?.scenario.severity && (
              <span className="bg-surface-container-lowest/20 px-space-sm py-1 rounded text-tertiary-fixed font-label-sm text-label-sm uppercase font-bold">
                Severity: {activeDisruption.scenario.severity}
              </span>
            )}
            <div className="bg-surface-container-lowest/15 px-space-md py-space-xs rounded-lg text-tertiary-fixed font-label-lg text-label-lg uppercase tracking-wider font-bold">
              Platform 1 Trackside
            </div>
          </div>
        </div>

        {/* Heritage Route Meta & Announcement Core */}
        <div className="p-space-lg lg:p-space-xl flex flex-col gap-space-lg">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-space-xs bg-surface-container-low p-space-md rounded-xl">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-secondary text-[24px]">
                train
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Ghum → Darjeeling Heritage Corridor
              </span>
            </div>
            <div className="font-label-lg text-label-lg text-on-surface-variant font-semibold">
              Action Mode: <span className="font-bold text-primary">{currentAction}</span>
            </div>
          </div>

          {/* Main Announcement Text */}
          <div className="space-y-space-md py-space-xs">
            <h1 className="font-display-lg text-2xl sm:text-3xl lg:text-display-lg text-primary leading-tight font-bold">
              {currentExplanation.explanation}
            </h1>
            <div className="inline-flex items-center gap-space-sm bg-error-container text-on-error-container px-space-md py-space-sm rounded-xl">
              <span
                className="material-symbols-outlined text-[28px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                info
              </span>
              <p className="font-headline-md text-headline-md font-bold">
                {currentExplanation.action}
              </p>
            </div>
          </div>

          {/* Quick Audio Companion Player Widget (Real Web Speech) */}
          <div className="bg-surface-container p-space-md rounded-xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md">
            <div className="flex flex-col sm:flex-row sm:items-center gap-space-md">
              <button
                onClick={handleToggleSpeech}
                type="button"
                className={`h-14 px-space-lg rounded-xl text-on-primary transition-all flex items-center justify-center gap-space-sm shadow-md active:scale-95 shrink-0 font-bold ${isPlayingAudio
                  ? "bg-tertiary animate-pulse"
                  : "bg-primary hover:bg-primary-container"
                  }`}
              >
                <span
                  className="material-symbols-outlined text-[30px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
=======
    // Cancel speech synthesis when unmounting or switching languages
    useEffect(() => {
        return () => {
            if (typeof window !== "undefined" && "speechSynthesis" in window) {
                window.speechSynthesis.cancel();
            }
        };
    }, [selectedLang]);

    // Retrieve current language explanation from activeDisruption or fallback
    const currentScenario = activeDisruption?.scenario;
    const currentExplanation = currentScenario
        ? currentScenario.explanations[selectedLang] || currentScenario.explanations.en
        : {
            title: "Service Delayed • Toy Train #52541",
            explanation:
                "Your train to Darjeeling is delayed due to heavy monsoon rainfall and track clearance near Batasia Loop.",
            action: "Please wait in the station waiting hall or explore alternate transport at Gate 2.",
        };

    const currentAction = activeDisruption?.recommendedAction || "WAIT";

    // Real Web Speech API Implementation
    const handleToggleSpeech = () => {
        if (typeof window === "undefined" || !("speechSynthesis" in window)) {
            alert("Web Speech API is not supported in this browser environment.");
            return;
        }

        const synth = window.speechSynthesis;

        if (isPlayingAudio) {
            synth.cancel();
            setIsPlayingAudio(false);
            return;
        }

        synth.cancel(); // Stop any previous utterance

        const textToSpeak = `${currentExplanation.title}. ${currentExplanation.explanation}. ${currentExplanation.action}`;
        const utterance = new SpeechSynthesisUtterance(textToSpeak);

        // Map language code for SpeechSynthesis
        const langMap: Record<Language, string> = {
            en: "en-US",
            hi: "hi-IN",
            bn: "bn-IN",
            ne: "hi-IN", // Fallback for Devanagari script Nepali
        };

        utterance.lang = langMap[selectedLang] || "en-US";

        utterance.onend = () => {
            setIsPlayingAudio(false);
        };

        utterance.onerror = () => {
            setIsPlayingAudio(false);
        };

        setIsPlayingAudio(true);
        synth.speak(utterance);
    };
    5640
    return (
        <div className="flex flex-col w-full">
            {/* Live Kiosk Header Bar */}
            <div className="bg-primary text-on-primary rounded-xl p-space-md shadow-md mb-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-sm">
                    <div className="relative flex h-4 w-4 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary-fixed"></span>
                    </div>
                    <div>
                        <span className="font-headline-sm text-headline-sm uppercase tracking-wider text-secondary-fixed font-bold">
                            Live Station Update
                        </span>
                        <span className="font-headline-sm text-headline-sm text-on-primary font-bold sm:ml-space-xs block sm:inline">
                            Ghum Railway Station (2,258 m)
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-space-sm bg-primary-container px-space-md py-space-xs rounded-lg">
                    <span className="material-symbols-outlined text-primary-fixed text-[20px]">
                        schedule
                    </span>
                    <span className="font-label-lg text-label-lg text-primary-fixed font-bold">
                        14:15 IST
                    </span>
                    <span className="font-label-sm text-label-sm text-on-primary-container uppercase px-2 py-0.5 rounded bg-surface-container-highest/20 ml-2 font-semibold">
                        Display Node #04
                    </span>
                </div>
            </div>

            {/* Prominent Multilingual Language Switcher (56px height targets) */}
            <section
                aria-label="Language Selector"
                className="w-full bg-surface-container-high rounded-xl p-space-xs shadow-sm mb-space-xl"
            >
                <div
                    className="grid grid-cols-2 md:grid-cols-4 gap-space-xs"
                    role="tablist"
>>>>>>> 8b57b33456cea6952e66b581ed4a970f0c041e9e
                >
                    <button
                        onClick={() => setSelectedLang("en")}
                        type="button"
                        role="tab"
                        aria-selected={selectedLang === "en"}
                        className={`h-14 rounded-lg font-headline-sm text-headline-sm font-bold flex items-center justify-center gap-space-xs transition-all shadow-sm ${selectedLang === "en"
                                ? "bg-primary text-on-primary"
                                : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
                            }`}
                    >
                        <span className="text-xl">🇬🇧</span>
                        <span>English</span>
                    </button>

                    <button
                        onClick={() => setSelectedLang("hi")}
                        type="button"
                        role="tab"
                        aria-selected={selectedLang === "hi"}
                        className={`h-14 rounded-lg font-headline-sm text-headline-sm font-bold flex items-center justify-center gap-space-xs transition-all ${selectedLang === "hi"
                                ? "bg-primary text-on-primary"
                                : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
                            }`}
                    >
                        <span className="text-xl">🇮🇳</span>
                        <span>हिंदी (Hindi)</span>
                    </button>

                    <button
                        onClick={() => setSelectedLang("bn")}
                        type="button"
                        role="tab"
                        aria-selected={selectedLang === "bn"}
                        className={`h-14 rounded-lg font-headline-sm text-headline-sm font-bold flex items-center justify-center gap-space-xs transition-all ${selectedLang === "bn"
                                ? "bg-primary text-on-primary"
                                : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
                            }`}
                    >
                        <span className="text-xl">🇧🇩</span>
                        <span>বাংলা (Bengali)</span>
                    </button>

                    <button
                        onClick={() => setSelectedLang("ne")}
                        type="button"
                        role="tab"
                        aria-selected={selectedLang === "ne"}
                        className={`h-14 rounded-lg font-headline-sm text-headline-sm font-bold flex items-center justify-center gap-space-xs transition-all ${selectedLang === "ne"
                                ? "bg-primary text-on-primary"
                                : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
                            }`}
                    >
                        <span className="text-xl">🇳🇵</span>
                        <span>नेपाली (Nepali)</span>
                    </button>
                </div>
            </section>

            {/* Main Announcement Hero Card */}
            <section className="bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden mb-space-2xl">
                {/* Severity Banner Strip */}
                <div className="bg-tertiary-container text-tertiary-fixed p-space-md flex flex-wrap items-center justify-between gap-space-sm">
                    <div className="flex items-center gap-space-sm">
                        <span
                            className="material-symbols-outlined text-[32px] text-tertiary-fixed animate-pulse"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            warning
                        </span>
                        <span className="font-headline-md text-headline-md font-bold tracking-wide uppercase">
                            {currentExplanation.title}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        {activeDisruption?.scenario.severity && (
                            <span className="bg-surface-container-lowest/20 px-space-sm py-1 rounded text-tertiary-fixed font-label-sm text-label-sm uppercase font-bold">
                                Severity: {activeDisruption.scenario.severity}
                            </span>
                        )}
                        <div className="bg-surface-container-lowest/15 px-space-md py-space-xs rounded-lg text-tertiary-fixed font-label-lg text-label-lg uppercase tracking-wider font-bold">
                            Platform 1 Trackside
                        </div>
                    </div>
                </div>

                {/* Heritage Route Meta & Announcement Core */}
                <div className="p-space-lg lg:p-space-xl flex flex-col gap-space-lg">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-space-xs bg-surface-container-low p-space-md rounded-xl">
                        <div className="flex items-center gap-space-xs">
                            <span className="material-symbols-outlined text-secondary text-[24px]">
                                train
                            </span>
                            <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                                Ghum → Darjeeling Heritage Corridor
                            </span>
                        </div>
                        <div className="font-label-lg text-label-lg text-on-surface-variant font-semibold">
                            Action Mode: <span className="font-bold text-primary">{currentAction}</span>
                        </div>
                    </div>

                    {/* Main Announcement Text */}
                    <div className="space-y-space-md py-space-xs">
                        <h1 className="font-display-lg text-2xl sm:text-3xl lg:text-display-lg text-primary leading-tight font-bold">
                            {currentExplanation.explanation}
                        </h1>
                        <div className="inline-flex items-center gap-space-sm bg-error-container text-on-error-container px-space-md py-space-sm rounded-xl">
                            <span
                                className="material-symbols-outlined text-[28px]"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                info
                            </span>
                            <p className="font-headline-md text-headline-md font-bold">
                                {currentExplanation.action}
                            </p>
                        </div>
                    </div>

                    {/* Quick Audio Companion Player Widget (Real Web Speech) */}
                    <div className="bg-surface-container p-space-md rounded-xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-space-md">
                            <button
                                onClick={handleToggleSpeech}
                                type="button"
                                className={`h-14 px-space-lg rounded-xl text-on-primary transition-all flex items-center justify-center gap-space-sm shadow-md active:scale-95 shrink-0 font-bold ${isPlayingAudio
                                        ? "bg-tertiary animate-pulse"
                                        : "bg-primary hover:bg-primary-container"
                                    }`}
                            >
                                <span
                                    className="material-symbols-outlined text-[30px]"
                                    style={{ fontVariationSettings: "'FILL' 1" }}
                                >
                                    {isPlayingAudio ? "pause_circle" : "volume_up"}
                                </span>
                                <div className="text-left">
                                    <span className="font-headline-sm text-headline-sm block font-bold">
                                        {isPlayingAudio ? "Stop Audio" : `Listen (${selectedLang.toUpperCase()})`}
                                    </span>
                                    <span className="font-label-sm text-label-sm text-primary-fixed block font-normal">
                                        {isPlayingAudio
                                            ? "Speaking via Browser Voice..."
                                            : "Tap to hear Web Speech broadcast"}
                                    </span>
                                </div>
                            </button>

                            <div className="hidden sm:flex flex-col">
                                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">
                                    Local Station Audio Engine
                                </span>
                                <div className="flex items-center gap-1.5 mt-1">
                                    <span className="h-3 w-1 bg-secondary rounded-full animate-bounce"></span>
                                    <span
                                        className="h-5 w-1 bg-secondary rounded-full animate-bounce"
                                        style={{ animationDelay: "150ms" }}
                                    ></span>
                                    <span
                                        className="h-2 w-1 bg-secondary rounded-full animate-bounce"
                                        style={{ animationDelay: "300ms" }}
                                    ></span>
                                    <span
                                        className="h-4 w-1 bg-secondary rounded-full animate-bounce"
                                        style={{ animationDelay: "75ms" }}
                                    ></span>
                                    <span className="font-label-md text-label-md text-on-surface ml-2 font-medium">
                                        Native Web Speech Synthesizer
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                            <span className="material-symbols-outlined text-[18px] text-secondary">
                                graphic_eq
                            </span>
                            <span>100% Offline Speech Synthesis • Local Station PA</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Action Guidance Section */}
            <section className="flex flex-col gap-space-lg mb-space-2xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-xs">
                    <div>
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                            Passenger Protocol Guide
                        </span>
                        <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                            What Should You Do Now? / तपाईँले अहिले के गर्नुपर्छ?
                        </h2>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant font-semibold">
                        Recommended action highlighted: <strong>{currentAction}</strong>
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                    {/* Action 1: WAIT */}
                    <div
                        className={`p-space-lg rounded-xl shadow-md flex flex-col gap-space-sm border-t-4 border-primary transition-all ${currentAction === "WAIT"
                                ? "ring-4 ring-primary shadow-xl scale-[1.02] opacity-100 bg-surface-container-lowest"
                                : "opacity-75 bg-surface-container-low"
                            }`}
                    >
                        <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
                                <span className="material-symbols-outlined text-[24px]">
                                    chair
                                </span>
                            </div>
                            <span className="font-label-sm text-label-sm font-bold text-primary uppercase">
                                {currentAction === "WAIT" ? "RECOMMENDED" : "STEP 01"}
                            </span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                            1. Stay in the Waiting Hall
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                            Heated passenger waiting hall open with complimentary Darjeeling
                            black tea service at Platform 1.
                        </p>
                    </div>

                    {/* Action 2: ANNOUNCEMENT */}
                    <div
                        className={`p-space-lg rounded-xl shadow-md flex flex-col gap-space-sm border-t-4 border-secondary transition-all ${currentAction === "ANNOUNCEMENT"
                                ? "ring-4 ring-secondary shadow-xl scale-[1.02] opacity-100 bg-surface-container-lowest"
                                : "opacity-75 bg-surface-container-low"
                            }`}
                    >
                        <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold">
                                <span className="material-symbols-outlined text-[24px]">
                                    record_voice_over
                                </span>
                            </div>
                            <span className="font-label-sm text-label-sm font-bold text-secondary uppercase">
                                {currentAction === "ANNOUNCEMENT" ? "RECOMMENDED" : "STEP 02"}
                            </span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-secondary font-bold">
                            2. Listen for the Next Update
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                            Live station audio announcements will repeat every 15 minutes in
                            English, Hindi, Bengali &amp; Nepali.
                        </p>
                    </div>

                    {/* Action 3: ALTERNATIVE_TRANSPORT */}
                    <div
                        className={`p-space-lg rounded-xl shadow-md flex flex-col gap-space-sm border-t-4 border-tertiary-container transition-all ${currentAction === "ALTERNATIVE_TRANSPORT"
                                ? "ring-4 ring-tertiary-container shadow-xl scale-[1.02] opacity-100 bg-surface-container-lowest"
                                : "opacity-75 bg-surface-container-low"
                            }`}
                    >
                        <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold">
                                <span className="material-symbols-outlined text-[24px]">
                                    directions_bus
                                </span>
                            </div>
                            <span className="font-label-sm text-label-sm font-bold text-tertiary-container uppercase">
                                {currentAction === "ALTERNATIVE_TRANSPORT" ? "RECOMMENDED" : "STEP 03"}
                            </span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-tertiary-container font-bold">
                            3. Alternative Road Transport
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                            Pre-arranged Tata Sumo hill shuttles ready at Station Forecourt
                            Gate 2 for urgent travel to Darjeeling.
                        </p>
                    </div>

                    {/* Action 4: REFUND */}
                    <div
                        className={`p-space-lg rounded-xl shadow-md flex flex-col gap-space-sm border-t-4 border-primary-container transition-all ${currentAction === "REFUND"
                                ? "ring-4 ring-primary-container shadow-xl scale-[1.02] opacity-100 bg-surface-container-lowest"
                                : "opacity-75 bg-surface-container-low"
                            }`}
                    >
                        <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-lg bg-primary-fixed text-on-primary-fixed-variant flex items-center justify-center font-bold">
                                <span className="material-symbols-outlined text-[24px]">
                                    currency_rupee
                                </span>
                            </div>
                            <span className="font-label-sm text-label-sm font-bold text-primary-container uppercase">
                                {currentAction === "REFUND" ? "RECOMMENDED" : "STEP 04"}
                            </span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-primary-container font-bold">
                            4. Full Ticket Refund Option
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                            Counter 1 open for 100% full cash or UPI refund without any
                            cancellation fee charges.
                        </p>
                    </div>
                </div>
            </section>
        </div>
<<<<<<< HEAD
      </section>

      {/* Action Guidance Section */}
      <section className="flex flex-col gap-space-lg mb-space-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-xs">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
              Passenger Protocol Guide
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
              What Should You Do Now? / तपाईँले अहिले के गर्नुपर्छ?
            </h2>
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant font-semibold">
            Recommended action highlighted: <strong>{currentAction}</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {/* Action 1: WAIT */}
          <div
            className={`p-space-lg rounded-xl shadow-md flex flex-col gap-space-sm border-t-4 border-primary transition-all ${currentAction === "WAIT"
              ? "ring-4 ring-primary shadow-xl scale-[1.02] opacity-100 bg-surface-container-lowest"
              : "opacity-75 bg-surface-container-low"
              }`}
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[24px]">
                  chair
                </span>
              </div>
              <span className="font-label-sm text-label-sm font-bold text-primary uppercase">
                {currentAction === "WAIT" ? "RECOMMENDED" : "STEP 01"}
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
              1. Stay in the Waiting Hall
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Heated passenger waiting hall open with complimentary Darjeeling
              black tea service at Platform 1.
            </p>
          </div>

          {/* Action 2: ANNOUNCEMENT */}
          <div
            className={`p-space-lg rounded-xl shadow-md flex flex-col gap-space-sm border-t-4 border-secondary transition-all ${currentAction === "ANNOUNCEMENT"
              ? "ring-4 ring-secondary shadow-xl scale-[1.02] opacity-100 bg-surface-container-lowest"
              : "opacity-75 bg-surface-container-low"
              }`}
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[24px]">
                  record_voice_over
                </span>
              </div>
              <span className="font-label-sm text-label-sm font-bold text-secondary uppercase">
                {currentAction === "ANNOUNCEMENT" ? "RECOMMENDED" : "STEP 02"}
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-secondary font-bold">
              2. Listen for the Next Update
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Live station audio announcements will repeat every 15 minutes in
              English, Hindi, Bengali &amp; Nepali.
            </p>
          </div>

          {/* Action 3: ALTERNATIVE_TRANSPORT */}
          <div
            className={`p-space-lg rounded-xl shadow-md flex flex-col gap-space-sm border-t-4 border-tertiary-container transition-all ${currentAction === "ALTERNATIVE_TRANSPORT"
              ? "ring-4 ring-tertiary-container shadow-xl scale-[1.02] opacity-100 bg-surface-container-lowest"
              : "opacity-75 bg-surface-container-low"
              }`}
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[24px]">
                  directions_bus
                </span>
              </div>
              <span className="font-label-sm text-label-sm font-bold text-tertiary-container uppercase">
                {currentAction === "ALTERNATIVE_TRANSPORT" ? "RECOMMENDED" : "STEP 03"}
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-tertiary-container font-bold">
              3. Alternative Road Transport
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Pre-arranged Tata Sumo hill shuttles ready at Station Forecourt
              Gate 2 for urgent travel to Darjeeling.
            </p>
          </div>

          {/* Action 4: REFUND */}
          <div
            className={`p-space-lg rounded-xl shadow-md flex flex-col gap-space-sm border-t-4 border-primary-container transition-all ${currentAction === "REFUND"
              ? "ring-4 ring-primary-container shadow-xl scale-[1.02] opacity-100 bg-surface-container-lowest"
              : "opacity-75 bg-surface-container-low"
              }`}
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-primary-fixed text-on-primary-fixed-variant flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[24px]">
                  currency_rupee
                </span>
              </div>
              <span className="font-label-sm text-label-sm font-bold text-primary-container uppercase">
                {currentAction === "REFUND" ? "RECOMMENDED" : "STEP 04"}
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary-container font-bold">
              4. Full Ticket Refund Option
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Counter 1 open for 100% full cash or UPI refund without any
              cancellation fee charges.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
=======
    );
>>>>>>> 8b57b33456cea6952e66b581ed4a970f0c041e9e
}
