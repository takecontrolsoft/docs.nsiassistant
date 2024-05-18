import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Инсталиране',
    Svg: require('@site/static/img/installation.svg').default,
    description: (
      <>
        Как да инсталирам добавката към браузъра?
        Как да премина към по-нова версия?
        Как да премахна разширението от браузъра?
      </>
    ),
    link: "./docs/install/install_extension"
  },
  {
    title: 'Инструкции и Указания',
    Svg: require('@site/static/img/usermanual.svg').default,
    description: (
      <>
        Какво е НСИ асистента? Как да го конфигурирам?
        Какви са изискванията към файлове за импорт?
      </>
    ),
    link: "./docs/intro"
  },
  {
    title: 'Постове и новини',
    Svg: require('@site/static/img/blog.svg').default,
    description: (
      <>
        Какви са подобренията в НСИ Асистент? 
        Има ли нови видеа? 
        Какво ново е добавено в документацията?
      </>
    ),
    link: "./blog"
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <a href={link}><Svg className={styles.featureSvg} role="img" /></a> 
      </div>
      <div className="text--center padding-horiz--md">
       <a href={link}><Heading as="h3">{title}</Heading></a> 
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
