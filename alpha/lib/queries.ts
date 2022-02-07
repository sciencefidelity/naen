import groq from "groq"
// const omitDrafts = "!(_id in path('drafts.**'))"

const siteFields = `
  addressLine1,
  addressLine2,
  email,
  "engagementFigures": engagement[]->{_id,count,heading},
  keywords,
  seoDescription,
  seoImage,
  seoTitle,
  signUp,
  signUpPlaceholder,
  siteDescription,
  siteName,
  "socialMediaLinks": socialLinks[]->{_id, link, site, username},
  twitterHandle
`

export const indexQuery = groq`{
  "hero": *[_type == "photography" && hero == true]{
    ...,
    "random": (dateTime(now()) - dateTime(_createdAt)) % 199
  } | order(random desc)[0],
  "quotes": *[_type == "quote"] | order(_createdAt){
    _id, cite, organisation, quote
  },
  "photography": *[_type == "photography"] | order(_createdAt){
    image, title
  },
  "site": *[_type == "site"] | order(date)[0]{
    ${siteFields}
  },
  "statements": *[_type == "statement"] | order(heading){
    statement
  },
  "video": *[_type == "video"][0]{title, videoLink}
}`

export const aboutQuery = groq`{
  "site": *[_type == "site"] | order(date)[0]{
    ${siteFields}
  },
  "statements": *[_type == "statement"] | order(heading){
    statement
  }
}`

export const eventsQuery = groq`{
  "events": *[_type == "event"] | order(date){
    _id,
    "artforms": artform[]->{_id, title},
    body,
    britelink,
    date,
    date2,
    "people": facilitators[]->{_id, name},
    imageCaption,
    "keystages": keystage[]->{_id, title},
    location,
    mainImage,
    ogDescription,
    ogTitle,
    price,
    slug,
    subtitle,
    title
  },
  "site": *[_type == "site"] | order(date)[0]{
    ${siteFields}
  },
  "statements": *[_type == "statement"] | order(heading){
    statement
  }
}`
