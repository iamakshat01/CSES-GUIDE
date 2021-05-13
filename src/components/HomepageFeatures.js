import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Found A Error',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We are open source. Open the issue in github repository and don't hesitate to communicate and contribute.
      </>
    ),
  },
  {
    title: 'Get Better at Problem Solving',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Beginner friendly editorials for the CSES problem set to improve intution, thinking and problem solving skills.
      </>
    ),
  },
  {
    title: 'Built with Docusaurus',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        ⚡️ Docusaurus will help you ship a beautiful documentation site in no time.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
