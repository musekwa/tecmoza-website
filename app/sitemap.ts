
export default async function sitemap() {

    // const metadata = await getSiteMetadata();

    const routes = [
        { url: "/", lastModified: new Date() },
        { url: "/about-us", lastModified: new Date() },
        { url: "/services", lastModified: new Date() },
        { url: "/portfolio", lastModified: new Date() },
        { url: "/contact-us", lastModified: new Date() },
        { url: "/privacy-policy", lastModified: new Date() },
    ];

    return routes;
}