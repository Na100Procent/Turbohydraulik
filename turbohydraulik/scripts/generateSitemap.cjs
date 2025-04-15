/* eslint-disable @typescript-eslint/no-require-imports */

const { SitemapStream, streamToPromise } = require("sitemap");

const fs = require("fs");

const citiesData = require("../app/data/citiesData.json");
const servicesData = require("../app/data/servicesData.json");

const hostname = "https://turbohydraulik.pl";

const cities = Object.keys(citiesData);
const services = Object.keys(servicesData);

const cityPriority = 0.9;
const districtPriority = 0.7;
const servicePriority = 0.6;
const cityServicePriority = 0.8;

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

  const cityData = citiesData[city];
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
