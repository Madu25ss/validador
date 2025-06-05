import { TabsProps } from '@mui/material/Tabs';

declare module '@mui/material/Tabs' {
  interface TabsPropsIndicatorColorOverrides {
    customGreen: true;
  }
  
  interface TabsPropsTextColorOverrides {
    customGreen: true;
  }
}

