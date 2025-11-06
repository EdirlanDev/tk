import '../styles/ttk-shell.css';
import { ASSET } from '../utils/asset';
import AppBar from '../components/AppBar/AppBar.jsx';
import MediaCarousel from '../components/MediaCarousel/MediaCarousel.jsx';
import PriceBlock from '../components/PriceBlock/PriceBlock.jsx';
import TitleMeta from '../components/TitleMeta/TitleMeta.jsx';
import ShippingBlock from '../components/ShippingBlock/ShippingBlock.jsx';
import ClientProtection from '../components/ClientProtection/ClientProtection.jsx';
// import StickyTabBar from '../components/StickyTabBar/StickyTabBar.jsx';
import CreatorsVideos from '../components/CreatorsVideos/CreatorsVideos.jsx';
import ReviewSummary from '../components/ReviewSummary/ReviewSummary.jsx';
import ReviewsSection from '../components/ReviewsSection/ReviewsSection.jsx';
import ProductDetails from '../components/ProductDetails/ProductDetails.jsx';
import EmbeddedVideo from '../components/EmbeddedVideo/EmbeddedVideo.jsx';
import ProductRichDesc from '../components/ProductRichDesc/ProductRichDesc.jsx';
import ProductGrid from '../components/ProductGrid/ProductGrid.jsx';
import FAQ from '../components/FAQ/FAQ.jsx';
import FixedActionBar from '../components/FixedActionBar/FixedActionBar.jsx';
import ShopHeader from '../components/ShopHeader/ShopHeader.jsx';
import PromoOnceModal from '../components/PromoOnceModal/PromoOnceModal.jsx';

export default function Home() {
  const media = [
    { type: 'image', src: ASSET('/assets/perfumes/per1.webp'), alt: 'perfumes' },
    { type: 'image', src: ASSET('/assets/perfumes/per2.webp'), alt: 'perfumes' },
    { type: 'image', src: ASSET('/assets/perfumes/per3.webp'), alt: 'perfumes' },
    { type: 'image', src: ASSET('/assets/perfumes/per4.webp'), alt: 'perfumes' },
    { type: 'image', src: ASSET('/assets/perfumes/per5.webp'), alt: 'perfumes' },
    { type: 'image', src: ASSET('/assets/perfumes/per6.webp'), alt: 'perfumes' },
    { type: 'image', src: ASSET('/assets/perfumes/per7.webp'), alt: 'perfumes' },
    { type: 'image', src: ASSET('/assets/perfumes/per8.webp'), alt: 'perfumes' },
    { type: 'image', src: ASSET('/assets/perfumes/per9.webp'), alt: 'perfumes' },
  ];

  return (
    <div className="ttk-shell">
      <AppBar />

      <main className="ttk-fullbleed">
        <MediaCarousel items={media} />
        <PriceBlock
          discountLabel="-31%"
          priceCurrent={62.90}
          priceOriginal={239.50}
          installments={{ count: 6, value: 10.48, interestFree: true }}
          promoText="Desconto de 10%, máximo de R$ 25"
        />
        <TitleMeta
          title="Kit 10 Perfumes 30ml Masculino e Feminino Onlyou Lacrado Hot Sale"
          rating={4.8}
          reviewsCount={60}
          soldCount={269}
        />
        <ShippingBlock
          freeLabel="Frete grátis"
          eta="Receba até 10–19 de nov"
          feeStriked="R$ 18,10"
        />
        <ClientProtection />

        {/* <StickyTabBar
          sections={[
            { id: 'overview',        label: 'Visão geral' },
            { id: 'reviews',         label: 'Avaliações' },
            { id: 'description',     label: 'Descrição' },
            { id: 'recommendations', label: 'Recomendações' },
          ]}
        /> */}
        <ShopHeader
          avatar={ASSET("/assets/perfumes/loja.png")}
          name="Caplace Beleza e Perfumes"
          sold={12000}
          href="#"
        />
        {/* ===== Visão geral ===== */}
        <section id="overview" className="ttk-section">
          <CreatorsVideos
            items={[
              { thumb: ASSET("/assets/v1.jpg"), author: "Débora Dai...", duration: "0:30", video: ASSET("/assets/v3.mp4") },
              { thumb: ASSET("/assets/v2.jpg"), author: "Olivie8", duration: "0:27", video: ASSET("/assets/v2.mp4") },
              { thumb: ASSET("/assets/v3.jpg"), author: "Olivie8", duration: "0:18", video: ASSET("/assets/v1.mp4") },
            ]}
            onOpen={(index) => console.log('abrir vídeo', index)}
          />
          {/* <ReviewSummary rating={4.6} total={20} /> */}
        </section>

        {/* ===== Avaliações ===== */}
        <section id="reviews" className="ttk-section">
          <ReviewsSection />
        </section>

        {/* ===== Descrição ===== */}
        <section id="description" className="ttk-section">
          <ProductDetails />

        </section>


        <FAQ
          title="FAQ"
          items={[
            {
              q: 'As fragrâncias são originais?',
              a: 'Não. São fragrâncias inspiradas em perfumes importados e nacionais famosos, desenvolvidas para oferecer aroma semelhante com excelente fixação.',
            },
            {
              q: 'Posso escolher as fragrâncias?',
              a: 'Sim. Após realizar a compra, entre em contato pelo chat informando suas preferências. Faremos o possível para atender conforme disponibilidade em estoque.',
            },
            {
              q: 'Qual a durabilidade das fragrâncias?',
              a: 'A duração média é de até 10 horas, podendo variar conforme o tipo de pele e ambiente.',
            },
            {
              q: 'Qual o tamanho de cada frasco?',
              a: 'Cada perfume possui 30 ml, ideal para uso pessoal ou revenda.',
            },
            {
              q: 'O produto é lacrado?',
              a: 'Sim, todos os frascos são enviados lacrados e em embalagens seguras.',
            },
            {
              q: 'O kit é unissex?',
              a: 'Sim, o kit contém 5 fragrâncias femininas e 5 masculinas, podendo haver variações conforme estoque.',
            },
          ]}
        />
        <img
          src={ASSET("/logo-tik.png")}
          alt="logo"
          style={{
            width: "60%",
            display: "block",
            margin: "12px auto 0",
            paddingBottom: "30px",
            opacity: 0.95,        // leve ajuste estético
          }}
        />

      </main>
      {/* <PromoOnceModal
        checkoutHref="https://www.pay-pagamentos.link/checkout/a6a71559-3923-4677-9b4e-1aff240a8e80"
        autoOpenDelayMs={3000}             // abre 5s depois
        onceTTLms={24 * 60 * 60 * 1000}          // não reaparece por 24h (ajuste se quiser)
      /> */}
      <FixedActionBar />
    </div>
  );
}
