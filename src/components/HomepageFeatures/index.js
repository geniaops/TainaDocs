import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Plan',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        This site is the entry point to the TAINA Documentation. Taina is an
        Artificial Intelligence (AI) and an integral part of
        the "IA para la Ciudadanía" project.
      </>
    ),
  },
  {
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    title: 'Documentation',
    description: (
      <>
        This site lets you focus on documentations. Go
        ahead and explore, it will be fun.
      </>
    ),
  },
  {
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    title: 'Loren Ipsum',
    description: (
      <>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
        voluptatibus quia nesciunt, enim officiis illo esse dolores libero
        asperiores iusto amet sit cupiditate sunt.
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
