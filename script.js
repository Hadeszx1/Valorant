const quotes = {
    th: {
      funny: [
        "ยิงพลาดอีกละ เอาไม้ตีแทนมั้ย 🤣",
        "เพื่อน... นายเปิด map ด้วยเท้าหรอ?",
        "ขนาดบอทยังเบือนหน้าหนี"
      ],
      angry: [
        "เลิกเล่นเหอะ! ขัดขาทีมไปหมด!",
        "จะเล่นก็เล่นให้มันดีหน่อย!",
        "ไม่รู้จะด่าภาษาไหนแล้ว!"
      ],
      sarcastic: [
        "ว้าว ยิงโดนพื้นอีกแล้ว นายแม่งสุดยอด!",
        "อย่างน้อยนายก็ยังออนไลน์อยู่ 🤷‍♂️",
        "คนอย่างนาย หาไม่ได้ง่ายๆ... โคตรดี (แดกดัน)"
      ],
      polite: [
        "ไม่เป็นไร ลองใหม่ได้นะ 😇",
        "นายทำดีที่สุดแล้ว... มั้ง",
        "เอ่อ... เราคุยกันหลังเกมได้ไหม"
      ]
    },
    en: {
      funny: [
        "You aim like a potato! 🥔",
        "That move was… special. 😂",
        "Even bots feel sorry for us."
      ],
      angry: [
        "Uninstall. Now.",
        "Stop feeding and start thinking!",
        "You're the reason we can't have nice things!"
      ],
      sarcastic: [
        "Wow, amazing play... for a toddler.",
        "I didn't know you could be *that* bad.",
        "You're the MVP... Most Vexing Player."
      ],
      polite: [
        "It’s okay, just a bad round 😇",
        "Everyone makes mistakes... even you.",
        "We believe in you... sort of."
      ]
    },
    jp: {
      funny: ["君のプレイ、逆に才能あるかもね（笑）"],
      angry: ["真剣にやってよ！"],
      sarcastic: ["素晴らしいね...逆の意味で。"],
      polite: ["次はもっと良くなるかも😊"]
    },
    kr: {
      funny: ["AI가 너보다 잘함 ㅋㅋ"],
      angry: ["그만 좀 죽어!"],
      sarcastic: ["전설 찍었다~ (반대 의미로)"],
      polite: ["괜찮아, 다음엔 더 잘할 수 있어 😊"]
    },
    zh: {
      funny: ["你的操作真是搞笑 🤣"],
      angry: ["快點下線好嗎？"],
      sarcastic: ["哇～太棒了～（反話）"],
      polite: ["加油，你可以的！"]
    },
    hi: {
      funny: ["AI भी तुझसे बेहतर खेलेगा"],
      angry: ["Uninstall कर दे भाई!"],
      sarcastic: ["Oscar मिलना चाहिए इस performance के लिए!"],
      polite: ["कोई बात नहीं, अगली बार अच्छा होगा 😊"]
    },
    ru: {
      funny: ["Ты целишься, как с закрытыми глазами 😂"],
      angry: ["Удаляй игру немедленно!"],
      sarcastic: ["Гениально… если бы это была комедия."],
      polite: ["Ничего, со всеми бывает 😊"]
    }
  };
  
  function generateQuote() {
    const lang = document.getElementById("language").value;
    const tone = document.getElementById("tone").value;
  
    const quoteList = quotes[lang] && quotes[lang][tone];
  
    const quoteElement = document.getElementById("quote");
    const emojiElement = document.getElementById("emoji");
    const sound = document.getElementById("click-sound");
  
    if (!quoteList || quoteList.length === 0) {
      quoteElement.textContent = "ไม่มีประโยคในโหมดนี้";
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * quoteList.length);
    const quoteText = quoteList[randomIndex];
  
    // เล่นเสียง
    sound.play();
  
    // ใส่ข้อความ
    quoteElement.textContent = quoteText;
  
    // เอฟเฟกต์เด้ง
    quoteElement.classList.remove("bounce");
    void quoteElement.offsetWidth;
    quoteElement.classList.add("bounce");
  
    emojiElement.classList.remove("bounce");
    void emojiElement.offsetWidth;
    emojiElement.classList.add("bounce");
  
    // เปลี่ยน emoji แบบสุ่ม
    const emojis = ["🤣", "😡", "🙄", "😆", "🤬", "😂", "🤯"];
    emojiElement.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  
    // เปลี่ยนพื้นหลังแบบสุ่ม (เอฟเฟกต์เสริม)
    document.body.style.backgroundColor = getRandomDarkColor();
  }
  
  function getRandomDarkColor() {
    const r = Math.floor(Math.random() * 100);
    const g = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);
    return `rgb(${r}, ${g}, ${b})`;
  }