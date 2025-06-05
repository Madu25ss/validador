import { Link } from "@mui/material";
import React from "react";

type TextoProps = {
  name: string;
};

const TextoLink = (props: TextoProps) => {
  return (
    <>
      <div className="w-full">
        <div>
          <h3 className="text-base">
            Ou <Link style={{ color: "#007A55" }}>{`Gerar ${props.name}`}</Link>
          </h3>
        </div>
      </div>
    </>
  );
};

export default TextoLink;
