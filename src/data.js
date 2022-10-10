/* eslint-disable no-unused-vars */
import {button, contextComponent, personComponent, sectionComponent} from "./classes-data"
const section1 = new sectionComponent(
  new contextComponent(
    "Welcome to Avada Health",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id sem sit amet risus semper eleifend. Sed rhoncus ultrices aliquam."
  ),

  new contextComponent(
    "Same day appointments",
    "consectetur adipiscing elit. Cras id sem",
    "icon-1.png"
  ),
  new contextComponent(
    "world class facilities",
    "consectetur adipiscing elit. Cras id sem",
    "icon-2.png"
  ),
  new contextComponent(
    "world class facilities",
    "consectetur adipiscing elit. Cras id sem",
    "icon-3.png"
  ),
  new contextComponent(
    "world class facilities",
    "consectetur adipiscing elit. Cras id sem",
    "icon-4.png"
  )
).setGridColumn(4)



const section2 = new sectionComponent(
  new contextComponent(
    "MEET OUR DOCTOR",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id sem sit amet risus semper eleifend. Sed rhoncus ultrices aliquam.",
    "icon-5.png",
    0
  )
);
section2.setGrids(
  new personComponent(
    "Jon Snow",
    "Anesteerieifexzsl",
    "doctor-1.jpg",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id sem sit amet risus semper eleifen",
    {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    }
  ),
  new personComponent(
    "Tony Stac",
    "Cardiologist",
    "doctor-2.jpg",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id sem sit amet risus semper eleifen",
    {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    }
  ),
  new personComponent(
    "Anna smith",
    "Nurse practioner",
    "doctor-3.jpg",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id sem sit amet risus semper eleifen",
    {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    }
  )
).setBackground(false, "f1efef");

const section3 = new sectionComponent(
  new contextComponent(
    "OUR HEALTH SERVICES",
    `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
  inventore veritatis et quasi architecto beatae`,
    "icon-6.png"
  ),
  new contextComponent(
    "rehabilitation center",
    `At vero eos et accusamus et iusto odio dignissimos.
    ducimus qui blanditis praesentium voluptatum
    delenitatque cormupti quos dolores et quas`,
    "icon-11.png"
  ),
  new contextComponent(
    "rehabilitation center",
    `At vero eos et accusamus et iusto odio dignissimos.
    ducimus qui blanditis praesentium voluptatum
    delenitatque cormupti quos dolores et quas`,
    "icon-12.png"
  ),
  new contextComponent(
    "rehabilitation center",
    `At vero eos et accusamus et iusto odio dignissimos.
    ducimus qui blanditis praesentium voluptatum
    delenitatque cormupti quos dolores et quas`,
    "icon-13.png"
  ),
  new contextComponent(
    "rehabilitation center",
    `At vero eos et accusamus et iusto odio dignissimos.
    ducimus qui blanditis praesentium voluptatum
    delenitatque cormupti quos dolores et quas`,
    "icon-14.png"
  ),
  new contextComponent(
    "rehabilitation center",
    `At vero eos et accusamus et iusto odio dignissimos.
    ducimus qui blanditis praesentium voluptatum
    delenitatque cormupti quos dolores et quas`,
    "icon-15.png"
  ),
  new contextComponent(
    "rehabilitation center",
    `At vero eos et accusamus et iusto odio dignissimos.
    ducimus qui blanditis praesentium voluptatum
    delenitatque cormupti quos dolores et quas`,
    "icon-16.png"
  )
);

const section4 = new sectionComponent(
  new contextComponent(
    "TOUR OUR FACILITIES",
    `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
    inventore veritatis et quasi architecto beatae`,
    "icon-7.png",
    0,
    new button(true, "play-icon.png", "#")
  )
).setJumbo(true).setBackground(true, "paralax-bg-tour-facilities.jpg");

const section5 = new sectionComponent();

section5.setGrids(
  new sectionComponent(
    new contextComponent(
      "Emergency Care",
      `Sed ut perspicatis unde omnis iste natuserfor it voluptatem accusantium daloremque
      laudantium, totam rem aperiam, eaque`,
      undefined,
      1 //0 Normal, 1 Styled
    )
  ).setBackground(false, "3597C3"),
  new sectionComponent(
    new contextComponent(
      "Emergency Care",
      `Sed ut perspicatis unde omnis iste natuserfor it voluptatem accusantium daloremque
      laudantium, totam rem aperiam, eaque`,
      undefined,
      1 //0 Normal, 1 Styled
    )
  ).setBackground(false, "327EC7"),
  new sectionComponent(
    new contextComponent(
      "Emergency Care",
      `Sed ut perspicatis unde omnis iste natuserfor it voluptatem accusantium daloremque
      laudantium, totam rem aperiam, eaque`,
      undefined,
      1 //0 Normal, 1 Styled
    )
  ).setBackground(false, "327EC7"),
);

const section6 = new sectionComponent(
  new contextComponent(
    "TOUR OUR FACILITIES",
    `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae`,
    "icon-7.png",
    0,

  ).setForm(true)).setBackground(true, "make-an-appointment.jpg");

const section7 = new sectionComponent(
  undefined,
  new contextComponent().setIcon("client-logos-1.png"),
  new contextComponent().setIcon("client-logos-2.png"),
  new contextComponent().setIcon("client-logos-3.png"),
  new contextComponent().setIcon("client-logos-4.png"),
).setNoContainer(true).setGridColumn(4).setBackground(true, "rgb-gradient-bar-for-logo-carrasel.jpg")

const header = new sectionComponent(
  new contextComponent(
    "Caring /For Life",
    `Kind words can be short and easy to speak, but their echoes are truly
      endless. Avada Health focuses on you s i it was our own family.`,
  ).setButtons(
    new button(false, "LEARN MORE", "#")
  )
).setBackground(true,"header-image-homepage.jpg" ).getTop()



const sections = [
  //SECTION 1
  section1,
  //SECTION 2
  section2,
  //SECTION 3
  section3,
  //SECTION 4
  section4,
  //SECTION 5
  section5,
  //SECTION 6
  section6,
  //SECTION 7
  section7
];




const nav = {
  logo: "medical_logo_1x_light.png",
  routes: [
    {
      link: "#",
      text: "Home",
    },
    {
      link: "#",
      text: "About",
    },
    {
      link: "#",
      text: "Department",
    },
    {
      link: "#",
      text: "Articles",
    },
    {
      link: "#",
      text: "Make Appointment",
      button: true,
    },
  ],
};

const footer = [
  {
    logo: "medical_logo_1x_dark.png",
    text: `Sed ut perspiciais unde omnisse natus eror st volupatem accusantium dolernue
    launtitotam aperiam, caque psa quae abil. nventeveias et quas architect beatae:
    uptatem accusantum,remaperiamsiat. Voluptatem accusestetsium doloremaue.
    Taudaen.Lorern psum isdolores efsunser.`,
    subtitle: "learn more about us",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
    },
  },
  {
    title: "contact information",
    divider: true,
    contact: {
      position: "121 King street, United Kingdom",
      phone: "1234567890",
    },
  },
  {
    title: "medical departments",
    divider: true,
    others: [
      "Cardiology",
      "pediatrics",
      "diabetes care",
      "re-natel care",
      "ultrasound echocardiogram",
    ],
    buttons: ["view our departments"],
  },
];
export { sections, header, nav, footer };
