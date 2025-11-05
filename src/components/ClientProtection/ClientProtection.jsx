import React, { useState, useId } from "react";
import {
  IoShieldCheckmark,
  IoChevronForward,
  IoClose,
  IoCheckmark
} from "react-icons/io5";
import { TbTicket, TbLockDollar, TbTruckReturn, TbCashBanknote } from "react-icons/tb";
import "./ClientProtection.css";

export default function ClientProtection({
  badges = [
    "Devolução gratuita",
    "Reembolso automático por danos",
    "Pagamento seguro",
    "Cupom por atraso na coleta",
  ],
  coupon = {
    title: "Cupom de envio",
    desc: "Desconto de R$ 20 no frete em pedidos acima de R$ 29",
    cta: "Resgatar",
    onRedeem: () => {},
  },
}) {
  const [open, setOpen] = useState(false);
  const modalTitleId = useId();

  // abre/fecha modal
  const toggle = () => setOpen((v) => !v);

  return (
    <section className="ttk-protect" aria-label="Proteção do cliente e cupons">
      {/* Header clicável */}
      <button type="button" className="ttk-protect__bar" onClick={toggle}>
        <div className="ttk-protect__barLeft">
          <IoShieldCheckmark className="ttk-protect__shield" aria-hidden />
          <h3 className="ttk-protect__title">Proteção do cliente</h3>
        </div>
        <IoChevronForward className="ttk-protect__chev" aria-hidden />
      </button>

      {/* Lista 2 colunas, como no print */}
      <ul className="ttk-protect__list" onClick={toggle}>
        {badges.map((txt, i) => (
          <li className="ttk-protect__item" key={i}>
            <span className="ttk-protect__tick">
              <IoCheckmark />
            </span>
            <span className="ttk-protect__txt">{txt}</span>
          </li>
        ))}
      </ul>

      {/* Cupom (estático, opcional) */}
      <div className="ttk-coupon" role="group" aria-label="Cupom de envio">
        <div className="ttk-coupon__left">
          <div className="ttk-coupon__title">{coupon.title}</div>
          <div className="ttk-coupon__desc">{coupon.desc}</div>
        </div>
        <button type="button" className="ttk-coupon__btn" onClick={coupon.onRedeem}>
          {coupon.cta}
        </button>
      </div>

      {/* Modal sheet embutido */}
      {open && (
        <>
          <div className="ttk-protect__overlay" onClick={toggle} />

          <div
            className="ttk-protect__sheet"
            role="dialog"
            aria-modal="true"
            aria-labelledby={modalTitleId}
          >
            <div className="ttk-protect__sheetHead">
              <h4 id={modalTitleId}>Proteção do cliente</h4>
              <button className="ttk-protect__close" aria-label="Fechar" onClick={toggle}>
                <IoClose />
              </button>
            </div>

            {/* Hero escudo */}
            <div className="ttk-protect__hero">
              <div className="ttk-protect__heroShield">
                <IoShieldCheckmark />
              </div>
            </div>

            <div className="ttk-protect__sheetBody">
              {/* Pagamento seguro */}
              <section className="ttk-protect__block">
                <header className="ttk-protect__blockHead">
                  <span className="ttk-protect__blockIcon ttk--gold">
                    <TbLockDollar />
                  </span>
                  <h5>Pagamento seguro</h5>
                </header>
                <p>
                  Para garantir a segurança, as informações do seu cartão são criptografadas e
                  protegidas contra acesso não autorizado. O TikTok Shop não vende, aluga ou
                  cede suas informações pessoais a terceiros para fins de marketing.
                </p>
                <div className="ttk-protect__badges">
                  <span>MasterCard SecureCode</span>
                  <span>Verified by VISA</span>
                </div>
              </section>

              {/* Devoluções gratuitas */}
              <section className="ttk-protect__block">
                <header className="ttk-protect__blockHead">
                  <span className="ttk-protect__blockIcon ttk--gold">
                    <TbTruckReturn />
                  </span>
                  <h5>Devoluções gratuitas em 30 dias</h5>
                </header>
                <p>
                  Devolução gratuita em até 30 dias após o recebimento do seu produto. Os Termos
                  e Condições se aplicam.
                </p>
                <a href="#" className="ttk-protect__link">Como devolver</a>
              </section>

              {/* Cupons */}
              <section className="ttk-protect__block">
                <header className="ttk-protect__blockHead">
                  <span className="ttk-protect__blockIcon ttk--gold">
                    <TbTicket />
                  </span>
                  <h5>Cupom por problema de estoque</h5>
                </header>
                <p>
                  Ganhe um cupom de R$ 25,00 para sua próxima compra se o item que você pediu
                  estiver esgotado.
                </p>
              </section>

              <section className="ttk-protect__block">
                <header className="ttk-protect__blockHead">
                  <span className="ttk-protect__blockIcon ttk--gold">
                    <TbTicket />
                  </span>
                  <h5>Cupom por atraso na coleta</h5>
                </header>
                <p>
                  Ganhe um cupom de R$ 25,00 para sua próxima compra se o entregador não coletar
                  seu pedido com o vendedor em até 7 dias após a confirmação do pedido.
                </p>
              </section>

              {/* Reembolsos automáticos */}
              <section className="ttk-protect__block">
                <header className="ttk-protect__blockHead">
                  <span className="ttk-protect__blockIcon ttk--gold">
                    <TbCashBanknote />
                  </span>
                  <h5>Reembolso automático por danos</h5>
                </header>
                <p>
                  Obtenha um reembolso total se seu pedido for perdido ou danificado. Você não
                  precisa enviar uma solicitação de reembolso.
                </p>
              </section>

              <section className="ttk-protect__block ttk--last">
                <header className="ttk-protect__blockHead">
                  <span className="ttk-protect__blockIcon ttk--gold">
                    <TbCashBanknote />
                  </span>
                  <h5>Reembolso automático por atraso na coleta</h5>
                </header>
                <p>
                  Receba um reembolso total se o entregador não retirar seu pedido com o vendedor
                  em até 7 dias úteis após a confirmação do pedido.
                </p>
              </section>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
