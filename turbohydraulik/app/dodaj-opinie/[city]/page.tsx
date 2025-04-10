import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { TopMenuLogo } from "@/public/assets/icons/icons";
import Image from "next/image";
import theme from "@/app/theme/theme";
import BackgroundWrapper from "@/app/components/shared/BackgroundWrapper";
import { homePagePath } from "@/app/constants/appConstants";
import { aboutUsUrl } from "@/app/constants/imagesUrls";
import Footer from "@/app/components/sections/footer/Footer";
import { websiteData } from "@/app/data/data";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  const cities = Object.keys(websiteData.cities);
  return cities.map((city) => ({ city }));
};

type PageProps = {
  params: { city: string };
};

const ReviewPage = ({ params }: PageProps) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { city } = params;
  const isValidCity = Object.keys(websiteData.cities).includes(city);

  if (!isValidCity) {
    notFound();
  }

  const placeId =
    websiteData.cities[city as keyof typeof websiteData.cities].googleMapData
      .placeId;
  const googleReviewUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;

  return (
    <Box
      sx={{ background: theme.palette.custom.background, minHeight: "100vh" }}
    >
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
            <Link href={homePagePath} aria-label="strona home page">
              <TopMenuLogo />
            </Link>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "120px",
            px: 3,
            pb: 8,
            gap: 5,
            textAlign: isMobile ? "center" : "left",
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
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgb(41, 190, 86)",
                    color: "#1A1A1A",
                    fontWeight: 700,
                    "&:hover": { backgroundColor: "#A3D92F" },
                  }}
                >
                  TAK JESTEM ZADOWOLONY/A
                </Button>
              </a>
              <Link href={homePagePath}>
                <Button
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
