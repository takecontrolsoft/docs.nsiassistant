import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.gridBackground}>
        <div className={styles.excelGrid}></div>
        <div className={styles.formulas}>
          {/* Excel формули */}
          <span className={styles.formula} style={{top: '8%', left: '3%'}}>{"=SUM(A1:A10)"}</span>
          <span className={styles.formula} style={{top: '18%', right: '6%'}}>{"=VLOOKUP(B2,D:E,2)"}</span>
          <span className={styles.formula} style={{top: '85%', left: '2%'}}>{"=IF(C3>0,\"Да\",\"Не\")"}</span>
          <span className={styles.formula} style={{top: '70%', right: '4%'}}>{"=AVERAGE(B1:B20)"}</span>

          {/* ОПР референции */}
          <span className={styles.formula} style={{top: '5%', left: '25%'}}>{"ОПР!G26"}</span>
          <span className={styles.formula} style={{top: '12%', right: '25%'}}>{"ОПР!H31"}</span>
          <span className={styles.formula} style={{top: '35%', left: '2%'}}>{"ОПР!F18"}</span>
          <span className={styles.formula} style={{top: '55%', right: '2%'}}>{"ОПР!G42"}</span>
          <span className={styles.formula} style={{top: '78%', left: '18%'}}>{"ОПР!H55"}</span>

          {/* БАЛАНС референции */}
          <span className={styles.formula} style={{top: '15%', left: '45%'}}>{"БАЛАНС!H28"}</span>
          <span className={styles.formula} style={{top: '28%', right: '15%'}}>{"БАЛАНС!G15"}</span>
          <span className={styles.formula} style={{top: '62%', left: '8%'}}>{"БАЛАНС!I37"}</span>
          <span className={styles.formula} style={{top: '88%', right: '20%'}}>{"БАЛАНС!H44"}</span>

          {/* ДМА референции */}
          <span className={styles.formula} style={{top: '22%', left: '12%'}}>{"ДМА!I25"}</span>
          <span className={styles.formula} style={{top: '45%', right: '8%'}}>{"ДМА!J32"}</span>
          <span className={styles.formula} style={{top: '72%', left: '35%'}}>{"ДМА!I18"}</span>

          {/* ГОРИВА референции */}
          <span className={styles.formula} style={{top: '32%', right: '30%'}}>{"ГОРИВА!A34"}</span>
          <span className={styles.formula} style={{top: '50%', left: '5%'}}>{"ГОРИВА!B28"}</span>
          <span className={styles.formula} style={{top: '82%', right: '35%'}}>{"ГОРИВА!A41"}</span>

          {/* ВЗИМАНИЯ референции */}
          <span className={styles.formula} style={{top: '3%', right: '40%'}}>{"ВЗИМАНИЯ!D34"}</span>
          <span className={styles.formula} style={{top: '42%', left: '22%'}}>{"ВЗИМАНИЯ!E29"}</span>
          <span className={styles.formula} style={{top: '65%', right: '25%'}}>{"ВЗИМАНИЯ!D47"}</span>
          <span className={styles.formula} style={{top: '92%', left: '40%'}}>{"ВЗИМАНИЯ!E15"}</span>

          {/* Допълнителни референции */}
          <span className={styles.formula} style={{top: '38%', right: '45%'}}>{"ПРОДАЖБИ!C22"}</span>
          <span className={styles.formula} style={{top: '58%', left: '42%'}}>{"ЗАПАСИ!B19"}</span>
          <span className={styles.formula} style={{top: '25%', left: '55%'}}>{"РАЗХОДИ!F33"}</span>
          <span className={styles.formula} style={{top: '75%', right: '42%'}}>{"ПРИХОДИ!G28"}</span>
        </div>
      </div>
      <div className="container">
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>НСИ АСИСТЕНТ</span>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleSmall}>ДОКУМЕНТАЦИЯ</span>
            <span className={styles.heroTitleMedium}>Автоматизирано попълване на</span>
            <span className={styles.highlight}>ГФО към НСИ</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Спестява време и усилия при подаване на годишни финансови отчети
            към Националния статистически институт.
          </p>

          <div className={styles.buttons}>
            <Link
              className={clsx('button button--lg', styles.primaryButton)}
              to="https://nsiassistant.bg/WelcomePage">
              Към НСИ Асистент
            </Link>
            <a
              className={clsx('button button--lg', styles.secondaryButton)}
              href="https://isbs.nsi.bg"
              target="_blank"
              rel="noopener noreferrer">
              ИС Бизнес Статистика
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Начало"
      description="Помощник за подаване на годишни отчети към Националния статистически институт">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
