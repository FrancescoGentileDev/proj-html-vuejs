/* eslint-disable no-unused-vars */
class contextComponent {
  type = 0;
  icon = String;
  title = String;
  divider = Number; //0 Normal, 1 Styled
  subtitle = String;
  buttons = undefined;
  constructor(title = "", subtitle = "", icon = "", divider = undefined, ...buttons) {
    this.title = title;
    this.subtitle = subtitle;
    this.icon = icon;
    this.divider = divider;
    if (buttons.length > 0) {
      this.buttons = buttons;
    }
  }
}

class personComponent {
  type = 1;
  icon = String;
  title = String;
  subtitle = String;
  paragraph = String;
  social = {
    facebook: String,
    twitter: String,
    instagram: String,
  };
  constructor(title = "", subtitle = "", icon = "", paragraph = "", social = undefined) {
    this.title = title;
    this.subtitle = subtitle;
    this.icon = icon;
    this.paragraph = paragraph;
    this.social = social;
  }
}

class button {
  isIcon = Boolean;
  text = "";
  link = "";
  constructor(isIcon = false, text = "", link = "") {
    this.isIcon = isIcon;
    this.text = text;
    this.link = link;
  }
}

class sectionComponent {
  type = 2;
  gridColumn = 3;
  jumbo = false;
  grids = [
    {
      type: Number,
      elements: Array,
    },
  ];
  top = contextComponent;

  constructor(top = undefined, ...grids) {
    this.top = top;
    let type = undefined;
    if (grids[0]) type = grids[0].type;

    if (grids.length > 0)
      this.grids = [
        {
          type,
          elements: grids,
        },
      ]
    else this.grids = undefined
  }

  setBackground(isImage = false, text = "") {
    this.background = {
      isImage,
      text,
    };
  }

  setTop(icon, title, subtitle, divider, buttons) {
    this.top = new contextComponent(title, subtitle, icon, divider, buttons);
  }

  setGrids(...grids) {
    let type = undefined;
    if (grids[0]) type = grids[0].type;
    this.grids = [
      {
        type,
        elements: grids,
      },
    ];
  }
}

let section1 = new sectionComponent(
  new contextComponent(
    "Welcome to Avada Health",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id sem sit amet risus semper eleifend. Sed rhoncus ultrices aliquam."
  )
);
section1.setGrids(
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
);
section1.gridColumn = 4;

let section2 = new sectionComponent(
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
);
section2.setBackground(false, "f1efef");

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

let section4 = new sectionComponent(
  new contextComponent(
    "TOUR OUR FACILITIES",
    `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
    inventore veritatis et quasi architecto beatae`,
    "icon-7.png",
    0,
    new button(true, "play-icon.png", "#")
  )
);
section4.jumbo = true;
section4.setBackground(true, "paralax-bg-tour-facilities.jpg");

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
  ),
  new sectionComponent(
    new contextComponent(
      "Emergency Care",
      `Sed ut perspicatis unde omnis iste natuserfor it voluptatem accusantium daloremque
      laudantium, totam rem aperiam, eaque`,
      undefined,
      1 //0 Normal, 1 Styled
    )
  ),
  new sectionComponent(
    new contextComponent(
      "Emergency Care",
      `Sed ut perspicatis unde omnis iste natuserfor it voluptatem accusantium daloremque
      laudantium, totam rem aperiam, eaque`,
      undefined,
      1 //0 Normal, 1 Styled
    )
  )
);

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
  {
    background: {
      isImage: true,
      text: "make-an-appointment.jpg",
    },
    top: {
      icon: "icon-7.png",
      title: "TOUR OUR FACILITIES",
      divider: 0,
      subtitle: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae`,

      form: true,
    },
  },
  //SECTION 7
  {
    gridColumn: 4,
    background: {
      isImage: true,
      text: "rgb-gradient-bar-for-logo-carrasel.jpg",
    },
    noContainer: true,
    grids: [
      {
        type: 0,
        elements: [
          {
            icon: "client-logos-1.png",
          },
          {
            icon: "client-logos-2.png",
          },
          {
            icon: "client-logos-3.png",
          },
          {
            icon: "client-logos-4.png",
          },
        ],
      },
    ],
  },
];

const header = {
  background: "header-image-homepage.jpg",
  title: "Caring /For Life",
  subtitle: `Kind words can be short and easy to speak, but their echoes are truly
      endless. Avada Health focuses on you s i it was our own family.`,
  buttons: [
    {
      isIcon: false,
      text: "LEARN MORE",
      link: "#",
    },
  ],
};

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
