import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import { DefaultLayout } from '../../components'


function ReadingRoute(props) {
  const { location } = props
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  return (
    <DefaultLayout
      location={ location }  
    >
      <Helmet>
        <title>Reading | { site.siteMetadata.title }</title>
        <meta name="description" content={ site.siteMetadata.description } />

        <meta property="og:title" content={ 'Reading | ' + site.siteMetadata.title } />
        <meta property="og:description" content={ site.siteMetadata.description } />

        <meta name="twitter:title" content={ 'Reading | ' + site.siteMetadata.title } />
        <meta name="twitter:description" content={ site.siteMetadata.description } />
      </Helmet>

      <article className="post">
        <h1 className="post__title">Reading</h1>
        <div className="post__content">
          <p>
            I've always been interested in what other people find interesting, and a great source of truth for
            that has been through their libraries.
          </p>
          <p>
            This is mine.
          </p>
          <h3>Articles</h3>
          <ul>
            <li><a href="https://waitbutwhy.com/2014/05/fermi-paradox.html" target="_blank" rel="noopener noreferrer">The Fermi Paradox</a>; Tim Urban</li>
            <li><a href="https://www.theatlantic.com/magazine/archive/2020/07/trumps-collaborators/612250/" target="_blank" rel="noopener noreferrer">History Will Judge the Complicit</a>; Anne Applebaum</li>
            <li><a href="https://www.robinwieruch.de/lessons-learned-deep-work-flow" target="_blank" rel="noopener noreferrer">(Deep Work) =&gt; Flow - A Proven Path to Satisfaction</a>; Robin Wieruch</li>
            <li><a href="https://ncase.me/trust/" target="_blank" rel="noopener noreferrer">The Evolution of Trust</a>; Nicky Case</li>
            <li><a href="https://www.nybooks.com/daily/2015/06/26/reading-is-forgetting/" target="_blank" rel="noopener noreferrer">Reading is Forgetting</a>; Tim Parks</li>
          </ul>
          <h3>Books</h3>
          <ul>
              <li><a href="https://www.amazon.ca/dp/0735619670/" target="_blank" rel="noopener noreferrer">Code Complete</a>; Steve McConnell</li>
              <li><a href="https://www.amazon.ca/dp/1449373321/" target="_blank" rel="noopener noreferrer">Designing Data-Intensive Applications</a>; Martin Kleppmann</li>
              <li><a href="https://www.amazon.ca/dp/1491946008/" target="_blank" rel="noopener noreferrer">Fluent Python</a>; Luciano Ramalho</li>
              <li><a href="https://www.amazon.ca/dp/0140442103/" target="_blank" rel="noopener noreferrer">Letters from a Stoic</a>; Seneca</li>
              <li><a href="https://www.amazon.ca/dp/030735654X/" target="_blank" rel="noopener noreferrer">Brave New World</a>; Aldous Huxley</li>
              <li><a href="https://www.amazon.ca/dp/0141036141/" target="_blank" rel="noopener noreferrer">1984</a>; George Orwell</li>
              <li><a href="https://www.amazon.ca/dp/0393355624/" target="_blank" rel="noopener noreferrer">Surely You're Joking, Mr. Feynman!</a>; Richard P. Feynman</li>
              <li><a href="https://www.amazon.ca/dp/1577315936/" target="_blank" rel="noopener noreferrer">The Hero with a Thousand Faces</a>; Joseph Campbell</li>
              <li><a href="https://www.amazon.ca/dp/0198739834/" target="_blank" rel="noopener noreferrer">Superintelligence</a>; Nick Bostrom</li>
              <li><a href="https://www.amazon.ca/dp/0330508113/" target="_blank" rel="noopener noreferrer">The Hitchhiker's Guide to the Galaxy</a>; Douglas Adams</li>
              <li><a href="https://www.amazon.ca/dp/0060555661/" target="_blank" rel="noopener noreferrer">The Intelligent Investor</a>; Benjamin Graham</li>
              <li><a href="https://www.amazon.ca/dp/0261102389/" target="_blank" rel="noopener noreferrer">The Lord of the Rings</a>; J.R.R. Tolkien</li>
          </ul>
          <h3>Lectures / Talks / Interviews</h3>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=mhFQA998WiA" target="_blank" rel="noopener noreferrer">Helping Students Who Procrastinate</a>; Tim Pychyl</li>
          </ul>
        </div>
      </article>

    </DefaultLayout>
  )
}

ReadingRoute.propTypes = {
  location: PropTypes.node.isRequired,
}

export default ReadingRoute