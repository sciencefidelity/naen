/**
 * Keystage component (dynamic)
 *
 * @remarks
 * Generates all pages in the subdirectory `/keystage`.
 *
 * @param data - all props fetched with `keystagePageQuery` in `lib/queries.ts`.
 * @param slug - all props fetched with `keystagePagePathQuery` in `lib/queries.ts`.
 */
import { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import sanityClient from "lib/sanityClient"
import Layout from "components/layout"
import Date from "components/date"
import Link from "components/link"
import ErrorTemplate from "components/errorTemplate"
import Sidebar from "components/sidebar"
import { staffQuery, staffPathQuery } from "lib/queries"
import { Event, Navigation, Settings, Staff } from "lib/interfaces"

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(staffPathQuery)
  return {
    paths: paths.map((slug: string[]) => ({ params: { slug } })),
    fallback: true
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params
  const data = await sanityClient.fetch(staffQuery, { slug })
  return {
    props: {
      data
    }
  }
}

const StaffPage = ({ data }) => {
  const router = useRouter()
  const { locale } = router
  if(router.isFallback) {
    return (
      <ErrorTemplate />
    )
  }
  if(!data) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <ErrorTemplate />
      </>
    )
  }
  const { events, navigation, settings, staff } = data as {
    staff: Staff
    events: Event[]
    navigation: Navigation
    settings: Settings
  }
  return (
    <Layout
      navigation={navigation}
      settings={settings}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr"
      }}>
        <section style={{marginRight: "2rem"}}>
          {staff.title && <h1>
            {locale === "cy" && staff.__i18n_refs.title
              ? staff.__i18n_refs.title
              : staff.title}
          </h1>}
          {staff.bio && <p>
            {locale === "cy" && staff.__i18n_refs.bio
              ? staff.__i18n_refs.bio
              : staff.bio}
          </p>}
          <h2>Events as facilitator</h2>
          <div>
            {staff.events.map(event =>
              <div key={event._id}>
                {event.dateStart &&
                  <Date date={event.dateStart} />
                }
                {event.title &&
                  <h2 style={{margin: 0}}>
                    <Link href={`/${event._type}/${event.slug}`}>
                      {locale === "cy" && event.__i18n_refs
                        ? event.__i18n_refs.title
                        : event.title}
                    </Link>
                  </h2>
                }
                {event.summary &&
                  <p>
                    {locale === "cy" && event.__i18n_refs
                      ? event.__i18n_refs.summary
                      : event.summary}
                  </p>
                }
              </div>
            )}
          </div>
        </section>
        <Sidebar events={events} />
      </div>
    </Layout>
  )
}
export default StaffPage
