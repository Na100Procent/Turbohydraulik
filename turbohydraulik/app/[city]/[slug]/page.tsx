import {
  cities,
  City,
  District,
  districts,
  Service,
  services,
} from "@/app/data/data";

interface Params {
  params: {
    city: string;
    slug: string;
  };
}

const DynamicPage = ({ params }: Params) => {
  const { city: cityParam, slug: slugParam } = params;

  console.log(params);
  const foundCity = cities.find(
    (city: City) => city.slug.toLowerCase() === cityParam
  );
  const service = services.find(
    (service: Service) => service.slug.toLowerCase() === slugParam
  );
  const district = districts.find(
    (district: District) => district.name.toLowerCase() === slugParam
  );

  if (!foundCity || (!service && !district)) {
    return <p>Nie znaleziono odpowiedniej usługi ani dzielnicy.</p>;
  }

  return (
    <div>
      <h1>
        {service
          ? `Usługa: ${service.name} w ${foundCity.name}`
          : district
          ? `Dzielnica: ${district.name} w ${foundCity.name}`
          : null}
      </h1>
    </div>
  );
};

export default DynamicPage;
