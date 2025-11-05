import React from "react";
import {
  IoCardOutline,
  IoChevronForward,
} from "react-icons/io5";
import { RiCoupon3Line } from "react-icons/ri";
import { TbTicket } from "react-icons/tb";
import "./PriceBlock.css";

const fmtBRL = (n) =>
  typeof n === "number"
    ? n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    : n;

export default function PriceBlock({
  discountLabel = "-31%",
  priceCurrent = 48.90 ,
  priceOriginal = 69.90,
  installments = { count: 6, value: 8.15, interestFree: true },
  promoText = "Desconto de 10%, máximo de R$ 25",
}) {
  return (
    <section className="ttk-price" aria-label="Preço e promoções">
      {/* Linha 1: badge + preço atual + preço riscado */}
      <div className="ttk-price__top">
        {discountLabel ? (
          <span className="ttk-price__badge">{discountLabel}</span>
        ) : null}

        <div className="ttk-price__numbers">
          <div className="ttk-price__currentWrap">
            <span className="ttk-price__currency">R$</span>
            <span className="ttk-price__current">
              {fmtBRL(priceCurrent).replace("R$", "").trim()}
            </span>
            {/* pequeno ícone de cupom ao lado do preço */}
            <RiCoupon3Line className="ttk-price__coupon" aria-hidden />
          </div>

          {priceOriginal ? (
            <span className="ttk-price__original">{fmtBRL(priceOriginal)}</span>
          ) : null}
        </div>
      </div>

      {/* Linha 2: parcelas com ícone de cartão e chevron à direita */}
      {installments?.count && installments?.value ? (
        <div className="ttk-price__installmentsRow" role="button" tabIndex={0}>
          <div className="ttk-price__installmentsLeft">
            <IoCardOutline className="ttk-price__cardIcon" aria-hidden />
            <span className="ttk-price__installmentsText">
              {installments.count}x {fmtBRL(installments.value)}{" "}
              {installments.interestFree && (
                <strong className="ttk-price__noInterest">sem juros</strong>
              )}
            </span>
          </div>
          <IoChevronForward className="ttk-price__chev" aria-hidden />
        </div>
      ) : null}

      {/* Faixa rosa de promoção */}
      {promoText ? (
        <div className="ttk-price__promo">
          <TbTicket className="ttk-price__promoIcon" aria-hidden />
          <span>{promoText}</span>
        </div>
      ) : null}
    </section>
  );
}
