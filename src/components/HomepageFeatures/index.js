import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import videoBannerImg from '@site/docs/guide/img/image3.png';

export default function HomepageFeatures() {
  return (
    <>
    <div className={styles.sectionsWrapper}>
      {/* Documentation Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionGrid}>
            {/* Main Card */}
            <div className={styles.mainCard}>
              <span className={styles.cardLabel}>ДОКУМЕНТАЦИЯ</span>
              <h2 className={styles.cardTitle}>Как работи НСИ Асистент</h2>
              <p className={styles.cardDescription}>
                Ръководство за инсталиране, конфигуриране и използване на системата
                за автоматизирано подаване на статистически отчети.
              </p>
              <Link to="/docs/intro" className={styles.cardButton}>
                Към ръководството
              </Link>
            </div>

            {/* Quick Links */}
            <div className={styles.quickLinks}>
              <span className={styles.quickLinksLabel}>БЪРЗ ДОСТЪП</span>
              <Link to="/docs/intro" className={styles.quickLink}>
                <span className={styles.quickLinkDot}></span>
                <span className={styles.quickLinkText}>Въведение</span>
                <span className={styles.quickLinkArrow}>›</span>
              </Link>
              <Link to="/docs/guide" className={styles.quickLink}>
                <span className={styles.quickLinkDot}></span>
                <span className={styles.quickLinkText}>Ръководство</span>
                <span className={styles.quickLinkArrow}>›</span>
              </Link>
              <Link to="/docs/install/install_extension" className={styles.quickLink}>
                <span className={styles.quickLinkDot}></span>
                <span className={styles.quickLinkText}>Инсталиране</span>
                <span className={styles.quickLinkArrow}>›</span>
              </Link>
              <Link to="/docs/changes2025" className={styles.quickLink}>
                <span className={styles.quickLinkDot}></span>
                <span className={styles.quickLinkText}>Промени за 2025 г.</span>
                <span className={styles.quickLinkArrow}>›</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className={styles.videoSection}>
        <div className={styles.videoGrid}></div>
        <div className="container">
          {/* Hero Banner */}
          <div className={styles.videoBanner}>
            <div className={styles.videoBannerContent}>
              <h2 className={styles.videoBannerTitle}>
                Видео уроци за бързо попълване на отчети в ИС "Бизнес статистика"
              </h2>
              <Link to="/videos/introduction" className={styles.videoBannerButton}>
                Към видеата
              </Link>
            </div>
            <Link to="/videos/introduction" className={styles.videoBannerImage}>
              <img src={videoBannerImg} alt="НСИ Асистент" />
              <div className={styles.playButton}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
            </Link>
          </div>

          {/* Video Categories */}
          <div className={styles.videoCategories}>
            <Link to="/videos/getting-started" className={styles.videoCategory}>
              <div className={styles.videoCategoryIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="10 8 16 12 10 16 10 8"/>
                </svg>
              </div>
              <h3 className={styles.videoCategoryTitle}>Въведение</h3>
              <p className={styles.videoCategoryDesc}>Основни функции на системата</p>
            </Link>

            <Link to="/videos/configuration" className={styles.videoCategory}>
              <div className={styles.videoCategoryIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
              </div>
              <h3 className={styles.videoCategoryTitle}>Конфигуриране</h3>
              <p className={styles.videoCategoryDesc}>Настройка на системата</p>
            </Link>

            <Link to="/videos/examples" className={styles.videoCategory}>
              <div className={styles.videoCategoryIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M3 9h18M9 21V9"/>
                </svg>
              </div>
              <h3 className={styles.videoCategoryTitle}>Справки и примери</h3>
              <p className={styles.videoCategoryDesc}>Реални примери от кантори</p>
            </Link>

            <Link to="/videos/short-videos" className={styles.videoCategory}>
              <div className={styles.videoCategoryIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3 className={styles.videoCategoryTitle}>Кратки видеа</h3>
              <p className={styles.videoCategoryDesc}>Бързи съвети и трикове</p>
            </Link>
          </div>
        </div>
      </section>
    </div>

    {/* Promo Video */}
    <section className={styles.promoVideoSection}>
      <div className="container">
        <h2 className={styles.promoVideoTitle}>Има по-лесен начин</h2>
        <div className={styles.promoVideoWrapper}>
          <iframe
            src="https://www.youtube.com/embed/dgoDF4b1w2A"
            title="НСИ Асистент"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.promoVideo}
          ></iframe>
        </div>
      </div>
    </section>

    {/* License CTA */}
    <section className={styles.subscriptionSection}>
      <div className="container">
        <div className={styles.subscriptionContent}>
          <div className={styles.subscriptionIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <div className={styles.subscriptionText}>
            <span className={styles.subscriptionLabel}>Лицензиране</span>
            <h3 className={styles.subscriptionTitle}>
              Какъв е броят фирми, които обслужвате?
            </h3>
            <a
              href="https://nsiassistant.bg/LicensePolicy"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.subscriptionLink}
            >
              Политика за лицензите →
            </a>
          </div>
          <a
            href="https://products.takecontrolsoft.eu/nsi-assistant"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.subscriptionButton}
          >
            Вижте цената
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
