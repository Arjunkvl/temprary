const studentNames = [
  "ABEL JOSE JOSHY",
  "ABIN SOJAN",
  "ADBIN BIJU",
  "AJSAL MUHAMMED",
  "AKSHAY BENNY",
  "ALAN S EMMANUEL",
  "ALAN SAVIYO",
  "ALBIN JEES",
  "ANSON THOMAS GIGI",
  "BIBIN BIJU",
  "EMIL ROY",
  "HRISHIKESH E S",
  "JAISE JENNIS",
  "JOBIN JOBY",
  "JONATH MANOJ",
  "MISBAH K K",
  "MUHAMMED JASEEM",
  "MUHAMMED SHAMNAD P K",
  "SHERONE C JOSEPH",
  "TOM PAUL SURESH",
  "YADHUKRISHNA P J",
  "DRISYA ANTO",
  "LIYA JOHNSON",
  "NIRIKSHA RAJEEVAN",
  "NIVEDYA A V",
  "VINAYA C P",
  "ABHINAV A P",
  "AENON JAIM",
  "AMAL JOSEPH BIJU",
  "ARJUN A S",
  "ASHIN SHAJI",
  "ATHUL ANTO SHIJO",
  "CHRISTO FRANCIS",
  "MUHAMMED ARSHAM",
  "MUHAMMED SIJAD T P",
  "ANOL TREESA ANTONY",
  "BRIJIT MARIYA BOBAN",
  "GANIYA SULTHANA M",
  "SREYA SHIJU",
  "VARSHA PRADEEP",
];

const imgs = [
  "https://i.imgur.com/MG7M3a3.jpg",
  "https://i.imgur.com/ehTlIGL.jpg",
  "https://i.imgur.com/pPnTzm3.jpg",
  "https://i.imgur.com/AOnpyRl.jpg",
  "https://i.ibb.co/Scn8kkb/IMG-20241111-WA0001.jpg",
  "https://i.imgur.com/BTwodfc.jpg",
  "https://i.ibb.co/7vgdydS/Screenshot-20241110-185645.jpg",
  "https://i.ibb.co/BwSFXMQ/albin.jpg",
  "https://i.imgur.com/yk86EYH.jpg",
  "https://i.ibb.co/8xCNVZC/IMG-20241111-WA0011.jpg",
  "https://i.ibb.co/tCwmqJN/IMG-20240523-001855-008.jpg",
  "https://i.ibb.co/ZXXfZTG/IMG20241102102648-01-01.jpg",
  "https://i.ibb.co/jVfJJGr/1000007669-01.jpg",
  "https://i.imgur.com/DH1RPtN.jpg",
  "https://i.ibb.co/xFjT2Tz/IMG-20240419-113137-747.jpg",
  "https://i.ibb.co/6cKwYhs/IMG-20241111-WA0003.jpg",
  "https://i.imgur.com/rz2SB1f.jpg",
  "",
  "https://i.imgur.com/3vKs3qx.jpg",
  "https://i.ibb.co/rM7vj15/IMG-20241030-154754.jpg",
  "https://i.imgur.com/it4OVsI.jpg",
  "https://i.imgur.com/wDmx6HU.jpg",
  "https://i.ibb.co/93HHJtK/IMG-20241110-131304.jpg",
  "https://i.imgur.com/upTRsUR.jpg",
  "https://i.imgur.com/PxUPRxU.jpg",
  "https://i.imgur.com/lMdXBoj.jpg",
  "https://i.ibb.co/rw89shL/Screenshot-2024-11-01-20-31-04-826-com-whatsapp-edit.jpg",
  "https://i.imgur.com/7jemc1C.jpg",
  "https://i.ibb.co/N9tK2Qj/Screenshot-2024-11-04-19-40-49-985-com-google-android-apps-photos-edit.jpg",
  "https://i.imgur.com/PISafrh.jpg",
  "https://i.imgur.com/6fggyRZ.jpg",
  "https://i.ibb.co/RjfL41D/IMG-20241104-WA0030.jpg",
  "https://i.ibb.co/bJjnDb4/Christo.jpg",
  "https://i.imgur.com/05fvTid.jpg",
  "https://i.ibb.co/ZchbDzY/SAVE-20241030-173830.jpg",
  "https://i.imgur.com/3SKHBgX.jpg",
  "https://i.imgur.com/NYMPIHr.jpg",
  "https://i.imgur.com/q0QNph2.jpg",
  "https://i.imgur.com/aez9IYU.jpg",
  "https://i.imgur.com/TvgbWZh.jpg",
];

const container = document.getElementById("container");

// Loop to create 40 copies of the div with the image
for (let i = 0; i < 40; i++) {
  // Create the img-holder div
  const link = document.createElement("a");
  link.href = `studentPages/${i + 1}.html`;
  link.style.textDecoration = "none";
  link.style.color = "white";
  const hold = document.createElement("div");
  hold.className = "hold";
  const imgHolder = document.createElement("div");
  imgHolder.className = "img-holder";

  const name = document.createElement("h3");
  name.textContent = studentNames[i];
  // Create the image element
  const img = document.createElement("img");
  img.src = imgs[i];
  img.alt = "pic";

  // Append image to img-holder div
  imgHolder.appendChild(img);
  hold.append(imgHolder);
  hold.append(name);
  link.append(hold);
  // Append img-holder div to container
  container.appendChild(link);
}
