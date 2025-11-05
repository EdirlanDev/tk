import React from "react";
import { IoChevronForward } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import "./ShippingBlock.css";

export default function ShippingBlock({
  freeLabel = "Frete grátis",
  eta = "Receba até 10–19 de nov",
  feeStriked = "R$ 18,10",
}) {
  return (
    <section className="ttk-ship" aria-label="Informações de frete">
      <div className="ttk-ship__row">
        {/* ícone de caminhão */}
        <TbTruckDelivery className="ttk-ship__truck" aria-hidden />

        <div className="ttk-ship__text">
          <div className="ttk-ship__eta">
            <span className="ttk-ship__pill">{freeLabel}</span>
            <strong>{eta}</strong>
          </div>

          <div className="ttk-ship__fee">
            Taxa de envio: <s>{feeStriked}</s>
          </div>
        </div>

        <IoChevronForward className="ttk-ship__chev" aria-hidden />
      </div>
    </section>
  );
}
