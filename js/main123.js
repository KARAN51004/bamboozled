// ================= SOUND SETUP =================
const beepSound = new Audio("./sound/preview.mp3");
const typingSound = new Audio("./sound/typingsound.mp3");

// ================= ORIGINAL CODE =================

// Define problem sets
const paragraphProblems = [
    {
        id: 1,
        title: "Black Holes: Cosmic Mysteries",
        description: "Black holes are incredibly dense regions of space where gravity is so strong that nothing, not even light, can escape. They typically form when massive stars collapse at the end of their life cycle. The first real image of a black hole was captured in 2019 by the Event Horizon Telescope, a breakthrough that confirmed many long-held theories. Some scientists hypothesize that black holes could act as gateways, or wormholes, to other universes, opening up endless possibilities for understanding parallel worlds or even time travel. While the nature of black holes remains one of the greatest mysteries in astrophysics, ongoing research may soon shed light on their true role in the cosmos."
    },
    {
        id: 2,
        title: "Quantum Computing Revolution",
        description: "Quantum computing represents a revolutionary shift in how we process information. Unlike traditional computers, which use binary bits (either 0 or 1), quantum computers use QUBITS, which can exist in multiple states at once due to a property called superposition. This allows quantum computers to solve certain complex problems much faster than classical computers. Major companies, like IBM and Google, are at the forefront of developing practical quantum computers that could one day revolutionize fields such as cryptography, material science, and artificial intelligence. However, with this power comes the potential to break current encryption systems, meaning quantum computing could require new cybersecurity techniques to protect sensitive information."
    },
    {
        id: 3,
        title: "AI Creating Art & Music",
        description: "Artificial intelligence has made huge strides in creative fields, with AI now capable of producing stunning visual art, composing music, and even generating entire films. Tools such as DALL·E and Stable Diffusion allow users to create detailed, realistic images from text prompts, while AI music composers can generate entire soundtracks in various styles, mimicking famous artists or creating new genres. However, this raises profound ethical questions: if machines can create art and music, what does it mean for human creativity? Will AI enhance the artistic process by providing new tools, or will it replace human artists entirely? As AI continues to evolve, it may fundamentally change how we think about creativity, authorship, and originality."
    },
    {
        id: 4,
        title: "5G & 6G: The Speed Race",
        description: "The advent of 5G technology has revolutionized mobile networks, offering ultra-fast internet speeds, low latency, and the ability to connect a massive number of devices. This has enabled advancements such as real-time augmented reality (AR), self-driving cars, and smart cities. But the development doesn't stop with 5G—scientists are already working on 6G, which promises to be up to **1000 times faster** than its predecessor. 6G will pave the way for technologies such as instant holographic communication, where video calls could become immersive 3D experiences. With the exponential growth of data and the increasing demand for faster connections, 6G could have a transformative impact on industries ranging from healthcare to entertainment, revolutionizing how we interact with technology."
    },
    {
        id: 5,
        title: "Brain-Computer Interfaces",
        description: "Brain-computer interfaces (BCIs) have the potential to drastically change how we interact with technology. Companies like Neuralink are developing brain chips that could allow individuals to control devices with their thoughts, which would be life-changing for people with disabilities, such as paralysis. Imagine a future where BCIs not only help people regain lost abilities, but also enable new forms of communication, such as **telepathic communication**, or even the ability to **store memories** digitally. However, this rapidly advancing technology also presents serious ethical concerns. Issues like privacy, mental manipulation, and the potential for misuse raise critical questions about how we ensure the responsible use of such groundbreaking innovations."
    },
    {
        id: 6,
        title: "The First Aircraft on Mars",
        description: "In 2021, NASA's **Ingenuity helicopter** made history as the first aircraft to ever fly on another planet—Mars. Originally designed to complete only five flights, Ingenuity has far surpassed expectations, completing over 70 flights and providing invaluable data to assist the Perseverance rover in its mission to explore the Martian surface. This breakthrough opens the door to aerial exploration on other planets, where flying vehicles could access areas that are difficult for rovers to reach. The success of Ingenuity on Mars could lead to similar technologies being deployed on moons like Titan, Saturn’s largest moon, where flying drones could help explore the thick atmosphere and unknown terrains."
    },
    {
        id: 7,
        title: "Quantum Internet: Unhackable Network",
        description: "The concept of a quantum internet could radically change how we approach online security. Unlike classical encryption, which relies on complex algorithms to protect data, quantum encryption uses **entangled particles** to transmit information. These entangled particles are linked in such a way that any attempt to intercept the data would disturb the particles, making it immediately detectable. This makes quantum communication virtually unhackable. China’s successful launch of the 'Micius' satellite, which enabled secure quantum communication, shows the potential of this technology. If developed further, the quantum internet could revolutionize fields like banking, national security, and privacy, offering unbreachable security for sensitive data."
    },
    {
        id: 8,
        title: "Self-Healing Materials",
        description: "Imagine materials that can repair themselves when damaged—this is the promise of self-healing materials. Inspired by natural processes like how human skin heals after an injury, these materials are designed to automatically restore their structure when cracked or broken. Such materials could revolutionize industries like construction, electronics, and aerospace. For example, self-healing materials could be used in smartphones, repairing their own cracks, or in airplanes, where the wings could regenerate during flight, improving safety and reducing maintenance costs. As the technology progresses, these materials could lead to a world where objects last longer, waste is reduced, and repair costs are significantly lowered."
    },
    {
        id: 9,
        title: "The Search for Alien Life",
        description: "One of humanity’s most profound questions—are we alone in the universe? NASA’s **James Webb Space Telescope** is helping to answer this by scanning distant exoplanets for signs of life, specifically looking for biosignatures—gases like oxygen and methane, which are often associated with living organisms. Scientists are particularly interested in moons such as Europa and Enceladus, which are believed to have subsurface oceans beneath their icy crusts. These moons may harbor microbial life, and studying them could bring us closer to understanding the potential for life beyond Earth. The search for alien life could fundamentally change our understanding of life, the universe, and our place within it."
    },
    {
        id: 10,
        title: "The Future of Space Travel",
        description: "The future of space travel is becoming more exciting by the day. SpaceX’s **Starship** is designed to make human missions to Mars a reality, with the potential for full colonization of the Red Planet. NASA’s **Artemis missions** aim to establish a permanent human presence on the Moon, serving as a stepping stone for further space exploration. Meanwhile, scientists are exploring theoretical concepts like **warp drives**, which could enable faster-than-light travel. Such technologies could one day make interstellar travel a possibility, allowing us to explore distant star systems and even habitable planets light-years away. The future of space exploration is truly limitless."
    },
    {
        id: 11,
        title: "AI-Powered Doctors",
        description: "Artificial intelligence is transforming the field of healthcare, with AI systems now able to diagnose diseases and analyze medical data faster and more accurately than humans. Machine learning algorithms are particularly effective at analyzing medical imaging, detecting signs of cancers, and predicting patient outcomes based on vast amounts of medical data. In the future, AI could assist in surgeries, personalize treatments based on genetic data, and even manage complex healthcare systems. However, the rise of AI in medicine raises concerns about the role of human doctors, data privacy, and the potential for errors in AI-driven decisions that could impact patient care."
    },
    {
        id: 12,
        title: "Electric Planes: The Future of Aviation",
        description: "Electric aviation is gaining momentum as a solution to reduce the carbon footprint of air travel. Companies like **Airbus** and **Boeing** are developing electric planes that rely on batteries rather than traditional jet fuel. These planes promise to be **quieter** and **more environmentally friendly**, emitting fewer greenhouse gases. In the near future, short to medium-haul flights could be powered entirely by electricity, drastically reducing aviation’s environmental impact. This shift to electric planes could also pave the way for **zero-emission flights**, transforming the global aviation industry and helping to combat climate change."
    },
    {
        id: 13,
        title: "Bioprinting Human Organs",
        description: "Bioprinting is a groundbreaking technology that uses 3D printing to create human tissues and organs. By printing cells layer by layer, scientists are now able to produce functional tissues such as skin, cartilage, and even kidneys. This innovation could potentially end organ shortages and drastically reduce the need for organ donors. By using a patient’s own cells, bioprinting can create organs that are custom-designed to avoid rejection. This technology has the potential to **save millions of lives** in the future by providing an endless supply of organs for transplant, as well as creating personalized treatments for various medical conditions."
    },
    {
        id: 14,
        title: "Holographic Displays",
        description: "Holographic displays are set to revolutionize how we interact with digital media. Unlike traditional flat-screen displays, holograms project 3D images into space, allowing viewers to experience visuals in three dimensions. Researchers are developing true 3D holographic displays that can be seen from different angles without the need for special glasses or headsets. In the future, these displays could replace traditional screens in smartphones, TVs, and even video conferences, offering a more immersive and interactive way to view content. As the technology advances, holograms could become the new standard for everything from entertainment to education and even medical imaging."
    },
    {
        id: 15,
        title: "Bl@ck H0l3s: C0$mic Myst3r!es",
        description: "Did y0u kn0w th@t bl@ck h0les c@N 'sp@gh3tt!fy' 0bjects? If y0u g0t t00 cl0se, the intense gr@v!t@t!0n@l pull w0uld str3tch y0u like @ n00dle! The l@rgest kn0wn bl@ck h0le, T0N 618, h@s @ m@$$ 0f 40 B!LL!0N suns. Th3se c0smic d3v0urers @ls0 em!t H@wk!ng r@d!@t!0n, sl0wly ev@p0r@t!ng 0ver tr!ll!0ns 0f y3@rs. S0me bl@ck h0l3s @re @ctu@lly 'qu!3t' wh!le 0th3rs @re 'f33d!ng', cre@t!ng br!ll!@nt qu@s@rs v!s!bl3 @cr0ss the un!v3rs3."
    },
    {
        id: 16,
        title: "Qu@ntum C0mput!ng Rev0luti0n",
        description: "Qu@ntum c0mputers c@n s0lve pr0blems in s3c0nds th@t w0uld t@ke cl@ssic@l c0mputers m!ll!0ns 0f y3ars! G00gle's Qu@ntum C0mputer, Sycam0re, perf0rmed @ c@lcul@t!0n in 200 sec0nds th@t w0uld t@ke @ superc0mputer 10,000 y3ars! Qu@ntum b!ts 0r 'qub!ts' c@n ex!st !n mult!ple st@tes s!mult@ne0usly, un!lke cl@ss!c@l b!ts. Sc!ent!sts @re r@c!ng t0 bu!ld m0re st@ble qu@ntum syst3ms th@t c0uld rev0lut!0n!ze crypt0gr@phy, drug d!sc0very, @nd cl!m@te m0del!ng."
    },
    {
        id: 17,
        title: "AI Cr3@t!ng @rt & Mus!c",
        description: "AI-gener@ted @rt h@s s0ld f0r m!ll!0ns! In 2018, @ p@int!ng by @N AI c@lled Edm0nd de Bel@my w@s @uct!0ned f0r $432,500. AI @lso c0mp0sed B3eth0ven's unf!n!shed 10th Symph0ny. The l@test AI m0d3ls c@n n0w gen3r@te @m@z!ng @rt fr0m s!mple t3xt descr!pt!0ns, bl3nd!ng styl3s @nd c0nc3pts !n w@ys n3v3r s33n b3f0re. M@ny @rt!sts @re c0ll@b0r@t!ng w!th th3se AI syst3ms t0 cre@te hypr!d w0rks th@t push cr3@t!ve b0und@r!es."
    },
    {
        id: 18,
        title: "5G & 6G: The Sp33d R@c3",
        description: "5G !s f@st, but 6G c0uld b3 100 t!m3s f@st3r! It c0uld @ll0w h0l0gr@ph!c c@lls in r3@l t!me. Sc!ent!sts even pr3d!ct th@t 6G m@y use hum@n b0d!es @s @ntenna$. Th!s next-gen3r@t!0n n3tw0rk c0uld 0p3r@te @t ter@h3rtz fr3qu3nc!es, en@bl!ng b@ndw!dth th@t m@kes t0d@y's f@st3st c0nn3cti0ns s33m l!ke d!@l-up. 6G c0uld un!fy c0mput!ng, c0mmun!c@t!0ns, sens!ng, @nd AI !nt0 0ne s3@ml3ss exp3r!enc3."
    },
    {
        id: 19,
        title: "The F!rst A!rcraft 0n M@rs",
        description: "NASA's Ing3nu!ty h3l!c0pt3r fl3w 0n M@rs w!th bl@d3s th@t sp!n 5 t!m3s f@st3r du3 t0 the th!n @tm0sph3re. If y0u c0uld run 0n M@rs, y0u'd jump 3X h!gh3r! Ing3nu!ty h@s f@r exc33d3d !ts pl@nn3d m!ss!0n dur@t!0n, c0nt!nu!ng t0 fl0@t @b0ve the r3d pl@n3t's surf@ce f0r re35@rch @nd exp1or@t!0n. Its succ3ss h@s sp@wn pl@ns f0r m0re @dv@nc3d fly!ng m@ch!n3s 0n futur3 M@rt!@n m!ss!0ns."
    },
    {
        id: 20,
        title: "The S3@rch f0r @l!en L!fe",
        description: "Astr0n0mers h@ve f0und 5,000+ ex0pl@nets! The J@mes Webb T3l3sc0pe is sc@nn!ng f0r b!0s!gn@tures—g@s3s th@t m@y h!nt @t extr@t3rrestr!@l l!fe. G@s3s l!k3 m3th@ne, 0xygen, @nd c@rb0n d!0x!de !n sp3c!f!c c0mb!n@t!0ns c0uld !nd!c@te b!0l0g!c@l pr0cesses. The m0st pr0m!s!ng c@nd!d@t3s f0r l!fe @r3 w@tery w0rlds 0rb!t!ng !n the 'h@b!t@ble z0ne' 0f th3!r st@rs."
    },
    {
        id: 21,
        title: "S3lf-H3@l!ng M@ter!@ls",
        description: "Sc!ent!sts h@ve dev3l0p3d m@ter!@ls th@t rep@!r thems3lves—l!ke hum@n sk!n! Futur3 sm@rtph0nes m@y he@l th3!r 0wn scr@tches. Th3se !nn0v@t!ve m@t3r!@ls c0nt@!n m!cr0c@psules f!ll3d w!th he@l!ng @g3nts th@t r3le@se wh3n d@m@ge 0ccurs. S0me s3lf-he@l!ng c0ncr3te c0nt@!ns b@ct3r!@ th@t pr0duc3 l!mestone wh3n exp0s3d t0 w@t3r, f!ll!ng !n cr@cks @ut0m@t!c@lly."
    },
    {
        id: 22,
        title: "El3ctr!c Pl@nes: The Futur3",
        description: "El3ctr!c pl@nes c0uld r3duc3 @!r tr@vel em!ss!0ns by 90%! NASA's X-57 M@xw3ll runs 0n b@tt3r!3s inste@d 0f j3t fu3l. M@j0r @!rl!ne m@nuf@ctur3rs @re @lre@dy t3st!ng hybr!d-3lectr!c pr0t0typ3s f0r sh0rt-h@ul fl!ghts. S0l!d-st@te b@tt3ry t3chn0l0gy !s th3 k3y t0 m@k!ng l0ng3r-r@ng3 3lectr!c fl!ghts p0ss!ble, p0t3nt!@lly tr@nsf0rm!ng the 3nt!re @vi@t!0n !ndustry."
    },
    {
        id: 23,
        title: "H0l0gr@ph!c D!spl@ys",
        description: "H0l0gr@ms @ren't just sc!-f!. Res3@rch3rs @re dev3l0p!ng r3@l 3D h0l0gr@ph!c d!spl@ys—n0 gl@ss3s needed. Thes3 d!spl@ys use l!ght f!3ld t3chn0l0gy t0 pr0j3ct !m@g3s th@t @pp3@r t0 fl0@t !n sp@c3 @nd c@n b3 v!3wed fr0m mult!ple @ngles. Future @ppl!c@t!0ns !nclude med!c@l !m@g!ng f0r surg3ry, !mm3rs!ve g@m!ng, @nd t3lec0nf3r3nc!ng wh3re p@rt!c!p@nts @pp3@r t0 b3 !n th3 s@me r00m."
    },
    {
        id: 24,
        title: "Qu@ntum !nt3rn3t: Unh@ck@bl3 N3tw0rk",
        description: "Ch!n@'s M!c!us s@t3ll!t3 h@s d3m0nstr@ted qu@ntum c0mmun!c@t!0n. A futur3 qu@ntum !nt3rn3t c0uld m3@n t0t@l d@t@ s3cur!ty! Th!s n3tw0rk w0uld us3 qu@ntum 3nt@ngl3m3nt t0 d3t3ct @ny @tt3mpt t0 !nt3rc3pt d@t@, m@k!ng !t the0r3t!c@lly !mp0ss!ble t0 h@ck. Qu@ntum r3p3@t3rs @r3 b3!ng d3v3l0p3d t0 3xt3nd the r@ng3 0f th3se s3cur3 c0mmun!c@t!0ns @cr0ss c0nt!n3nts."
    },
    {
        id: 25,
        title: "N3ur0m0rph!c C0mput!ng Adv@nc3s",
        description: "N3ur0m0rph!c ch!ps, !nsp!r3d by th3 hum@n br@!n, @r3 r3sh@p!ng AI pr0c3ss!ng. Th3s3 ch!ps c@n pr0c3ss d@t@ m0r3 eff!c!3ntly, l3@d!ng t0 f@st3r @nd m0r3 p0w3r-eff!c!3nt AI syst3ms. Unl!ke tr@d!t!0n@l c0mput3rs, n3ur0m0rph!c ch!ps us3 sp!ke-b@s3d c0mmun!c@t!0n s!m!l@r t0 n3ur0ns, r3qu!r!ng up t0 1000x l3ss p0w3r. Th3y exc3l @t r3@l-t!me pr0c3ss!ng 0f s3ns0ry d@t@ l!k3 v!s!0n @nd sp33ch, m@k!ng th3m !d3@l f0r 3dge d3v!c3s."
    },
    {
        id: 26,
        title: "P0st-Qu@ntum Crypt0gr@phy",
        description: "W!th qu@ntum c0mput3rs p0s!ng @ thr3@t t0 tr@d!t!0n@l encrypt!0n, p0st-qu@ntum crypt0gr@phy @!ms t0 d3v3l0p secur3 c0mmun!c@t!0n m3th0ds th@t c@n w!thst@nd qu@ntum @tt@cks. NIST h@s s3l3ct3d s3v3r@l pr0m!s!ng @lg0r!thms b@s3d 0n l@tt!c3s, h@sh-b@s3d, @nd m!x3d syst3ms f0r st@nd@rd!z@t!0n. G0v3rnm3nts @nd c0mp@n!es @r3 @lr3@dy pl@nn!ng 'crypt0gr@ph!c @g!l!ty' t0 3nsur3 @ sm00th tr@ns!t!0n wh3n qu@ntum c0mput3rs b3c0me m0r3 p0w3rful."
    },
    {
        id: 27,
        title: "Sp@t!@l C0mput!ng Tr@nsf0rm@t!0n",
        description: "Sp@t!@l c0mput!ng m3rg3s d!g!t@l @nd phys!c@l w0rlds, @ll0w!ng us3rs t0 !nt3r@ct w!th d!g!t@l c0nt3nt !n r3@l sp@c3, r3v0lut!0n!z!ng f!3lds l!k3 g@m!ng, educ@t!0n, @nd d3s!gn. W3@r@ble d3v!c3s w!th @dv@nc3d s3ns0rs c@n m@p y0ur surr0und!ngs @nd 0v3rl@y d!g!t@l 0bj3cts th@t !nt3r@ct w!th the phys!c@l 3nv!r0nm3nt. Th!s t3chn0l0gy w!ll ch@ng3 h0w w3 sh0p, l3@rn, @nd c0ll@b0r@t3, cr3@t!ng @ s3@ml3ss m3sh 0f v!rtu@l @nd r3@l w0rlds."
    },
    {
        id: 28,
        title: "Adv@nc3s !n Fusi0n En3rgy",
        description: "R3c3nt br3@kthr0ughs !n fusi0n t3chn0l0gy br!ng us cl0s3r t0 h@rn3ss!ng cl3@n, unl!m!t3d p0w3r, m!m!ck!ng th3 pr0c3ss th@t p0w3rs th3 sun. B0th publ!c @nd pr!v@te l@bs h@ve @ch!3v3d 'n3t 3n3rgy g@!n' wh3r3 fus!0n r3@ct!0ns pr0duc3 m0r3 3n3rgy th@n w@s us3d t0 st@rt th3m. H!gh-t3mp3r@tur3 sup3rc0nduct0rs @r3 3n@bl!ng str0ng3r m@gn3t!c f!3lds f0r c0nf!n!ng the sup3rh3@t3d pl@sm@ n33d3d f0r fus!0n."
    },
    {
        id: 29,
        title: "Br@!n-Comput3r Int3rf@c3s Adv@nc3",
        description: "Br@!n-Comput3r Int3rf@c3s (BCIs) @r3 d3v3l0p!ng t0 @ll0w d!r3ct c0mmun!c@t!0n b3tw33n th3 br@!n @nd d3v!c3s, p0t3nt!@lly r3st0r!ng funct!0n@l!ty f0r p@t!3nts w!th n3ur0l0g!c@l d!s0rd3rs. N0n-!nv@s!v3 BCIs us!ng EEG c@n @lr3@dy c0ntr0l c0mput3rs @nd pr0sth3t!cs thr0ugh 'th0ught' @l0n3. M0r3 @dv@nc3d !mpl@nt@bl3 d3v!c3s w!th th0us@nds 0f t!ny 3l3ctr0d3s c@n r3@d @nd st!mul@t3 !nd!v!du@l n3ur0ns, 0p3n!ng n3w p0ss!b!l!t!es f0r tr3@t!ng c0nd!t!0ns l!k3 P@rk!ns0n's @nd 3p!l3psy."
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
    const mobile = localStorage.getItem("playerMobile") || "Not Provided";

    const playerNameEl = document.getElementById("playerName");
    if (playerNameEl) playerNameEl.innerText = name;

    const inputField = document.getElementById("modifiedInput");

    let currentLevel = 1;
    let timeLeft = 900;
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
            }
        }
        return fakeClues;
    }

    const fakeClues = generateFakeClues(correctClue);
    let allClues = [correctClue, ...fakeClues].sort(() => Math.random() - 0.5);

    const randomParagraphProblem = getRandomItem(paragraphProblems);

    // ================= CLUE-BASED CAESAR MAPPING =================
    function generateMappingFromClue(clueValue) {
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const mapping = {};

        // shift uppercase letters
        for (let i = 0; i < upper.length; i++) {
            mapping[upper[i]] = upper[(i + clueValue) % 26];
        }

        // shift lowercase letters
        for (let i = 0; i < lower.length; i++) {
            mapping[lower[i]] = lower[(i + clueValue) % 26];
        }

        return mapping;
    }

    let currentMapping = generateMappingFromClue(correctClue.answer);

    function transformCharacter(char) {
        return currentMapping[char] || char; // only letters get transformed
    }

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
                <p><strong>${clue.example || ""}</strong></p>
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

    // ================= TYPING =================
    inputField.addEventListener("keypress", function (event) {
        event.preventDefault();

        if (typeof typingSound !== "undefined") {
            typingSound.currentTime = 0;
            typingSound.play();
        }

        let transformedChar = transformCharacter(event.key);
        this.value += transformedChar;
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

        if (timeLeft <= 10 && timeLeft > 0 && typeof beepSound !== "undefined") {
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
