import { useState } from "react";
import Botao from "../components/Botao";
import Input from "../components/Input";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import React from "react";
import ValidadorCpf from "./ValidadorCpf";
import ValidadorCnpj from "./ValidadorCnpj";


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        paddingRight: "16px",
        borderRadius: "8px",
        background: "#FAFAFA",
        boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs"
          sx={{
            "& .MuiTabs-indicator": { backgroundColor: "#00786F" },
          }}
        >
          {/* melhorar como as cores de texto estão sendo setadas nos componentes */}
          <Tab
            label="CPF"
            sx={{ "&.Mui-selected": { color: "#00786F" } }}
            {...a11yProps(0)}
          />
          <Tab
            label="CNPJ"
            sx={{ "&.Mui-selected": { color: "#00786F" } }}
            {...a11yProps(1)}
          />
          <Tab
            label="RG" disabled
            sx={{ "&.Mui-selected": { color: "#00786F" } }}
            {...a11yProps(2)}
          />
          <Tab
            label="CNH"
            sx={{ "&.Mui-selected": { color: "#00786F" } }}
            {...a11yProps(3)}
          />
          <Tab
            label="RENAVAM"
            sx={{ "&.Mui-selected": { color: "#00786F" } }}
            {...a11yProps(4)}
          />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <ValidadorCpf />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <ValidadorCnpj />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
      
      </CustomTabPanel>
    </Box>
  );
}
