import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { PortableText } from "@portabletext/react"
import { components } from "components/portableTextComponents"
import sanityClient from "lib/sanityClient"
import { joinName, sortNames } from "lib/utils"
import Layout from "components/layout"
import Localize from "components/localize"
import Sidebar from "components/sidebar"
import { StaffList } from "components/staffList"
import Venn from "components/venn"
import { aboutQuery } from "lib/queries"
import {
  Company,
  Event,
  Label,
  Navigation,
  Page,
  Settings,
  Staff
} from "lib/interfaces"
import u from "styles/utils.module.scss"
import s from "styles/about.module.scss"
import p from "styles/patterns.module.scss"

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(aboutQuery)
  return {
    props: { data }
  }
}

const About = ({ data }) => {
  const { locale } = useRouter()
  const {
    company,
    coordinators,
    events,
    labels,
    navigation,
    pages,
    settings,
    trustees
  } = data as {
    company: Company
    coordinators: Staff[]
    events: Event[]
    labels: Label[]
    navigation: Navigation
    pages: Page[]
    settings: Settings
    trustees: Staff[]
  }

  const pageHead = {
    title: locale === "cy" && pages[0].__i18n_refs
      ? pages[1].__i18n_refs.meta?.title
      : pages[1].meta?.title,
    description: locale === "cy" && pages[1].__i18n_refs
      ? pages[1].__i18n_refs.meta?.description
      : pages[1].meta?.description,
    ogTitle: locale === "cy" && pages[1].__i18n_refs
      ? pages[1].__i18n_refs.facebook?.title
      : pages[1].facebook?.title,
    ogDescription: locale === "cy" && pages[1].__i18n_refs
      ? pages[1].__i18n_refs.facebook?.description
      : pages[1].facebook?.description,
    ogURL: locale === "cy" && pages[1].__i18n_refs
      ? pages[1].__i18n_refs.meta?.canonicalURL
      : pages[1].meta?.canonicalURL,
    ogImage: locale === "cy" && pages[1].__i18n_refs
      ? pages[1].__i18n_refs.facebook?.image
      : pages[1].facebook?.image,
    twitterTitle: locale === "cy" && pages[1].__i18n_refs
      ? pages[1].__i18n_refs.twitter?.title
      : pages[1].twitter?.title,
    twitterDescription: locale === "cy" && pages[1].__i18n_refs
      ? pages[1].__i18n_refs.twitter?.description
      : pages[1].twitter?.description,
    twitterImage: locale === "cy" && pages[1].__i18n_refs
      ? pages[1].__i18n_refs.twitter?.image
      : pages[1].twitter?.image
  }

  return (
    <Layout
      company={company}
      labels={labels}
      navigation={navigation}
      pageHead={pageHead}
      settings={settings}
    >
      <div>
        <div className={`${s.hero} ${p.textbook}`}>
          <Venn />
        </div>
        <div className={`${u.container}`}>
          <div className={`${s.about} ${u.grid}`}>
            <div className={`${s.aboutContent}`}>
              <div className={`${s.aboutBody}`}>
                <PortableText
                  value={locale === "cy" && pages[1].__i18n_refs
                    ? pages[1].__i18n_refs.body : pages[1].body}
                  components={components}
                />
              </div>
              <h2 className={`${u.uppercase}`}>
                <Localize data={labels[13].text} />{/* Network Co-ordinators */}
              </h2>
              <ul className={`${s.staffList}`}>
                {sortNames(coordinators).map(coordinator =>
                  <StaffList person={coordinator} />
                )}
              </ul>
              <h2 className={`${u.uppercase}`}>
                <Localize data={labels[14].text} />{/* Chair of Trustees */}
              </h2>
              <ul className={`${s.staffList}`}>
                {sortNames(trustees).map(trustee =>
                  trustee.role.includes("Chair") &&
                    <StaffList person={trustee} />
                )}
              </ul>
              <h2 className={`${u.uppercase}`}>
                <Localize data={labels[16].text} />{/* Trustees */}
              </h2>
              <ul className={`${s.trustees}`}>
                {sortNames(trustees).map(trustee =>
                  trustee.role.includes("Trustee") &&
                    <li
                      key={trustee._id}
                      dangerouslySetInnerHTML={{
                        __html: joinName(trustee.title) }}
                    />
                )}
              </ul>
            </div>
            <Sidebar events={events} title={labels[10].text} />
          </div>
          <hr />
        </div>
      </div>
    </Layout>
  )
}
export default About
