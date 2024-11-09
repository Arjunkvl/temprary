var studentNames =[
    'ABEL JOSE JOSHY',
    'ABIN SOJAN',
    'ADBIN BIJU',
    'AJSAL MUHAMMED',
    'AKSHAY BENNY',
    'ALAN S EMMANUEL',
    'ALAN SAVIYO',
    'ALBIN JEES',
    'ANSON THOMAS GIGI',
    'BIBIN BIJU',
    'EMIL ROY',
    'HRISHIKESH E S',
    'JAISE JENNIS',
    'JOBIN JOBY',
    'JONATH MANOJ',
    'MISBAH K K',
    'MUHAMMED JASEEM',
    'MUHAMMED SHAMNAD P K',
    'SHERONE C JOSEPH',
    'TOM PAUL SURESH',
    'YADHUKRISHNA P J',
    'DRISYA ANTO',
    'LIYA JOHNSON',
    'NIRIKSHA RAJEEVAN',
    'NIVEDYA A V',
    'VINAYA C P',
    'ABHINAV A P',
    'AENON JAIM',
    'AMAL JOSEPH BIJU',
    'ARJUN A S',
    'ASHIN SHAJI',
    'ATHUL ANTO SHIJO',
    'CHRISTO FRANCIS',
    'MUHAMMED ARSHAM',
    'MUHAMMED SIJAD T P',
    'ANOL TREESA ANTONY',
    'BRIJIT MARIYA BOBAN',
    'GANIYA SULTHANA M',
    'SREYA SHIJU',
    'VARSHA PRADEEP',];

    const container = document.getElementById("container");
    
         // Loop to create 40 copies of the div with the image
         for (let i = 0; i < 40; i++) {
            // Create the img-holder div
            const hold = document.createElement("div");
            hold.style = "text-align:center;";
            const imgHolder = document.createElement("div");
            imgHolder.className = "img-holder";
  
            const name = document.createElement("h3");
            name.textContent = studentNames[i];
            // Create the image element
            const img = document.createElement("img");
            img.src = "https://i.imgur.com/DH1RPtN.jpg";
            img.alt = "pic";
  
            // Append image to img-holder div
            imgHolder.appendChild(img);
            hold.append(imgHolder);
            hold.append(name);
  
            // Append img-holder div to container
            container.appendChild(hold);
          }
    
       