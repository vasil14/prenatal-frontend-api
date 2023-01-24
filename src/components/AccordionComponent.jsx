import React, { useState } from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const AccordionComponent = ({ data }) => {
  console.log(data);
  const [active, setActiveKey] = useState(["0"]);
  const onChange = (key) => {
    console.log([key]);
    setActiveKey([key]);
  };
  return (
    <Collapse accordion ghost>
      <Panel header="INFO PRODOTTO" key="1">
        <p className="font-semibold">
          Codice prodotto: <span className="font-normal"> {data.mpn} </span>{" "}
        </p>
        <p className="font-semibold">
          Genere: <span className="font-normal"> {data.genere} </span>{" "}
        </p>
      </Panel>

      <Panel header="CONSEGNA E RESO" key="2">
        <div className="space-y-3 leading-4">
          <div className="space-y-1">
            <p className="font-semibold ">Consegna</p>
            <p>
              La consegna avviene mediamente entro 3 giorni lavorativi dalla
              conferma d’ordine.
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold">Rimborsi</p>
            <p>
              Il reso è sempre gratuito e il rimborso verrà emesso sullo stesso
              metodo di pagamento.
            </p>
          </div>
        </div>
      </Panel>
    </Collapse>
  );
};

export default AccordionComponent;