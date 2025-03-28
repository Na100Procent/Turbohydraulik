import { Box, Container, Typography } from "@mui/material";
import theme from "@/app/theme/theme";
import Footer from "../components/sections/footer/Footer";
import BackgroundWrapper from "../components/shared/BackgroundWrapper";
import Link from "next/link";
import { homePagePath } from "../constants/appConstants";
import { TopMenuLogo } from "@/public/assets/icons/icons";

const contentSx = {
  position: "fixed",
  width: "100%",
  zIndex: 100,
  top: 0,
  backgroundColor: theme.palette.custom.background,
};

const logoButtonSx = {
  padding: "20px 20px 20px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",
};
const PolicyPage = () => {
  return (
    <Box sx={{ background: theme.palette.custom.background }}>
      <BackgroundWrapper sx={{ padding: 0 }}>
        <Box sx={contentSx}>
          <Box sx={logoButtonSx}>
            <Link href={homePagePath}>
              <TopMenuLogo />
            </Link>
          </Box>
        </Box>
      </BackgroundWrapper>
      <Container maxWidth="md" sx={{ py: 12 }}>
        <Box
          sx={{
            backgroundColor: theme.palette.custom.background,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h2"
            color={theme.palette.primary.main}
            gutterBottom
            fontWeight="bold"
          >
            Polityka Prywatności
          </Typography>
          <Typography variant="body1" color={theme.palette.text.primary}>
            Twoja prywatność jest dla nas bardzo ważna. W niniejszej polityce
            prywatności opisujemy, jakie informacje zbieramy, w jaki sposób je
            wykorzystujemy i jak chronimy.
          </Typography>

          <Typography
            variant="h6"
            mt={4}
            fontWeight="bold"
            color={theme.palette.secondary.main}
            gutterBottom
          >
            1. Gromadzenie danych
          </Typography>
          <Typography variant="body1">
            Możemy zbierać dane osobowe, takie jak imię, adres e-mail, numer
            telefonu, gdy użytkownik korzysta z naszych usług lub kontaktuje się
            z nami.
          </Typography>

          <Typography
            variant="h6"
            mt={4}
            fontWeight="bold"
            color={theme.palette.secondary.main}
            gutterBottom
          >
            2. Wykorzystanie danych
          </Typography>
          <Typography variant="body1">
            Zebrane dane mogą być wykorzystywane do świadczenia usług,
            kontaktowania się z użytkownikami oraz ulepszania naszej platformy.
          </Typography>

          <Typography
            variant="h6"
            mt={4}
            fontWeight="bold"
            color={theme.palette.secondary.main}
            gutterBottom
          >
            3. Ochrona danych
          </Typography>
          <Typography variant="body1">
            Dokładamy wszelkich starań, aby zapewnić bezpieczeństwo Twoich
            danych osobowych. Stosujemy odpowiednie środki techniczne i
            organizacyjne w celu ochrony informacji.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default PolicyPage;
