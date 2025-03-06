import { notFound } from "next/navigation";
import Link from "next/link";
import { cities, District, districts, Service, services } from "../data/data";
import { Box } from "@mui/material";

export default function CityPage({ params }: { params: { city: string } }) {
  const cityName = params.city;

  const city = cities.find(
    (c) => c.slug.toLowerCase() === cityName.toLowerCase()
  );

  if (!city) {
    return notFound();
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap="20px"
    >
      <h1>turboHydraulik w {city.name}</h1>
      <ul>
        <h2>Usługi w {city.name}</h2>
        {services.map((service: Service) => (
          <li key={service.id}>
            <Link href={`/${city.slug}/${service.slug}`}>
              {service.name + cityName}
            </Link>
          </li>
        ))}
      </ul>
      <h2>Dzielnice miasta {city.name}</h2>
      <ul>
        {districts
          .filter((district: District) => district.cityId === city.id)
          .map((district: District) => (
            <li key={district.id}>
              <Link href={`/${city.slug}/${district.slug}`}>
                {district.name}
              </Link>
            </li>
          ))}
      </ul>
    </Box>
  );
}
