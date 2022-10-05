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
          image: String,
          name: String,
          subName: String,
          subTitle: String,
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
            image: "icon-1",
            name: "Same day appointments",
            subTitle: " consectetur adipiscing elit. Cras id sem",
          },
          {
            image: "icon-2",
            name: "world class facilities",
            subTitle: " consectetur adipiscing elit. Cras id sem",
          },
          {
            image: "icon-3",
            name: "expert doctors",
            subTitle: " consectetur adipiscing elit. Cras id sem",
          },
          {
            image: "icon-4",
            name: "complementary therapies",
            subTitle: " consectetur adipiscing elit. Cras id sem",
          },
        ],
      },
    ],
  },
];

export default sections;
