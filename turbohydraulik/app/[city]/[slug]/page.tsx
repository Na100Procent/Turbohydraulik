import { websiteData } from "@/app/data/data";
import ServicePage from "./ServicePage";
import DistrictPage from "./DistrictPage";

interface Params {
  params: {
    city: string;
    slug: string;
  };
}

const DynamicPage = ({ params }: Params) => {
  const { city: cityParam, slug: slugParam } = params;
  const service = websiteData.services[slugParam];
  const foundCity = websiteData.cities[cityParam];
  const district = foundCity.districts[slugParam];
  return (
    <div>
      <h1>
        {service ? (
          <ServicePage service={service} city={foundCity} />
        ) : district ? (
          <DistrictPage slug={district} city={foundCity} />
        ) : null}
      </h1>
    </div>
  );
};

export default DynamicPage;
