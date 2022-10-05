/*
const ciccio = {
  top: {
    icon: String,
    title: String,
    divider: Number, //0 Normal, 1 Styled
    subtitle: String,
    callToAction: {
      isIcon: Boolean,
      text: String,
    },
  },
  grid: [
    {
      type: Number, //0 GRID OF ICON, 1 GRID OF PERSON
      elements: [
        {
          icon: String,
          title: String,
          subtitle: String,
          subtitle: String,
          social: {
            facebook: String,
            twitter: String,
            instagram: String,
          },
        },
      ],
    },
  ],
};
*/

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
];

export default sections;
