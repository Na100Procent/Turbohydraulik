import { Box, Container, Typography } from "@mui/material";
import theme from "@/app/theme/theme";

const PolicyPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box
        sx={{
          backgroundColor: theme.palette.custom.background,
          p: 4,
          borderRadius: 2,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          color={theme.palette.primary.main}
          gutterBottom
        >
          Polityka Prywatności
        </Typography>
        <Typography
          variant="body1"
          color={theme.palette.text.primary}
          paragraph
        >
          Twoja prywatność jest dla nas bardzo ważna. W niniejszej polityce
          prywatności opisujemy, jakie informacje zbieramy, w jaki sposób je
          wykorzystujemy i jak chronimy.
        </Typography>

        <Typography
          variant="h5"
          color={theme.palette.secondary.main}
          gutterBottom
        >
          1. Gromadzenie danych
        </Typography>
        <Typography variant="body1" paragraph>
          Możemy zbierać dane osobowe, takie jak imię, adres e-mail, numer
          telefonu, gdy użytkownik korzysta z naszych usług lub kontaktuje się z
          nami.
        </Typography>

        <Typography
          variant="h5"
          color={theme.palette.secondary.main}
          gutterBottom
        >
          2. Wykorzystanie danych
        </Typography>
        <Typography variant="body1" paragraph>
          Zebrane dane mogą być wykorzystywane do świadczenia usług,
          kontaktowania się z użytkownikami oraz ulepszania naszej platformy.
        </Typography>

        <Typography
          variant="h5"
          color={theme.palette.secondary.main}
          gutterBottom
        >
          3. Ochrona danych
        </Typography>
        <Typography variant="body1" paragraph>
          Dokładamy wszelkich starań, aby zapewnić bezpieczeństwo Twoich danych
          osobowych. Stosujemy odpowiednie środki techniczne i organizacyjne w
          celu ochrony informacji.
        </Typography>
      </Box>
    </Container>
  );
};

export default PolicyPage;
