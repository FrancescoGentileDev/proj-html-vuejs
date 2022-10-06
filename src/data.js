/* eslint-disable no-unused-vars */


class section {
  top =
  {
    icon: String,
    title: String,
    divider: Number, //0 Normal, 1 Styled
    subtitle: String,
    background: {
    isImage: Boolean, //0 solid, 1 img
      text: String,
    },
    buttons: [
      {
        isIcon: Boolean,
        text: String,
        link: String,
      },
    ],
  }
  grids = [
    {
      type: Number, //0 GRID OF ICON, 1 GRID OF PERSON
      elements: [
        {
          icon: String,
          title: String,
          divider: Number, //0 Normal, 1 Styled
          subtitle: String,
          paragraph: String,
          background: {
            isImage: Boolean, //0 solid, 1 img
            text: String,
          },
          buttons: [
            {
              isIcon: Boolean,
              text: String,
              link: String,
            },
          ],
          social: {
            facebook: String,
            twitter: String,
            instagram: String,
          },
        },
      ],
    },
 ]
 
  constructor() { }
  


}

/*const ciccio = {
  top: {
    icon: String,
    title: String,
    divider: Number, //0 Normal, 1 Styled
    subtitle: String,
    background: {
      isImage: Boolean, //0 solid, 1 img
      text: String,
    },
    buttons: [
      {
        isIcon: Boolean,
        text: String,
        link: String,
      },
    ],
  },
  grids: [
    {
      type: Number, //0 GRID OF ICON, 1 GRID OF PERSON
      elements: [
        {
          icon: String,
          title: String,
          divider: Number, //0 Normal, 1 Styled
          subtitle: String,
          paragraph: String,
          background: {
            isImage: Boolean, //0 solid, 1 img
            text: String,
          },
          buttons: [
            {
              isIcon: Boolean,
              text: String,
              link: String,
            },
          ],
          social: {
            facebook: String,
            twitter: String,
            instagram: String,
          },
        },
      ],
    },
  ],
};*/

const sections = [
  {
    top: {
      title: "Welcome to Avada Health",
      subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id sem sit amet risus semper eleifend. Sed rhoncus ultrices aliquam.`,
    },
    grids: [
      {
        type: 0, //0 GRID OF ICON, 1 GRID OF PERSON
        elements: [
          {
            icon: "icon-1.png",
            title: "Same day appointments",
            subtitle: " consectetur adipiscing elit. Cras id sem",
          },
          {
            icon: "icon-2.png",
            title: "world class facilities",
            subtitle: " consectetur adipiscing elit. Cras id sem",
          },
          {
            icon: "icon-3.png",
            title: "expert doctors",
            subtitle: " consectetur adipiscing elit. Cras id sem",
          },
          {
            icon: "icon-4.png",
            title: "complementary therapies",
            subtitle: " consectetur adipiscing elit. Cras id sem",
          },
        ],
      },
    ],
  },

  {
    top: {
      icon: "icon-5.png",
      title: "MEET OUR DOCTOR",
      divider: 0, //0 Normal, 1 Styled
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, blanditiis voluptatum! Facilis iure ipsa veritatis quasi quidem consectetur",
      background: {
        isImage: false,
        text: "f1efef"
      }
    },
    grids: [
      {
        type: 1, //0 GRID OF ICON, 1 GRID OF PERSON
        elements: [
          {
            icon: "doctor-1.jpg",
            title: "Jon Snow",
            subtitle: "Anesteerieifexzsl",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id sem sit amet risus semper eleifen",
            social: {
              facebook: "https://facebook.com",
              twitter: "https://twitter.com",
              instagram: "https://instagram.com",
            },
          },
          {
            icon: "doctor-2.jpg",
            title: "Tony Stac",
            subtitle: "Cardiologist",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id sem sit amet risus semper eleifen",
            social: {
              facebook: "https://facebook.com",
              twitter: "https://twitter.com",
              instagram: "https://instagram.com",
            },
          },
          {
            icon: "doctor-3.jpg",
            title: "Anna smith",
            subtitle: "Nurse practioner",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id sem sit amet risus semper eleifen",
            social: {
              facebook: "https://facebook.com",
              twitter: "https://twitter.com",
              instagram: "https://instagram.com",
            },
          },
        ],
      },
    ],
  },
  {
    top: {
      icon: "icon-6.png",
      title: "OUR HEALTH SERVICES",
      subtitle: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae`,
    },
    grids: [
      {
        type: 0, //0 GRID OF ICON, 1 GRID OF PERSON
        elements: [
          {
            icon: "icon-11.png",
            title: "rehabilitation center",
            subtitle: `At vero eos et accusamus et iusto odio dignissimos.
            ducimus qui blanditis praesentium voluptatum
            delenitatque cormupti quos dolores et quas`,
          },
          {
            icon: "icon-12.png",
            title: "rehabilitation center",
            subtitle: `At vero eos et accusamus et iusto odio dignissimos.
            ducimus qui blanditis praesentium voluptatum
            delenitatque cormupti quos dolores et quas`,
          },
          {
            icon: "icon-13.png",
            title: "rehabilitation center",
            subtitle: `At vero eos et accusamus et iusto odio dignissimos.
            ducimus qui blanditis praesentium voluptatum
            delenitatque cormupti quos dolores et quas`,
          },
          {
            icon: "icon-14.png",
            title: "rehabilitation center",
            subtitle: `At vero eos et accusamus et iusto odio dignissimos.
            ducimus qui blanditis praesentium voluptatum
            delenitatque cormupti quos dolores et quas`,
          },
          {
            icon: "icon-15.png",
            title: "rehabilitation center",
            subtitle: `At vero eos et accusamus et iusto odio dignissimos.
            ducimus qui blanditis praesentium voluptatum
            delenitatque cormupti quos dolores et quas`,
          },
          {
            icon: "icon-16.png",
            title: "rehabilitation center",
            subtitle: `At vero eos et accusamus et iusto odio dignissimos.
            ducimus qui blanditis praesentium voluptatum
            delenitatque cormupti quos dolores et quas`,
          },
        ],
      },
    ],
  },
  {
    jumbo: true,
    top: {
      icon: "icon-7.png",
      title: "TOUR OUR FACILITIES",
      divider: 0,
      subtitle: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae`,
      

      background: {
        isImage: true,
        text: "paralax-bg-tour-facilities.jpg",
      },
      buttons: [
        {
          isIcon: true,
          text: "play-icon.png",
          link: "#",
        },
      ],
    },
  },
  {
    grids: [
      {
        type: 2, //0 GRID OF ICON, 1 GRID OF PERSON, 2 GRID OF SECTION
        elements: [
          {
            title: "Emergency Care",
            divider: 1, //0 Normal, 1 Styled
            subtitle: `Sed ut perspicatis unde omnis iste natuserfor it voluptatem accusantium daloremque
            laudantium, totam rem aperiam, eaque`,
            background: {
              isImage: false, //false solid, true img
             
              text: "3AAFBF",
            },
            buttons: [
              {
                isIcon: false,
                text: "LEARN MORE",
                link: "#",
              },
            ],
          },
          {
            title: "expert diagnostics",
            divider: 1, //0 Normal, 1 Styled
            subtitle: `Sed ut perspicatis unde omnis iste natuserfor it voluptatem accusantium daloremque
            laudantium, totam rem aperiam, eaque`,
            background: {
              isImage: false, //false solid, true img
              text: "3597C3",
            },
            buttons: [
              {
                isIcon: false,
                text: "LEARN MORE",
                link: "#",
              },
            ],
          },
          {
            title: "Superb Rehabilitation",
            divider: 1, //0 Normal, 1 Styled
            subtitle: `Sed ut perspicatis unde omnis iste natuserfor it voluptatem accusantium daloremque
            laudantium, totam rem aperiam, eaque`,
            background: {
              isImage: false, //false solid, true img
              text: "327EC7",
            },
            buttons: [
              {
                isIcon: false,
                text: "LEARN MORE",
                link: "#",
              },
            ],
          },
        ],
      },
    ]
  },
  {
    top: {
      icon: "icon-7.png",
      title: "TOUR OUR FACILITIES",
      divider: 0,
      subtitle: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae`,
      background: {
        isImage: true, 
        text: "make-an-appointment.jpg",
      },
      form: true
    },
  },
  {
    top: {

      background: {
        isImage: true, 
        text: "rgb-gradient-bar-for-logo-carrasel.jpg",
      },
    },
    grids: [
      {
        type: 0,
        elements: [
          {
            icon: "client-logos-1.png"
          },
          {
            icon: "client-logos-2.png"
          },
          {
            icon: "client-logos-3.png"
          },
          {
            icon: "client-logos-4.png"
          },
        ]
      }

    ]
  }

];

export default sections;
