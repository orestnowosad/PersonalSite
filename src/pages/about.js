import React from "react"

import PageLayout from "../components/layouts/pageLayout"
import SEO from "../components/seo/seo"

import styles from "./about.module.scss";

import profilePhoto from "../assets/images/me.jpg"

import resume from "../assets/docs/OrestNowosadResume.pdf"

const AboutPage = () => (
  <PageLayout>
    <SEO title="About" />
    <h1>About</h1>
    <div className={styles.intro}>
      <div className={styles.profileImage}>
        <img src={profilePhoto} alt="Orest Nowosad" />
      </div>
      <div className={styles.description}>
        <p>
          Hey there, I'm Orest, a software developer with over 1.5 years of experience helping
          small businesses grow their business outreach through the development and expansion of
          their online brand. This mainly involves designing and developing performant, responsive,
          and cost-efficient websites that fit their needs. I enjoy empowering the little guy, and 
          technology is the way that I do that.
        </p>
      </div>
    </div>
    <hr className={styles.divider} />
    <div className={styles.section}>
      <div>
        <h3 className={styles.heading}>Education</h3>
      </div>
      <div className={styles.postings}>
        <div className={styles.posting}>
          <div>
            <p className={styles.title}>B.Eng. in Computer Engineering</p>
            <p className={styles.location}>McMaster University &mdash; Hamilton, Ontario</p>
          </div>
          <div>
            <p className={styles.date}>June 2018</p>
          </div>
        </div>
      </div>
    </div>
    <hr className={styles.divider} />
    <div className={styles.section}>
      <div>
        <h3 className={styles.heading}>Experience</h3>
      </div>
      <div className={styles.postings}>
        <div className={styles.posting}>
          <div>
            <p className={styles.title}>Co-Founder & Technical Director</p>
            <p className={styles.location}>Explore Agency &mdash; Toronto, Ontario</p>
          </div>
          <div>
            <p className={styles.date}>July 2018 &mdash; Present</p>
          </div>
        </div>
      </div>
    </div>
    <hr className={styles.divider} />
    <div className={styles.section}>
      <div>
        <h3 className={styles.heading}>Extracurriculars</h3>
      </div>
      <div className={styles.postings}>
        <div className={styles.posting}>
          <div>
            <p className={styles.title}>Google igniteCS Mentor</p>
            <p className={styles.location}>McMaster Outreach &mdash; Hamilton, Ontario</p>
          </div>
          <div>
            <p className={styles.date}>April 2017 &mdash; August 2017</p>
          </div>
        </div>
      </div>
    </div>
    <hr className={styles.divider} />
    <div className={styles.contact}>
      <div className={styles.details}>
        <div>
          <h3 className={styles.heading}>Want to get in touch?</h3>
          <p className={styles.info}>Shoot me an email. I'll be more than happy to respond.</p>
        </div>
      </div>
      <div className={styles.button}>
        <a href="mailto:nowosad.orest@gmail.com">
          Contact Me &rarr;
        </a>
      </div>
    </div>
  </PageLayout>
)

export default AboutPage
