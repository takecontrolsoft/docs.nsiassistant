import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Лесен за работа',
    Svg: require('@site/static/img/easytouse.svg').default,
    description: (
      <>
        НСИ асистента е интуитивен и не изисква специфични
        познания за инсталиране, поддръжка и работа с него.
        Той се закача лесно за браузъра и въвежда данните вместо вас.
      </>
    ),
  },
  {
    title: 'Гъвкав към промени',
    Svg: require('@site/static/img/settingslist.svg').default,
    description: (
      <>
        НСИ асистента предоставя лесен и удобен потребителски интерфейс
        за конфигуриране на полетата от справките на информационна 
        система "Бизнес статистика".
      </>
    ),
  },
  {
    title: 'Мулти платформен',
    Svg: require('@site/static/img/multiplatforms.svg').default,
    description: (
      <>
        НСИ асистент е добавка към браузъра. 
        Работи на Chrome, Edge, FireFox, Safari.
        Може да се използва с десктоп операционни системи Windows, Mac, Linux.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
