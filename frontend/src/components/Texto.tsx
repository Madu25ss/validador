
import React from "react";
import { Link } from "react-router-dom";

type TextoProps = {
  name: string,
  path: string
};

const TextoLink = (props: TextoProps) => {
  return (
    <>
      <div className="w-full mt-8">
        <div>
          <h3 className="text-base text-zinc-600">
            Ou <Link className="cursor-pointer text-teal-700 hover:underline" to={"/PagGerador"}> {`Gerar ${props.name}`}</Link>
          </h3>
        </div>
      </div>
    </>
  );
};

export default TextoLink;
