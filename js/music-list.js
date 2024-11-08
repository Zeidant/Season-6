const allMusic = [
  {
    "name": "1. Vibras",
    "artist": "J Balvin",
    "img": "https://i.scdn.co/image/ab67616d0000b273dda2b86297d3bfb519f8b785",
    "src": "music-1"
  },
  {
    "name": "2. I Love It (feat. Charli XCX)",
    "artist": "Icona Pop",
    "img": "https://i.scdn.co/image/ab67616d0000b27323619cddce5953910a4bde14",
    "src": "music-2"
  },
  {
    "name": "3. bad idea",
    "artist": "Ariana Grande",
    "img": "https://i.scdn.co/image/ab67616d0000b27356ac7b86e090f307e218e9c8",
    "src": "music-3"
  },
  {
    "name": "4. La Tormenta",
    "artist": "Aventura",
    "img": "https://i.scdn.co/image/ab67616d0000b273791d6daf3d05cde2a646c3cd",
    "src": "music-4"
  },
  {
    "name": "5. Tanta Droga",
    "artist": "Eladio Carrion",
    "img": "https://i.scdn.co/image/ab67616d0000b273ec105eaf625391e95540ba97",
    "src": "music-5"
  },
  {
    "name": "6. i was only temporary",
    "artist": "my head is empty",
    "img": "https://i.scdn.co/image/ab67616d0000b273f8fcdb6f18e90b58f6fe842e",
    "src": "music-6"
  },
  {
    "name": "7. ROB THE FRONTIER",
    "artist": "UVERworld",
    "img": "https://i.scdn.co/image/ab67616d0000b273045178c05066b0714f00463a",
    "src": "music-7"
  },
  {
    "name": "8. Swimming",
    "artist": "Flawed Mangoes",
    "img": "https://i.scdn.co/image/ab67616d0000b2732ce7c482bfb24a6f580d7e02",
    "src": "music-8"
  },
  {
    "name": "9. feel something",
    "artist": "Bea Miller",
    "img": "https://i.scdn.co/image/ab67616d0000b27337b16e42d8ac8413bb2dc6ed",
    "src": "music-9"
  },
  {
    "name": "10. Name",
    "artist": "Khoruscate",
    "img": "https://i.scdn.co/image/ab67616d0000b273af50ac4bf00b02169db2dccf",
    "src": "music-10"
  },
  {
    "name": "11. Top Again (feat. Saba)",
    "artist": "AUDREY NUNA",
    "img": "https://i.scdn.co/image/ab67616d0000b27368db4b081db9b8a63483e052",
    "src": "music-11"
  },
  {
    "name": "12. Serial Heartbreaker",
    "artist": "FLETCHER",
    "img": "https://i.scdn.co/image/ab67616d0000b27354d18b47810756f87282ea43",
    "src": "music-12"
  },
  {
    "name": "13. The Distance",
    "artist": "Gavin Turek",
    "img": "https://i.scdn.co/image/ab67616d0000b2739bab9bdfea2051d10014bed2",
    "src": "music-13"
  },
  {
    "name": "14. Serious Steel",
    "artist": "Masaru Yokoyama",
    "img": "https://i.scdn.co/image/ab67616d0000b273ae5832066b25ee5b41d701a1",
    "src": "music-14"
  },
  {
    "name": "15. Love Lost",
    "artist": "Mac Miller",
    "img": "https://i.scdn.co/image/ab67616d0000b273c8a77225ad852699c908ac4b",
    "src": "music-15"
  },
  {
    "name": "16. Soweto (with Don Toliver, Rema & Tempoe)",
    "artist": "Victony",
    "img": "https://i.scdn.co/image/ab67616d0000b273445b51a80b7faf001a554632",
    "src": "music-16"
  },
  {
    "name": "17. All Is Soft Inside",
    "artist": "AURORA",
    "img": "https://i.scdn.co/image/ab67616d0000b273e64db80f4b85971dc8040a8a",
    "src": "music-17"
  },
  {
    "name": "18. bye",
    "artist": "Ariana Grande",
    "img": "https://i.scdn.co/image/ab67616d0000b2738b58d20f1b77295730db15b4",
    "src": "music-18"
  },
  {
    "name": "19. EMRATA",
    "artist": "Myke Towers",
    "img": "https://i.scdn.co/image/ab67616d0000b273c75c054b6b209b0b91d818d8",
    "src": "music-19"
  },
  {
    "name": "20. LOYAL (feat. Drake and Bad Bunny) - Remix",
    "artist": "PARTYNEXTDOOR",
    "img": "https://i.scdn.co/image/ab67616d0000b273d8082097058d4c44739b17dd",
    "src": "music-20"
  },
  {
    "name": "21. Dance To This (feat. Ariana Grande)",
    "artist": "Troye Sivan",
    "img": "https://i.scdn.co/image/ab67616d0000b273aae542061ac42ee04779fb2f",
    "src": "music-21"
  },
  {
    "name": "22. drive",
    "artist": "Current Blue",
    "img": "https://i.scdn.co/image/ab67616d0000b273c503e7faac53661e185d61c9",
    "src": "music-22"
  },
  {
    "name": "23. Perspective",
    "artist": "Cafun\u00e9",
    "img": "https://i.scdn.co/image/ab67616d0000b273df9db37ad2c04de0e2c794a0",
    "src": "music-23"
  },
  {
    "name": "24. Dile a Tu Amiga",
    "artist": "Dalmata",
    "img": "https://i.scdn.co/image/ab67616d0000b273ee2a746bcff341da833298f5",
    "src": "music-24"
  },
  {
    "name": "25. Party Rock Anthem",
    "artist": "LMFAO",
    "img": "https://i.scdn.co/image/ab67616d0000b2731db908d5f66645cb158837ca",
    "src": "music-25"
  },
  {
    "name": "26. Ella Me Vivia",
    "artist": "El Prodigio",
    "img": "https://i.scdn.co/image/ab67616d0000b273b957c05fa53887788ccbe9f8",
    "src": "music-26"
  },
  {
    "name": "27. Can't Smile Without You",
    "artist": "Barry Manilow",
    "img": "https://i.scdn.co/image/ab67616d0000b273419d720d1c3b36cfc6eba201",
    "src": "music-27"
  },
  {
    "name": "28. e m p t y s p a c e s",
    "artist": "Pity Party (Girls Club)",
    "img": "https://i.scdn.co/image/ab67616d0000b273d950d017adae21842aa9d7fe",
    "src": "music-28"
  },
  {
    "name": "29. Holy Ghost",
    "artist": "Omah Lay",
    "img": "https://i.scdn.co/image/ab67616d0000b273ca454be2b33af924e173359d",
    "src": "music-29"
  },
  {
    "name": "30. Tokyo",
    "artist": "JHAYCO",
    "img": "https://i.scdn.co/image/ab67616d0000b27321ee2e52263690b0b2c80c2a",
    "src": "music-30"
  },
  {
    "name": "31. DEEP IN THE WATER",
    "artist": "Don Toliver",
    "img": "https://i.scdn.co/image/ab67616d0000b273ad3112aa97cf4080ea78e58c",
    "src": "music-31"
  },
  {
    "name": "32. Vivo",
    "artist": "Gustavo Cerati",
    "img": "https://i.scdn.co/image/ab67616d0000b27392441ecd34874c2bc4f19144",
    "src": "music-32"
  },
  {
    "name": "33. N95",
    "artist": "Kendrick Lamar",
    "img": "https://i.scdn.co/image/ab67616d0000b2732e02117d76426a08ac7c174f",
    "src": "music-33"
  },
  {
    "name": "34. Cooped Up (with Roddy Ricch)",
    "artist": "Post Malone",
    "img": "https://i.scdn.co/image/ab67616d0000b27334362676667a4322838ccc97",
    "src": "music-34"
  },
  {
    "name": "35. Carta de Despedida",
    "artist": "LIT killah",
    "img": "https://i.scdn.co/image/ab67616d0000b273298cf71cdd8114b217876085",
    "src": "music-35"
  },
  {
    "name": "36. Sacrifices",
    "artist": "Drake",
    "img": "https://i.scdn.co/image/ab67616d0000b2734f0fd9dad63977146e685700",
    "src": "music-36"
  },
  {
    "name": "37. KMT",
    "artist": "Drake",
    "img": "https://i.scdn.co/image/ab67616d0000b2734f0fd9dad63977146e685700",
    "src": "music-37"
  },
  {
    "name": "38. 10x Stronger",
    "artist": "Dominic Fike",
    "img": "https://i.scdn.co/image/ab67616d0000b273cfc824b65a3b1755d98a7e23",
    "src": "music-38"
  },
  {
    "name": "39. Back for More (TXT Ver.)",
    "artist": "TOMORROW X TOGETHER",
    "img": "https://i.scdn.co/image/ab67616d0000b27357a3c2fbab83d2258da56eb8",
    "src": "music-39"
  },
  {
    "name": "40. issues",
    "artist": "Baby Keem",
    "img": "https://i.scdn.co/image/ab67616d0000b2731bfa23b13d0504fb90c37b39",
    "src": "music-40"
  },
  {
    "name": "41. Leave Her",
    "artist": "d4vd",
    "img": "https://i.scdn.co/image/ab67616d0000b2739a48777a54e25db0a037db48",
    "src": "music-41"
  },
  {
    "name": "42. Hey, Hi, How are you?",
    "artist": "Kenya Grace",
    "img": "https://i.scdn.co/image/ab67616d0000b273138f044c1e40d140b233cc63",
    "src": "music-42"
  },
  {
    "name": "43. This Sunday",
    "artist": "Future",
    "img": "https://i.scdn.co/image/ab67616d0000b273d353552c4c2932094456bbe9",
    "src": "music-43"
  },
  {
    "name": "44. Bugambilia",
    "artist": "Nasa Histoires",
    "img": "https://i.scdn.co/image/ab67616d0000b273b442eb7bc56f93309583d4e4",
    "src": "music-44"
  },
  {
    "name": "45. she's all i wanna be",
    "artist": "Tate McRae",
    "img": "https://i.scdn.co/image/ab67616d0000b273f7108342ef45a402af8206b2",
    "src": "music-45"
  },
  {
    "name": "46. no me siento mejor",
    "artist": "Caztro",
    "img": "https://i.scdn.co/image/ab67616d0000b273bc8ba9f61c4b839a23e82879",
    "src": "music-46"
  },
  {
    "name": "47. Electric (feat. Khalid)",
    "artist": "Alina Baraz",
    "img": "https://i.scdn.co/image/ab67616d0000b2733c054a9aaef660a1fabf87aa",
    "src": "music-47"
  },
  {
    "name": "48. Magnetic",
    "artist": "ILLIT",
    "img": "https://i.scdn.co/image/ab67616d0000b273f037c5fb9de6c78726cb8e2c",
    "src": "music-48"
  },
  {
    "name": "49. 5D",
    "artist": "Qveen Herby",
    "img": "https://i.scdn.co/image/ab67616d0000b27300e58c927b66e26fba7ac2e9",
    "src": "music-49"
  },
  {
    "name": "50. Know No Better (feat. Travis Scott, Camila Cabello & Quavo)",
    "artist": "Major Lazer",
    "img": "https://i.scdn.co/image/ab67616d0000b2733ba5c71caff3ec4f019f5613",
    "src": "music-50"
  },
  {
    "name": "51. 3 Nights",
    "artist": "Dominic Fike",
    "img": "https://i.scdn.co/image/ab67616d0000b2737b1b6f41c1645af9757d5616",
    "src": "music-51"
  },
  {
    "name": "52. I Had Some Help (Feat. Morgan Wallen)",
    "artist": "Post Malone",
    "img": "https://i.scdn.co/image/ab67616d0000b27397306976e3eb8aad53b754eb",
    "src": "music-52"
  },
  {
    "name": "53. Writing over the sign",
    "artist": "\u660e\u661f <Akeboshi>",
    "img": "https://i.scdn.co/image/ab67616d0000b273ae475aae8008102966e47f92",
    "src": "music-53"
  },
  {
    "name": "54. Alive",
    "artist": "Khalid",
    "img": "https://i.scdn.co/image/ab67616d0000b273b361ce46dbadbf8a11081b60",
    "src": "music-54"
  },
  {
    "name": "55. Fourth of July",
    "artist": "Sufjan Stevens",
    "img": "https://i.scdn.co/image/ab67616d0000b273820e2ac14772ae3162c6d479",
    "src": "music-55"
  },
  {
    "name": "56. Privilege",
    "artist": "The Weeknd",
    "img": "https://i.scdn.co/image/ab67616d0000b2731f6a2a40bb692936879db730",
    "src": "music-56"
  },
  {
    "name": "57. Warrior",
    "artist": "AURORA",
    "img": "https://i.scdn.co/image/ab67616d0000b273e64db80f4b85971dc8040a8a",
    "src": "music-57"
  },
  {
    "name": "58. A Pedir Su Mano",
    "artist": "Juan Luis Guerra 4.40",
    "img": "https://i.scdn.co/image/ab67616d0000b273fabe96fd440a50e9288111c2",
    "src": "music-58"
  },
  {
    "name": "59. Tell Me",
    "artist": "James Blake",
    "img": "https://i.scdn.co/image/ab67616d0000b273921f7aa6349a070b6f26b3ff",
    "src": "music-59"
  },
  {
    "name": "60. Sympathy is a knife",
    "artist": "Charli xcx",
    "img": "https://i.scdn.co/image/ab67616d0000b273df174e0dcb15de7b625a7194",
    "src": "music-60"
  },
  {
    "name": "61. Casca de Bala",
    "artist": "Thullio Milion\u00e1rio",
    "img": "https://i.scdn.co/image/ab67616d0000b273672b70fe57e3313b36c781b8",
    "src": "music-61"
  },
  {
    "name": "62. Sway - Chainsmokers Remix",
    "artist": "Anna of the North",
    "img": "https://i.scdn.co/image/ab67616d0000b273d93a76a0a3124857df32ccd6",
    "src": "music-62"
  },
  {
    "name": "63. All Yours",
    "artist": "Normani",
    "img": "https://i.scdn.co/image/ab67616d0000b2737974d4ad863b56f88585f4d5",
    "src": "music-63"
  },
  {
    "name": "64. GIRLS",
    "artist": "The Kid LAROI",
    "img": "https://i.scdn.co/image/ab67616d0000b273c8af7237bb25ad59488944c1",
    "src": "music-64"
  },
  {
    "name": "65. B.O.A.T.",
    "artist": "Camila Cabello",
    "img": "https://i.scdn.co/image/ab67616d0000b2738ef2562a1156ea6766e00ecb",
    "src": "music-65"
  },
  {
    "name": "66. YaMeFui",
    "artist": "Bizarrap",
    "img": "https://i.scdn.co/image/ab67616d0000b273aa89966e4d984b3b4c4f3fb9",
    "src": "music-66"
  },
  {
    "name": "67. Running With the Wolves",
    "artist": "AURORA",
    "img": "https://i.scdn.co/image/ab67616d0000b2734dbf091deb00317b2d2851c3",
    "src": "music-67"
  },
];

export default allMusic;
