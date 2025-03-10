import { Box, Container, Typography } from "@mui/material";

const colors = {
  main: "#FED33B",
  darkBlue: "#02578C",
  lightBg: "#F9FAFB",
  yellowLight: "#fff8e2",
  blueLight: "#e5edf1",
};

const TermsPage = () => {
  return (
    <Container maxWidth="md" sx={{ backgroundColor: colors.lightBg, py: 4 }}>
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography variant="h4" fontWeight="bold" color={colors.darkBlue}>
          Regulamin Usług – TurboHydraulik
        </Typography>
      </Box>

      <Typography variant="h6" fontWeight="bold" color={colors.main}>
        1. Postanowienia ogólne
      </Typography>
      <Typography paragraph>
        Niniejszy regulamin określa zasady świadczenia usług hydraulicznych
        przez firmę TurboHydraulik. Korzystając z naszych usług, akceptujesz
        niniejsze warunki.
      </Typography>

      <Typography variant="h6" fontWeight="bold" color={colors.main}>
        2. Zakres usług
      </Typography>
      <Typography paragraph>
        TurboHydraulik świadczy usługi w zakresie instalacji, napraw oraz
        konserwacji systemów hydraulicznych, wodno-kanalizacyjnych i grzewczych.
      </Typography>

      <Typography variant="h6" fontWeight="bold" color={colors.main}>
        3. Warunki realizacji usług
      </Typography>
      <Typography paragraph>
        Usługi wykonywane są na podstawie wcześniejszego zlecenia. Klient
        zobowiązuje się do zapewnienia dostępu do miejsca naprawy oraz pokrycia
        kosztów niezbędnych materiałów.
      </Typography>

      <Typography variant="h6" fontWeight="bold" color={colors.main}>
        4. Cennik i płatności
      </Typography>
      <Typography paragraph>
        Ceny usług ustalane są indywidualnie. Płatności można dokonać gotówką,
        przelewem lub kartą płatniczą.
      </Typography>

      <Typography variant="h6" fontWeight="bold" color={colors.main}>
        5. Reklamacje i gwarancja
      </Typography>
      <Typography paragraph>
        TurboHydraulik udziela gwarancji na wykonane usługi. Wszelkie reklamacje
        należy zgłaszać w ciągu 14 dni od daty realizacji usługi.
      </Typography>

      <Typography variant="h6" fontWeight="bold" color={colors.main}>
        6. Postanowienia końcowe
      </Typography>
      <Typography paragraph>
        Firma zastrzega sobie prawo do zmian w regulaminie. Aktualne warunki są
        dostępne na stronie internetowej.
      </Typography>
    </Container>
  );
};

export default TermsPage;
