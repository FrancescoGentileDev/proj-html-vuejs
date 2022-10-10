class contextComponent {
    type = 0;
    icon = String;
    title = String;
    divider = Number; //0 Normal, 1 Styled
    subtitle = String;
    buttons = undefined;
    form = false;
    constructor(title = undefined, subtitle = undefined, icon = undefined, divider = undefined, ...buttons) {
      this.title = title;
      this.subtitle = subtitle;
      this.icon = icon;
      this.divider = divider;
      if (buttons.length > 0) {
        this.buttons = buttons;
      }
    }
    setForm(form = true) {
      this.form = form;
      return this
    }
    setIcon(icon = undefined) {
      this.icon = icon;
      return this
    }
    setButtons(...buttons) {  
      this.buttons = buttons;
      return this
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
    noContainer = false;
    background= undefined
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
      return this
    }
  
    setGridColumn(gridColumn = 4) { 
      this.gridColumn = gridColumn;
      return this
    }
  
    setJumbo(jumbo = true) {
      this.jumbo = jumbo;
      return this
    }
  
    setTops(icon, title, subtitle, divider, buttons) {
      this.top = new contextComponent(title, subtitle, icon, divider, buttons);
      return this
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
      return this
    }
  
    setNoContainer(noContainer = true) {
      this.noContainer = noContainer;
      return this
    }
  
    getTop() {
      const top = this.top
      const background = this.background.text
      console.log(background)
      return {...top, background: background}
      
    }
}
  

export { button, contextComponent, personComponent, sectionComponent }