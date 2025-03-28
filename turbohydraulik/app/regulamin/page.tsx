import { Box, Container, Typography } from "@mui/material";
import Footer from "../components/sections/footer/Footer";
import theme from "../theme/theme";
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
const TermsPage = () => {
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
      <Container maxWidth="md" sx={{ py: 15 }}>
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Typography
            variant="h2"
            fontWeight="bold"
            color={theme.palette.primary.main}
          >
            Regulamin Usług – TurboHydraulik
          </Typography>
        </Box>

        <Typography
          variant="h6"
          fontWeight="bold"
          mt={4}
          color={theme.palette.secondary.main}
        >
          1. Postanowienia ogólne
        </Typography>
        <Typography>
          Niniejszy regulamin określa zasady świadczenia usług hydraulicznych
          przez firmę TurboHydraulik. Korzystając z naszych usług, akceptujesz
          niniejsze warunki.
        </Typography>

        <Typography
          variant="h6"
          mt={4}
          fontWeight="bold"
          color={theme.palette.secondary.main}
        >
          2. Zakres usług
        </Typography>
        <Typography>
          TurboHydraulik świadczy usługi w zakresie instalacji, napraw oraz
          konserwacji systemów hydraulicznych, wodno-kanalizacyjnych i
          grzewczych.
        </Typography>

        <Typography
          variant="h6"
          mt={4}
          fontWeight="bold"
          color={theme.palette.secondary.main}
        >
          3. Warunki realizacji usług
        </Typography>
        <Typography>
          Usługi wykonywane są na podstawie wcześniejszego zlecenia. Klient
          zobowiązuje się do zapewnienia dostępu do miejsca naprawy oraz
          pokrycia kosztów niezbędnych materiałów.
        </Typography>

        <Typography
          variant="h6"
          mt={4}
          fontWeight="bold"
          color={theme.palette.secondary.main}
        >
          4. Cennik i płatności
        </Typography>
        <Typography>
          Ceny usług ustalane są indywidualnie. Płatności można dokonać gotówką,
          przelewem lub kartą płatniczą.
        </Typography>

        <Typography
          variant="h6"
          mt={4}
          fontWeight="bold"
          color={theme.palette.secondary.main}
        >
          5. Reklamacje i gwarancja
        </Typography>
        <Typography>
          TurboHydraulik udziela gwarancji na wykonane usługi. Wszelkie
          reklamacje należy zgłaszać w ciągu 14 dni od daty realizacji usługi.
        </Typography>

        <Typography
          variant="h6"
          mt={4}
          fontWeight="bold"
          color={theme.palette.secondary.main}
        >
          6. Postanowienia końcowe
        </Typography>
        <Typography>
          Firma zastrzega sobie prawo do zmian w regulaminie. Aktualne warunki
          są dostępne na stronie internetowej.
        </Typography>
      </Container>
      <Footer />
    </Box>
  );
};

export default TermsPage;
