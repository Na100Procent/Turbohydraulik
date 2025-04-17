import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import theme from "@/app/theme/theme";
import BackgroundWrapper from "@/app/components/shared/BackgroundWrapper";
import { homePagePath } from "@/app/constants/appConstants";
import { aboutUsUrl } from "@/app/constants/imagesUrls";
import Footer from "@/app/components/sections/footer/Footer";
import { citiesData } from "@/app/data/data";
import LogoContainer from "../components/shared/LogoContainer";
import ServiceForm from "../components/sections/footer/components/ServiceForm";

export const generateStaticParams = async () => {
  const cities = Object.keys(citiesData);

  return cities.map((city) => ({ city }));
};

const ReviewPage = () => {
  return (
    <Box sx={{ background: theme.palette.custom.background }}>
      <BackgroundWrapper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            position: "fixed",
            width: "105%",
            zIndex: 100,
            top: 0,
            left: "-10px",
            backgroundColor: theme.palette.custom.background,
            paddingX: "10px",
          }}
        >
          <Link href={homePagePath}>
            <LogoContainer notNavigateHome />
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "120px",
            gap: "40px",
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              sm: "column",
              xs: "column",
              xxs: "column",
            },
          }}
        >
          <ServiceForm
            includeBg
            actionButtonTitle="Wyślij opinię"
            customTitle="NAPISZ OPINIĘ O USŁUDZE"
          />

          <Box sx={{ maxWidth: 400, width: "100%", zIndex: 20 }}>
            <Image
              src={aboutUsUrl}
              alt="Twój Hydraulik Logo"
              width={400}
              height={400}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "20px",
              }}
            />
          </Box>
        </Box>
      </BackgroundWrapper>

      <Footer withoutMobileNumber />
    </Box>
  );
};

export default ReviewPage;
