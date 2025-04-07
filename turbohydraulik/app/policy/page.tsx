import { Box, Container, Typography } from "@mui/material";
import theme from "@/app/theme/theme";
import Footer from "../components/sections/footer/Footer";
import BackgroundWrapper from "../components/shared/BackgroundWrapper";
import Link from "next/link";
import { homePagePath } from "../constants/appConstants";
import { TopMenuLogo } from "@/public/assets/icons/icons";
import type { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    robots: {
      index: false,
      follow: false,
    },
  };
};

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
            <Link href={homePagePath} aria-label="strona home page">
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
          <Typography color={theme.palette.text.primary}>
            REVELE Spółka z ograniczoną odpowiedzialnością z siedzibą w
            Katowicach (40-014) przy ulicy Mariackiej 37 dokłada wszelkich
            starań w celu zapewnienia poszanowania Państwa prywatności i ochrony
            udzielonych informacji oraz danych osobowych podczas korzystania z
            Witryny i dokonywania zakupów w ramach sklepu oraz w tym celu
            podejmuje wszelkie niezbędne działania. Korzystanie ze strony
            internetowej{" "}
            <a href="https://turbohydraulik.pl/">www.turbohydraulik.pl</a>{" "}
            oznacza akceptację przedstawionych warunków.
          </Typography>

          <Typography
            variant="h6"
            mt={4}
            fontWeight="bold"
            color={theme.palette.secondary.main}
            gutterBottom
          >
            § 1
          </Typography>
          <Typography>
            Niniejsza Polityka Prywatności określa zasady przetwarzania i
            ochrony danych osobowych przekazanych przez Użytkowników, a także
            innych technologii pojawiających się̨ na stronie
            <a href="https://turbohydraulik.pl/">www.turbohydraulik.pl</a>.
            Administratorem danych osobowych jest REVELE Spółka z ograniczoną
            odpowiedzialnością z siedzibą w Katowicach (40-014) przy ulicy
            Mariackiej 37 (dalej jako „Administrator“). Dane osobowe
            Użytkowników są przechowywane i chronione z należytą starannością,
            zgodnie z procedurami wewnętrznymi Administratora. Administrator
            przetwarza dane Użytkowników przy użyciu odpowiednich środków
            technicznych i organizacyjnych spełniających wymagania przepisów
            prawa powszechnie obowiązującego. Środki te mają na celu przede
            wszystkim zabezpieczenie danych osobowych przed ich utratą,
            naruszeniem integralności danych oraz dostępem osób
            nieupoważnionych. Dostęp do danych mają jedynie osoby upoważnione,
            które są zobowiązane do zachowania tych danych w tajemnicy lub
            podmioty, którym udostępniono lub powierzono przetwarzanie danych na
            podstawie przepisu prawnego lub umowy. Dane osobowe przetwarzane są
            zgodnie z powszechnie obowiązującymi przepisami prawa, w tym przede
            wszystkim z Rozporządzeniem Parlamentu Europejskiego i Rady (UE)
            2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
            fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
            swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
            (ogólne rozporządzenie o ochronie danych) z dnia 27 kwietnia 2016 r.
            (dalej jako RODO). Administrator zastrzega sobie prawo do
            wprowadzania zmian w Polityce Prywatności. Przyczyną zmian mogą być́
            rozwój technologii internetowej, zmiany w powszechnie obowiązującym
            prawie czy też rozwój strony poprzez np. korzystanie z nowych
            narzędzi przez Administratora. Aktualizacja Polityki zostanie
            oznaczona na stronie. Wszelkie pytania, wnioski i uwagi dotyczące
            ochrony prywatności prosimy kierować na adres e-mail:{" "}
            <a href="https://turbohydraulik.pl/">kontakt@turbohydraulik.pl</a>{" "}
          </Typography>

          <Typography
            variant="h6"
            mt={4}
            fontWeight="bold"
            color={theme.palette.secondary.main}
            gutterBottom
          >
            § 2
          </Typography>
          <Typography>
            W czasie przetwarzania danych osobowych Administrator stosuje
            następujące zasady:
          </Typography>
          <Typography>
            W czasie przetwarzania danych osobowych Administrator stosuje
            następujące zasady: Przetwarzanie danych osobowych może się odbywać
            wyłącznie, gdy zaistnieje co najmniej jedna z przewidzianych prawem
            przesłanek. Aby dane mogły być przetwarzane, musi istnieć ku temu
            konkretny, wyraźny i prawnie uzasadniony cel. Jeżeli przetwarzanie
            służy różnym celom, potrzebna jest podstawa obejmująca wszystkie
            cele Przetwarzamy tylko te dane, które są niezbędne ze względu na
            cel ich zbierania; Administrator jest zobowiązany do tego, aby dane
            przez niego zbierane były poprawne i w razie potrzeby uaktualniane.
            Powinien oceniać wiarygodność źródła pozyskania danych oraz wdrożyć
            sposób weryfikowania prawdziwości przetwarzanych danych; Nie
            przetwarzamy danych dłużej, niż jest to konieczne. W praktyce
            Administrator dokonuje indywidualnej, konkretnej oceny, przez jaki
            okres powinien przetwarzać dane osobowe. Okres przechowywania jest
            uzależniony od wielu zmiennych Dane osobowe są zabezpieczone za
            pomocą odpowiednich środków technicznych i organizacyjnych.
            Administrator dokłada najwyższej możliwej staranności, by chronić
            przekazane informacje przed wszelkimi zagrożeniami.
          </Typography>

          <Typography
            variant="h6"
            mt={4}
            fontWeight="bold"
            color={theme.palette.secondary.main}
            gutterBottom
          >
            § 3
          </Typography>
          <Typography>
            Zgodnie ze wskazanymi powyżej zasadami, przetwarzanie danych
            osobowych może się odbywać wyłącznie, gdy zaistnieje co najmniej
            jedna z przewidzianych prawem przesłanek. Administrator będzie
            uprawniony do przetwarzania danych osobowych, jeśli wystąpi jedna z
            przedstawionych sytuacji: przetwarzanie jest niezbędne do wykonania
            umowy, której stroną jest osoba, której dane dotyczą lub do podjęcia
            działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy
            (art. 6 ust. 1 lit. b RODO). Na tej podstawie Administrator będzie
            przetwarzać dane osobowe w szczególności w celu świadczenia usług, w
            tym drogą elektroniczną; przetwarzanie jest niezbędne do wypełnienia
            obowiązku prawnego ciążącego na Administratorze (art. 6 ust. 1 lit.
            c RODO). Na tej podstawie Administrator będzie przetwarzać dane
            osobowe w szczególności w celu wystawienia faktur, spełnienia
            obowiązków rachunkowych; przetwarzanie jest niezbędne do celów
            wynikających z prawnie uzasadnionych interesów realizowanych przez
            Administratora (art. 6 ust. 1 lit. f RODO). Na tej podstawie
            Administrator będzie przetwarzać dane osobowe w szczególności w celu
            dochodzenia roszczeń, prowadzenia statystyk, badania rynku,
            nawiązywania kontaktu z potencjalnymi Partnerami.
          </Typography>

          <Typography
            variant="h6"
            mt={4}
            fontWeight="bold"
            color={theme.palette.secondary.main}
            gutterBottom
          >
            § 4
          </Typography>
          <Typography>
            Administrator przetwarza następujące kategorie danych osobowych:
            Dane osobowe Klientów (tj. osób składający za pośrednictwem serwisu
            zlecenie). Dane te Administrator przetwarza w celu świadczenia usług
            drogą elektroniczną (przyjęcie zlecenia, przekazanie zlecenia
            Partnerowi, pozostałe czynności związane z pośrednictwem i jego
            rozliczeniem, w tym weryfikacja wykonania zlecenia, procedura
            reklamacyjna). Dane osobowe obejmować będą wszelkie informacje
            uzyskane w związku ze świadczeniem przez Administratora usług
            pośrednictwa, a to w szczególności numer telefonu oraz dane
            przekazane podczas rejestrowanej rozmowy telefonicznej, a także, w
            przypadku przeprowadzenia procedury reklamacyjnej mogą obejmować
            imię, nazwisko, adres zamieszkania, adres poczty elektronicznej.
            Podanie danych osobowych jest zawsze dobrowolne. Wskazane informacje
            są jednak niezbędne w procesie przekazywania zlecenia Partnerowi.
            Dane osobowe są przetwarzane przez czas niezbędny do prawidłowego
            wykonania umowy lub świadczonej usługi. Administrator przestaje
            przetwarzać dane osobowe, gdy wygasną wszelkie uzasadnione
            powinności i ryzyka (w szczególności, gdy upłynie okres
            przedawnienia danych roszczeń, obowiązki wynikające z przepisów
            prawa). Dane Partnerów (niezależnych od Administratora podmiotów,
            oferujących usługi określonego rodzaju, na rzecz których
            przekazywane są zlecenia sformułowane przez Klientów). Dane osobowe
            będą przetwarzane przez Administratora w celu nawiązania kontaktu,
            zawarcia umowy, jej realizacji oraz jej rozliczenia. Zakres
            przetwarzania danych (zakres maksymalny) obejmuje: imię i nazwisko,
            adres poczty elektronicznej, numer telefonu kontaktowego, dane
            identyfikujące działalność gospodarczą (nazwa firmy, numer
            identyfikacji podatkowej NIP, adres prowadzonej
            działalności/siedziby). Dane osobowe są przetwarzane przez czas
            niezbędny do prawidłowego wykonania umowy lub świadczonej usługi.
            Administrator przestaje przetwarzać dane osobowe, gdy wygasną
            wszelkie uzasadnione powinności i ryzyka (w szczególności, gdy
            upłynie okres przedawnienia danych roszczeń, obowiązki wynikające z
            przepisów prawa).
          </Typography>

          <Typography
            variant="h6"
            mt={4}
            fontWeight="bold"
            color={theme.palette.secondary.main}
            gutterBottom
          >
            § 5
          </Typography>
          <Typography>
            Administrator wykorzystuje dane osobowe w celu, dla którego zostały
            pozyskane. Ponadto, dane mogą zostać wykorzystane do celów
            wynikających z prawnie uzasadnionych interesów realizowanych przez
            Administratora, takich jak: wykrywanie nadużyć i zapobieganie im,
            ustalanie, obrona i dochodzenie roszczeń, tworzenia zestawień,
            analiz i statystyk, badanie rynku. Przetwarzane dane osobowe nigdy
            nie trafią w niepowołane ręce. Nie będą przedmiotem obrotu. Mogą
            natomiast zostać przekazane: partnerom (w odniesieniu do danych
            osobowych Klientów), co jest istotą świadczonej przez Administratora
            usługi; podmiotom/organom upoważnionym na podstawie przepisów prawa;
            podmiotom, którym przekazanie danych osobowych jest niezbędne dla
            realizacji określonej czynności (np. obsługa księgowa, obsługa
            informatyczna, obsługa teleinformatyczna, hosting). Wszystkie
            podmioty, które mogą mieć styczność z danymi osobowymi, na mocy
            odrębnych uregulowań, zostały zobowiązane do ich starannego
            zabezpieczenia, zachowania w poufności, nieudostępniania osobom
            nieupoważnionym. Administrator nie stosuje zautomatyzowanego
            profilowania. Dane osobowe nie będą przetwarzane poza terenem EOG
            (Europejskiego Obszaru Gospodarczego).
          </Typography>

          <Typography
            variant="h6"
            mt={4}
            fontWeight="bold"
            color={theme.palette.secondary.main}
            gutterBottom
          >
            § 6
          </Typography>
          <Typography>
            Zasadą jest, że osoby, których dane są przetwarzane, mają prawo do
            dostępu do treści swoich danych i ich sprostowania, usunięcia swoich
            danych, ograniczenia przetwarzania danych osobowych, przenoszenia
            danych lub uzyskania ich kopii, cofnięcia zgody w dowolnym momencie
            bez wpływu na zgodność z prawem przetwarzania, wniesienia sprzeciwu
            co do przetwarzania danych osobowych. Szczegółowe warunki
            wykonywania wskazanych wyżej praw wskazane są w art. 15-21 RODO. W
            celu realizacji opisanych uprawnień należy skontaktować się pod
            adresem poczty elektronicznej:{" "}
            <a href="https://turbohydraulik.pl/">kontakt@turbohydraulik.pl</a>{" "}
            Każdy wniosek zostanie rzetelnie rozpoznany przez Administratora i
            spotka się z odpowiedzią. Opisane powyżej uprawnienia nie mają
            charakteru absolutnego (w praktyce więc może się zdarzyć, że pomimo
            otrzymania żądania, Administrator nie będzie mógł np. usunąć danych,
            ponieważ, zgodnie z literą prawa, ich przetwarzanie będzie nadal
            konieczne). Osobom, których dane dotyczą, przysługuje również prawo
            wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, w
            szczególności, gdy przetwarzanie danych osobowych narusza przepisy
            RODO.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default PolicyPage;
