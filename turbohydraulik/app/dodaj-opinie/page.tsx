"use client";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import Footer from "../components/sections/footer/Footer";
import BackgroundWrapper from "../components/shared/BackgroundWrapper";
import Link from "next/link";
import { homePagePath } from "../constants/appConstants";
import { TopMenuLogo } from "@/public/assets/icons/icons";
import Image from "next/image";
import theme from "../theme/theme";
import { aboutUsUrl } from "../constants/imagesUrls";

const ReviewPage = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
                href="https://search.google.com/local/writereview?placeid=xxx"
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
