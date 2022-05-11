import {
    PaletteColor,
    PaletteOptions,
    
  } from '@mui/material/styles';
  import {Color} from '@mui/material';
  import {ColorPartial} from "@mui/material/styles/createPalette"
  
  declare module '@mui/material/styles' {
    export interface PaletteOptions {
      blue: ColorPartial;
      yellow: ColorPartial;
      red: ColorPartial;
      green: ColorPartial;
      orange: ColorPartial;
      dorado: ColorPartial;
      sun: ColorPartial;
      topaz: ColorPartial;
      peridot: ColorPartial;
      olivine: ColorPartial;
      turquoise: ColorPartial;
      rose: ColorPartial;
      amethyst: ColorPartial;
      tanzanite: ColorPartial;
      opal: ColorPartial;
      sapphire: ColorPartial;
    }
    export interface Palette {
      blue: Color;
      yellow: Color;
      red: Color;
      green: Color;
      orange: Color;
      dorado: Color;
      sun: Color;
      topaz: Color;
      peridot: Color;
      olivine: Color;
      turquoise: Color;
      rose: Color;
      amethyst: Color;
      tanzanite: Color;
      opal: Color;
      sapphire: Color;
    }
  }