// ================= SOUND SETUP =================
const beepSound = new Audio("./sound/preview.mp3");
const typingSound = new Audio("./sound/typingsound.mp3");

// ================= ORIGINAL CODE =================

// Define problem sets
const paragraphProblems = [
{
id: 1,
title: "Bl@ck#H0l3$::C0$mic^Myst3r!e$",
description: "D!d y0u kn0w th@t bl@ck h0le$ c@n 'sp@gh3tt!fy' 0bj3ct$?? If y0u g0t t00 cl0s3, th3 !nt3n$3 gr@v!t@t!0n@l p^ll w0uld str3tch y0u l!k3 @ n00dl3!!! Th3 l@rg3st kn0wn bl@ck-h0l3 (T0N-618) h@$ @ m@$$ 0f 40 B!LL!0N $un$... & y3$—!t 3m!t$ H@wk!ng-r@d!@t!0n <sl0wly> ev@p0r@t!ng 0v3r tr!ll!0n$ 0f y3@r$..."
},
{
id: 2,
title: "Qu@ntum#C0mpuT!ng::Rev0luti0n++",
description: "Qu@ntum-c0mput3r$ c@n s0lv3 pr0bl3m$ !n $3c0nd$ th@t w0uld t@k3 cl@$$!c@l 0n3$ m!ll!0n$ 0f y3@r$!!! G00gl3'$ 'Sycam0re' c0mpl3t3d @ t@$k !n 200$—wh!ch w0uld t@k3 10,000 y3@r$ 0n @ sup3rc0mput3r... Qub!t$ ex!$t !n {mult!pl3} st@t3$ @t 0nc3???"
},
{
id: 3,
title: "AI@Cr3@t!v!ty::@rt+Mu$!c",
description: "AI-gen3r@t3d @rt h@$ $0ld f0r $432,500!!! 'Edm0nd d3 B3l@my' w@$ @uct!0n3d—& AI 3v3n c0mpl3t3d B33th0v3n'$ 10th Symph0ny... N0w AI c@n g3n3r@t3 @rt fr0m t3xt <pr0mpt$>, bl3nd!ng styl3$ & !d3@$ !nt0 hypr!d m@$t3rp!3c3$..."
},
{
id: 4,
title: "5G&6G::Sp33d-R@c3!!!",
description: "5G !$ f@$t—but 6G?? 100x f@$t3r!!! Im@g!n3 h0l0gr@ph!c c@ll$ !n r3@l-t!m3... Sc!3nt!$t$ pr3d!ct hum@n-b0d!3$ c0uld @ct @$ @nt3nn@$!!! Fr3qu3nc!3$ @t t3r@h3rtz-l3v3l$ = m!nd-bl0w!ng b@ndw!dth..."
},
{
id: 5,
title: "M@r$::F!r$t-Fl!ght#Ing3nu!ty",
description: "NASA'$ Ing3nu!ty h3l!c0pt3r fl3w 0n M@r$—bl@d3$ sp!nn!ng 5x f@$t3r!!! Th!n @tm0$ph3r3 = h!gh3r RPM... If y0u r@n 0n M@r$ y0u’d jump 3X!!! N0w !t'$ d0!ng m!$$!0n$ b3y0nd !t$ 0r!g!n@l d3$!gn..."
},
{
id: 6,
title: "Ex0pl@net$::@l!en-L!fe??",
description: "5,000+ ex0pl@net$ d!$c0v3r3d!!! J@m3$ W3bb T3l3$c0p3 sc@n$ f0r b!0$!gn@tur3$—0xyg3n, m3th@n3 & C02 !n r!ght r@t!0$??? P0t3nt!@l l!f3 = h@b!t@bl3-z0n3 pl@n3t$ w!th w@t3r..."
},
{
id: 7,
title: "S3lf-H3@l!ng::M@t3r!@l$++",
description: "M@t3r!@l$ th@t 'h3@l' th3m$3lv3$??? Y3$!!! M!cr0-c@p$ul3$ br3@k & r3l3@$3 ch3m!c@l$ t0 f!x cr@ck$... Ev3n c0ncr3t3 w!th b@ct3r!@ pr0duc!ng l!m3$t0n3!!! Futur3 ph0n3$ = n0 scr@tch3$??"
},
{
id: 8,
title: "3l3ctr!c-Pl@n3$::Futur3@Fly!",
description: "3l3ctr!c pl@n3$ c0uld cut 90% 3m!$$!0n$!!! NASA X-57 = b@tt3ry p0w3r3d... Hybr!d fl!ght$ @lr3@dy t3$t!ng... S0l!d-$t@t3 b@tt3r!3$ = k3y t0 l0ng-r@ng3 fl!ght!!!"
},
{
id: 9,
title: "H0l0gr@m$::3D-R3@l!ty",
description: "N0 gl@$$3$ n33d3d!!! R3@l 3D h0l0gr@m$ us!ng l!ght-f!3ld t3ch... Im@g3$ fl0@t!ng !n @!r??? Med!c@l surg3ry, g@m!ng & m33t!ng$ w!ll ch@ng3 f0r3v3r..."
},
{
id: 10,
title: "Qu@ntum#Int3rn3t::Unh@ck@bl3",
description: "Qu@ntum n3tw0rk$ = 100% s3cur3??? Ent@ngl3m3nt d3t3ct$ h@ck!ng !n$t@ntlY!!! Ch!n@'$ M!c!u$ s@t3ll!t3 pr0v3d !t... Futur3 d@t@ = unh@ck@bl3??"
},
{
id: 11,
title: "N3ur0m0rph!c::AI-Br@!n",
description: "Ch!p$ th@t th!nk l!k3 br@!n??? Sp!k3-b@$3d pr0c3$$!ng = 1000x l3$$ p0w3r!!! R3@l-t!m3 v!$!0n + sp33ch pr0c3$$!ng = futur3 AI..."
},
{
id: 12,
title: "P0$t-Qu@ntum::Crypt0gr@phy",
description: "Qu@ntum c0mput3r$ c@n br3@k curr3nt encrypt!0n!!! S0 n3w @lg0r!thm$—l@tt!c3, h@$h-b@$3d & hybr!d... NIST w0rk!ng 0n st@nd@rd$!!!"
},
{
id: 13,
title: "Sp@t!@l::C0mput!ng-W0rld$",
description: "D!g!t@l + phys!c@l m3rg3??? AR/VR + s3ns0r$ m@p r3@l w0rld... Int3r@ct w!th v!rtu@l 0bj3ct$ !n r3@l sp@c3!!!"
},
{
id: 14,
title: "Fusi0n::3n3rgy@R3v0lut!0n",
description: "Fusi0n = cl3@n unl!m!t3d p0w3r!!! N3t 3n3rgy g@!n @ch!3v3d??? Sup3r-h3@t3d pl@$m@ + m@gn3t!c f!3ld$ = futur3 3n3rgy..."
},
{
id: 15,
title: "Br@!n-C0mput3r::Int3rf@c3$",
description: "BCI$ = c0ntr0l d3v!c3$ w!th th0ught$??? EEG-b@$3d sy$t3m$ @lr3@dy w0rk!!! Impl@nt$ w!th 1000$ 3l3ctr0d3$ c@n r3@d n3ur0n$..."
}
];

const equationProblems = [
    {
      "id": 1,
      "title": "Clue #: Find the smallest digit in a number",
      "description": "Find the smallest digit in a given number.",
      "example": "Input: n = 295 ",
      "answer": 2
    },
    {
      "id": 2,
      "title": "Clue #: Find the largest digit in a number",
      "description": "Find the largest digit in a given number.",
      "example": "Input: n = 682 ",
      "answer": 8
    },
    {
      "id": 3,
      "title": "Clue #: Count the number of digits in a number",
      "description": "Count how many digits are in a given number.",
      "example": "Input: n = 5432 ",
      "answer": 4
    },
    {
      "id": 4,
      "title": "Clue #: Find the sum of the first N natural numbers",
      "description": "Find the sum of the first N natural numbers.",
      "example": "Input: n = 5 ",
      "answer": 15
    },
    {
      "id": 5,
      "title": "Clue #: Find the 3rd multiple of a given number",
      "description": "Find the 3rd multiple of the given number.",
      "example": "Input: n = 4 ",
      "answer": 12
    },
    {
      "id": 6,
      "title": "Clue #: Find the difference between the largest and smallest digit",
      "description": "Find the difference between the largest and smallest digit in the number.",
      "example": "Input: n = 938 ",
      "answer": 6
    },
    {
      "id": 7,
      "title": "Clue #: Find the last digit of a number",
      "description": "Find the last digit of the given number.",
      "example": "Input: n = 987 ",
      "answer": 7
    },
    {
      "id": 8,
      "title": "Clue #: Find the first digit of a number",
      "description": "Find the first digit of the given number.",
      "example": "Input: n = 754 ",
      "answer": 7
    },
    {
      "id": 9,
      "title": "Clue #: Count the number of factors of a number",
      "description": "Count how many factors the given number has.",
      "example": "Input: n = 10 ",
      "answer": 4
    },
    {
      "id": 10,
      "title": "Clue #: Find the second largest digit in a number",
      "description": "Find the second largest digit in the number.",
      "example": "Input: n = 456 ",
      "answer": 5
    },
    {
      "id": 11,
      "title": "Clue #: Find the product of the digits of a number",
      "description": "Find the product of the digits in the number.",
      "example": "Input: n = 234 ",
      "answer": 24
    },
    {
      "id": 12,
      "title": "Clue #: Find the sum of even digits in a number",
      "description": "Find the sum of all even digits in the number.",
      "example": "Input: n = 1234 ",
      "answer": 6
    },
    {
      "id": 13,
      "title": "Clue #: Find the sum of odd digits in a number",
      "description": "Find the sum of all odd digits in the number.",
      "example": "Input: n = 1234 ",
      "answer": 4
    },
    {
      "id": 14,
      "title": "Clue #: Count the number of odd digits in a number",
      "description": "Count how many odd digits are in the number.",
      "example": "Input: n = 13579 ",
      "answer": 5
    },
    {
      "id": 15,
      "title": "Clue #: Count the number of even digits in a number",
      "description": "Count how many even digits are in the number.",
      "example": "Input: n = 2468 ",
      "answer": 4
    },
    {
      "id": 16,
      "title": "Clue #: Find the 4th power of a given number",
      "description": "Find the 4th power of the given number.",
      "example": "Input: n = 2 ",
      "answer": 16
    },
    {
      "id": 17,
      "title": "Clue #: Find the 3rd power of a given number",
      "description": "Find the 3rd power of the given number.",
      "example": "Input: n = 3 ",
      "answer": 27
    },
    {
      "id": 18,
      "title": "Clue #: Find the sum of the first and last digit",
      "description": "Find the sum of the first and last digit of the number.",
      "example": "Input: n = 246 ",
      "answer": 8
    },
    {
      "id": 19,
      "title": "Clue #: Subtract the last digit from the first digit",
      "description": "Subtract the last digit from the first digit of the number.",
      "example": "Input: n = 764 ",
      "answer": 3
    }
];

document.addEventListener("DOMContentLoaded", function () {

    // ================= PLAYER =================
    const name = localStorage.getItem("playername") || "Guest";
    const mobile = localStorage.getItem("playerphone") || "Not Provided";

    const playerNameEl = document.getElementById("playerName");
    if (playerNameEl) playerNameEl.innerText = name;

    const inputField = document.getElementById("modifiedInput");

    let currentLevel = 1;
    let timeLeft = 480;
    let completedtime = timeLeft;
    let downloadAttempted = false;

    // ================= RANDOM =================
    function getRandomItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    const correctClue = getRandomItem(equationProblems);

    function generateFakeClues(correctClue) {
        let fakeClues = [];
        let usedIds = new Set([correctClue.id]);

        while (fakeClues.length < 4) {
            let randomClue = getRandomItem(equationProblems);

            if (!usedIds.has(randomClue.id)) {
                usedIds.add(randomClue.id);

                fakeClues.push({
                    ...randomClue,
                    answer: randomClue.answer + Math.floor(Math.random() * 3) + 1,
                    isFake: true
                });
            } else {
                break; // prevent infinite loop if only 1 item exists
            }
        }
        return fakeClues;
    }

    const fakeClues = generateFakeClues(correctClue);
    let allClues = [correctClue, ...fakeClues].sort(() => Math.random() - 0.5);

    const randomParagraphProblem = getRandomItem(paragraphProblems);

    // ================= RENDER =================
    const problemContainer = document.getElementById('problemContainer');
    if (problemContainer) {
        problemContainer.innerHTML = '';

        allClues.forEach((clue, index) => {
            const clueCard = document.createElement('div');
            clueCard.className = 'problem-card';

            clueCard.innerHTML = `
                <h3>Clue ${index + 1}</h3>
                <p>${clue.title}</p>
                <p>${clue.description}</p>
                <p><strong>${clue.example}</strong></p>
            `;
            problemContainer.appendChild(clueCard);
        });

        const paragraphCard = document.createElement('div');
        paragraphCard.className = 'problem-card';
        paragraphCard.innerHTML = `
            <h3>${randomParagraphProblem.title}</h3>
            <p>${randomParagraphProblem.description}</p>
        `;
        problemContainer.appendChild(paragraphCard);
    }

    // ================= SYMBOL SHUFFLE =================
    const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/`~";

    function shuffleString(str) {
        return str.split("").sort(() => Math.random() - 0.5).join("");
    }

    const shuffledSymbols = shuffleString(symbols);

    let symbolMap = {};
    for (let i = 0; i < symbols.length; i++) {
        symbolMap[symbols[i]] = shuffledSymbols[i];
    }

    // ================= TRANSFORM =================
    const ASCII_SHIFT = correctClue.answer;

    function transformCharacter(char) {

        // Lowercase
        if (/[a-z]/.test(char)) {
            return String.fromCharCode(
                ((char.charCodeAt(0) - 97 + ASCII_SHIFT) % 26) + 97
            );
        }

        // Uppercase
        if (/[A-Z]/.test(char)) {
            return String.fromCharCode(
                ((char.charCodeAt(0) - 65 + ASCII_SHIFT) % 26) + 65
            );
        }

        // Numbers
        if (/[0-9]/.test(char)) {
            return String.fromCharCode(
                ((char.charCodeAt(0) - 48 + ASCII_SHIFT) % 10) + 48
            );
        }

        // Symbols
        if (symbolMap[char]) {
            return symbolMap[char];
        }

        return char;
    }

    // ================= TYPING FIX =================
    inputField.addEventListener("keydown", function (event) {
        event.preventDefault();

        if (typeof typingSound !== "undefined") {
            typingSound.currentTime = 0;
            typingSound.play();
        }

        let key = event.key;

        if (key === "Backspace") {
            this.value = this.value.slice(0, -1);
            return;
        }

        if (key === "Enter") {
            this.value += "\n";
            return;
        }

        if (key === "Tab") {
            this.value += "\t";
            return;
        }

        if (key.length === 1) {
            let transformedChar = transformCharacter(key);
            this.value += transformedChar;
        }
    });

    // ================= TIMER =================
    function updateTimer() {
        const timerElement = document.getElementById("timer");

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        if (timerElement) {
            timerElement.innerText =
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            if (timeLeft <= 30) {
                timerElement.style.color = "red";
                timerElement.style.fontWeight = "bold";
            }
        }

        if (timeLeft <= 10 && timeLeft > 0) {
            beepSound.currentTime = 0;
            beepSound.play();
        }

        if (timeLeft <= 0) {
            disableInputAndDownload();
            window.location.href = "final.html";
            return;
        }

        timeLeft--;
        setTimeout(updateTimer, 1000);
    }

    updateTimer();

    // ================= DOWNLOAD =================
    function disableInputAndDownload() {
        if (inputField) inputField.disabled = true;

        const downloadBtn = document.getElementById("downloadBtn");
        if (downloadBtn) downloadBtn.disabled = true;

        createFile();
    }

    function handleDownload() {
        if (timeLeft > 0 && !downloadAttempted) {
            let userChoice = confirm("Download early?\nOK = Retry\nCancel = Finish");

            if (!userChoice) {
                downloadAttempted = true;
                disableInputAndDownload();
                return;
            }
        }
        createFile();
    }

    function createFile() {
        let transformedText = inputField.value;
        let fileType = document.getElementById("fileType").value || "txt";

        let filename = name + "." + fileType;

        let elapsedTime = completedtime - timeLeft;
        let minutes = Math.floor(elapsedTime / 60);
        let seconds = elapsedTime % 60;

        let content = `
===== PLAYER DETAILS =====
Name: ${name}
Mobile: ${mobile}

===== GAME DATA =====
Time Taken: ${minutes}:${seconds}

----- Paragraph Given -----
${randomParagraphProblem.description}

----- Correct Clue -----
${correctClue.title} | ${correctClue.description}

----- User Output -----
${transformedText}
`;

        let blob = new Blob([content], { type: "text/plain" });

        let link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    }

    const downloadBtn = document.getElementById("downloadBtn");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", handleDownload);
    }

    // ================= ANTI-CHEAT =================
    document.addEventListener("keydown", function (e) {
        if (e.key === "F5" || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "r")) {
            e.preventDefault();
        }
    });

    document.addEventListener("copy", e => e.preventDefault());
    document.addEventListener("paste", e => e.preventDefault());
    document.addEventListener("contextmenu", e => e.preventDefault());

});
