export default function sitemap() {
  return [
    {
      url: "https://niftynitesh.com/",
      lastModified: new Date(),
    },
    {
      url: "https://niftynitesh.com/about",
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}contact`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}offline-classes`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}online-classes`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}faq`,
      lastModified: new Date(),
    },
  ];
}
