import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import theme from "@/app/theme/theme";
import BackgroundWrapper from "@/app/components/shared/BackgroundWrapper";
import { homePagePath, reviewFormPath } from "@/app/constants/appConstants";
import { aboutUsUrl } from "@/app/constants/imagesUrls";
import Footer from "@/app/components/sections/footer/Footer";
import LogoContainer from "../../components/shared/LogoContainer";
import { citiesData } from "@/app/data/data";
import GoodReview from "../GoodReview";

export const generateStaticParams = async () => {
  const cities = Object.keys(citiesData);

  return cities.map((city) => ({ city }));
};

const ReviewPage = () => {
  return (
    <Box sx={{ background: theme.palette.custom.background, mt: "100px" }}>
      <BackgroundWrapper sx={{ padding: 0 }}>
        <Box
          sx={{
            position: "fixed",
            width: "100%",
            zIndex: 100,
            top: 0,
            backgroundColor: theme.palette.custom.background,
          }}
        >
          <Box
            sx={{
              padding: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
            }}
          >
            <Link href={homePagePath}>
              <LogoContainer notNavigateHome />
            </Link>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "120px",
            px: 3,
            pb: 8,
            gap: 5,
            textAlign: {
              xl: "left",
              lg: "left",
              md: "left",
              sm: "center",
              xs: "center",
              xxs: "center",
            },
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
          <Box maxWidth="500px" pt="10px">
            <Typography variant="h4" fontWeight={300}>
              JESTEŚ ZADOWOLONY
            </Typography>
            <Typography variant="h4" fontWeight={700} sx={{ mb: 3 }}>
              Z MOJEJ PRACY?
            </Typography>
            <Typography sx={{ mb: 4, fontSize: "16px", lineHeight: 1.6 }}>
              Będzie mi bardzo miło jeśli ocenisz moją pracę pozytywnie. Twoja
              opinia jest dla mnie bardzo ważna. Jeśli masz jakieś zastrzeżenia,
              zadzwoń do mnie lub zostaw wiadomość.
            </Typography>
            <Box display="flex" flexDirection="column" gap={2}>
              <GoodReview />
              <Link href={reviewFormPath}>
                <Button
                  aria-label="opinia negatywna"
                  variant="contained"
                  sx={{
                    backgroundColor: "#FF3E17",
                    fontWeight: 700,
                    "&:hover": { backgroundColor: "#e93814" },
                  }}
                >
                  NIE JESTEM ZADOWOLONY/A Z USŁUGI
                </Button>
              </Link>
            </Box>
          </Box>

          <Box sx={{ maxWidth: 400, width: "100%" }}>
            <Image
              src={aboutUsUrl}
              alt="Twój Hydraulik Logo"
              width={400}
              height={400}
              style={{ width: "100%", height: "auto", borderRadius: "20px" }}
            />
          </Box>
        </Box>
      </BackgroundWrapper>

      <Footer />
    </Box>
  );
};

export default ReviewPage;
