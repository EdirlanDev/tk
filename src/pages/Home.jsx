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

export default function Home() {
  const media = [
    { type: 'image', src: ASSET('/assets/p1.webp'), alt: 'Conjunto de panelas' },
    { type: 'image', src: ASSET('/assets/p2.webp'), alt: 'Detalhe da tampa' },
    { type: 'image', src: ASSET('/assets/p3.webp'), alt: 'Frigideira' },
    { type: 'image', src: ASSET('/assets/p4.webp'), alt: 'Caçarolas' },
    { type: 'image', src: ASSET('/assets/p5.webp'), alt: 'Cabos madeira' },
    { type: 'image', src: ASSET('/assets/p6.webp'), alt: 'Kit completo' }
  ];

  return (
    <div className="ttk-shell">
      <AppBar />

      <main className="ttk-fullbleed">
        <MediaCarousel items={media} />
        <PriceBlock
          discountLabel="-31%"
          priceCurrent={33.90}
          priceOriginal={69.90}
          installments={{ count: 6, value: 5.65, interestFree: true }}
          promoText="Desconto de 10%, máximo de R$ 25"
        />
        <TitleMeta
          title="Jogo Panelas 4 Peças Carvalho Alumínio, Vidro e Baquelite Conjunto Antiaderente indução"
          rating={4.6}
          reviewsCount={20}
          soldCount={97}
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
            { q: 'Serve para fogão de indução?', a: 'Sim, todas as peças são compatíveis com indução.' },
            { q: 'As tampas são de vidro temperado?', a: 'Sim, e possuem saída de vapor.' },
            { q: 'Possui garantia?', a: 'Garantia de 12 meses contra defeitos de fabricação.' },
          ]}
        />
        <img
          src={ASSET("/logo-tik.png")}
          alt="logo"
          style={{
            width: "60%",
            display: "block",
            margin: "12px auto 0",
            paddingBottom:"30px",
            opacity: 0.95,        // leve ajuste estético
          }}
        />

      </main>

      <FixedActionBar />
    </div>
  );
}
