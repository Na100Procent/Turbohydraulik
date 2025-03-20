// eslint-disable-next-line @typescript-eslint/no-require-imports
const { SitemapStream, streamToPromise } = require("sitemap");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const websiteData = require("../app/data/toBeData.json");

const hostname = "https://turbohydraulik.pl";
console.log(websiteData);
const cities = Object.keys(websiteData.cities);
const services = Object.keys(websiteData.services);

const cityPriority = 0.8;
const districtPriority = 0.6;
const servicePriority = 0.7;
const cityServicePriority = 0.7;

const urls = [{ url: "/", changefreq: "daily", priority: 1.0 }];

cities.forEach((city) => {
  urls.push({ url: `/${city}`, changefreq: "monthly", priority: cityPriority });

  services.forEach((service) => {
    urls.push({
      url: `/${city}/${service}`,
      changefreq: "monthly",
      priority: cityServicePriority,
    });
  });

  const cityData = websiteData.cities[city];
  Object.keys(cityData.districts).forEach((district) => {
    urls.push({
      url: `/${city}/${district}`,
      changefreq: "monthly",
      priority: districtPriority,
    });
  });
});

services.forEach((service) => {
  urls.push({
    url: `/${service}`,
    changefreq: "monthly",
    priority: servicePriority,
  });
});

const sitemapStream = new SitemapStream({ hostname });
urls.forEach((url) => sitemapStream.write(url));
sitemapStream.end();

streamToPromise(sitemapStream).then((data) => {
  fs.writeFileSync("./public/sitemap.xml", data.toString());
});
