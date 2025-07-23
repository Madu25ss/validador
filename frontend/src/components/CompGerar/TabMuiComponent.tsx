import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import React from "react";
import ValidadorCpf from "../CompValidar/ValidadorCpf";
import ValidadorCnpj from "../CompValidar/ValidadorCnpj";
import ValidadorCnh from "../CompValidar/ValidadorCnh";
import ValidadorPlaca from "../CompValidar/ValidadorPlaca";
import { useNavigate, useParams } from "react-router-dom";
import { useHooksStore } from "../../store/storeHooks";

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
  const navigate = useNavigate();
  const { tabIndex } = useParams();
  const [value, setValue] = React.useState(Number(tabIndex) || 0);

  const {
    setCpf,
    setNascimento,
    setCnh,
    setCnpj,
    setPlaca,
    setResultado,
    setSucesso,
    setValidaInput,
    SetNaoExibir,
    setRetornoJson,
  } = useHooksStore();

  React.useEffect(() => {
    setResultado(undefined);
    setSucesso(undefined);
    setValidaInput(undefined);
    SetNaoExibir(undefined);
    setRetornoJson([""]);

    setCpf("");
    setNascimento("");
    setCnh("");
    setCnpj("");
    setPlaca("");
  }, [value]);

  React.useEffect(() => {
    if (tabIndex && Number(tabIndex) !== value) {
      setValue(Number(tabIndex));
    }
  }, [tabIndex]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    navigate(`/validador/${newValue}`);
  };

  return (
    <Box
      sx={{
        width: "100%",
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
            label="CNH"
            sx={{ "&.Mui-selected": { color: "#00786F" } }}
            {...a11yProps(2)}
          />
          <Tab
            label="PLACA"
            sx={{ "&.Mui-selected": { color: "#00786F" } }}
            {...a11yProps(3)}
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
        <ValidadorCnh />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <ValidadorPlaca />
      </CustomTabPanel>
    </Box>
  );
}
