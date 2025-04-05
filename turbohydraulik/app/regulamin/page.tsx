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
          § 1. Definicje
        </Typography>
        <Typography>
          Usługa świadczona drogą elektroniczną – usługa świadczona bez
          jednoczesnej obecności stron, której wykonanie polega na nawiązaniu
          kontaktu na indywidualne żądanie usługobiorcy za pomocą systemów
          teleinformatycznych, przy czym dane te są transmitowane za
          pośrednictwem sieci publicznych w rozumieniu prawa
          telekomunikacyjnego.
        </Typography>
        <Typography>
          System teleinformatyczny – zespół współpracujących ze sobą urządzeń
          informatycznych i oprogramowania, zapewniający przetwarzanie i
          przechowywanie, a także odbieranie i wysyłanie danych przez sieci
          telekomunikacyjne za pomocą właściwego dla danego rodzaju sieci
          urządzenia końcowego w rozumieniu prawa telekomunikacyjnego.
        </Typography>
        <Typography>
          Prawo telekomunikacyjne – ustawa z dnia 16 lipca 2004 r. – Prawo
          telekomunikacyjne (Dz. U. nr 171, poz. 1800 z późn. zm.).
        </Typography>
        <Typography>
          Operator serwisu – REVELE Spółka z ograniczoną odpowiedzialnością z
          siedzibą w Katowicach (40-014) przy ulicy Mariackiej 37, który
          świadczy usługę drogą elektroniczną na rzecz Klientów i Partnerów w
          ramach pośrednictwa w przekazywaniu Zleceń od Klientów do Partnerów.
        </Typography>
        <Typography>
          Klient – osoba fizyczna, osoba prawna lub podmiot nieposiadający
          osobowości prawnej, składający za pośrednictwem serwisu Zlecenie lub
          Zlecenia.
        </Typography>
        <Typography>
          Konsument – osoba fizyczna dokonująca czynności prawnej niezwiązanej
          bezpośrednio z jej działalnością gospodarczą lub zawodową.
        </Typography>
        <Typography>
          Zlecenie – zlecenie świadczenia usługi na rzecz Klienta przez
          Partnera; Numer zlecenia – unikalny numer nadawany każdemu Zleceniu
          przez Operatora serwisu w momencie potwierdzenia przez Partnera
          przyjęcia Zlecenia
        </Typography>
        <Typography>
          Ocena zlecenia – ocena przez Partnera na miejscu realizacji zlecenia
          zakresu prac oraz ich faktycznego kosztu.
        </Typography>
        <Typography>
          Partner – niezależny od Operatora serwisu podmiot będący osobą
          fizyczną, osobą prawną lub jednostką nieposiadającą osobowości
          prawnej, który świadczy usługi, w tym w szczególności drobne usługi
          naprawcze, remontowe, serwisowe lub inne, któremu Operator serwisu
          przekazuje Zlecenia oraz Zlecenia pilne.
        </Typography>
        <Typography>
          Umowa – umowa w postaci ustnej lub pisemnej zawierana między Klientem
          i Partnerem, w której Operator serwisu nie występuje jako strona,
          dotycząca realizacji usługi naprawy, instalacji, montażu, przeglądu,
          konserwacji, przeprowadzenia drobnych prac remontowych lub innych
          usług świadczonych przez Partnera, w związku z przekazanym przez
          Operatora serwisu Zleceniem.
        </Typography>

        <Typography
          variant="h6"
          fontWeight="bold"
          mt={4}
          color={theme.palette.secondary.main}
        >
          § 2. Postanowienia ogólne
        </Typography>
        <Typography>
          Niniejszy Regulamin określa warunki i zasady pośrednictwa w
          przekazywaniu zleceń Klientów do Partnerów. Operator serwisu
          pośredniczy w przekazywaniu zleceń Klientów do Partnerów.
        </Typography>
        <Typography>
          Klient dokonując połączenia telefonicznego z Partnerem za
          pośrednictwem numeru telefonu zarządzanego przez Operatora serwisu,
          oświadcza, że akceptuje niniejszy Regulamin.
        </Typography>

        <Typography
          variant="h6"
          fontWeight="bold"
          mt={4}
          color={theme.palette.secondary.main}
        >
          § 3. Komunikacja z Klientem, proces przekazywania zleceń oraz ich
          realizacji
        </Typography>
        <Typography>
          Operator serwisu pośredniczy w nawiązywaniu kontaktu między Klientem a
          Partnerem. Klient za pośrednictwem udostępnionych przez Operatora
          Serwisu numerów telefonicznych dokonuje bezpośredniego kontaktu z
          Partnerem. Klient może dokonać Zlecenia za pośrednictwem formularza
          kontaktowego umieszczonego na stronie internetowej Operatora lub też
          za pośrednictwem poczty elektronicznej. W tym przypadku Zlecenie
          przekazywane jest do Partnera poprzez Operatora Serwisu. Partner
          wybierany jest losowo przez system Operatora Serwisu przy
          uwzględnieniu ocen wystawianych przez Klientów Partnerom. Operator
          Serwisu nie uczestniczy czynnie w ustaleniach dokonywanych przez
          Klienta i Partnera. Podczas przyjęcia Zlecenia, Operator serwisu
          przyjmuje dane niezbędne do realizacji Zlecenia, w szczególności dane
          osobowe Klienta, przetwarza te dane oraz przekazuje je do właściwego
          Partnera lub Partnerów (według uznania Operatora serwisu), ich
          pracowników lub podwykonawców. Operator serwisu może bez podania
          przyczyny odmówić przyjęcia Zlecenia od Klienta lub odwołać realizację
          już przyjętego Zlecenia. W obu przypadkach Operator serwisu informuje
          o tym Klienta telefonicznie. Wszelkie kwestie związanie z realizacją
          zlecenie ustalane są bezpośrednio między Klientem a Partnerem.
          Operator Serwisu zastrzega sobie prawo do kontaktowania się z Klientem
          telefonicznie czy też za pośrednictwem wiadomości SMS lub poczty
          elektronicznej w imieniu Partnera w celach niezbędnych do realizacji
          Zlecenia, a także w zakresie uzyskania opinii związanej z realizacją
          Zlecenia przez Partnera. Operator Serwisu informuje, że prowadzi
          rejestr Klientów, którzy w sposób nienależyty realizowali obowiązki
          leżące po ich stronie, a to w szczególności utrudniali lub
          uniemożliwiali realizację zlecenia przez Partnera. W takim przypadku
          kolejne dokonanie Zlecenia przez danego Klienta będzie niemożliwe.
        </Typography>

        <Typography
          variant="h6"
          fontWeight="bold"
          mt={4}
          color={theme.palette.secondary.main}
        >
          § 4. Odpowiedzialność
        </Typography>
        <Typography>
          Operator serwisu nie jest stroną umowy między Klientem a Partnerem,
          której przedmiotem jest realizacja prac objętych Zleceniem i nie
          ponosi odpowiedzialności za jakiekolwiek czynności wykonane lub
          niewykonane w ramach zlecenia przez Klienta, jak i przez Partnera oraz
          za utracone korzyści przez Klienta, jak i przez Partnera.
        </Typography>
        <Typography>
          Operator serwisu nie ponosi odpowiedzialności za jakiekolwiek przerwy
          w świadczeniu usługi drogą elektroniczną, wynikające z awarii lub
          niewłaściwego funkcjonowania systemów teleinformatycznych, które są
          poza wpływem Operatora serwisu. W przypadku rezygnacji przez Klienta
          zlecenia wykonania usługi konkretnemu Partnerowi lub też anulowania
          Zlecenia przez Partnera, Operator Serwisu wskazuje, iż na życzenie
          Klienta podejmie kroki w celu zapewnienia mu kontaktu z innym
          Partnerem.
        </Typography>

        <Typography
          variant="h6"
          fontWeight="bold"
          mt={4}
          color={theme.palette.secondary.main}
        >
          § 5. Postępowanie reklamacyjne Klient – Partner
        </Typography>
        <Typography>
          Operator serwisu nie rozpatruje reklamacji dotyczących działań
          Partnerów. Podmiotem wyłącznie odpowiedzialnym za tego rodzaju
          reklamacje pozostaje Partner. Klient może wnieść reklamację m.in. w
          następujący sposób bezpośrednio u Partnera tj. telefonicznie na numer
          telefonu, z którego Partner kontaktował się po otrzymaniu Zlecenia za
          pośrednictwem Operatora serwisu na adres e-mail kontakt@fachowca.pl Po
          otrzymaniu reklamacji Operator Serwisu przekazuje ją Partnerowi.
        </Typography>

        <Typography
          variant="h6"
          fontWeight="bold"
          mt={4}
          color={theme.palette.secondary.main}
        >
          § 6. Postępowanie reklamacyjne Klient – Operator serwisu
        </Typography>
        <Typography>
          Operator serwisu ponosi odpowiedzialność za działanie serwisu oraz za
          prawidłowe wykonanie czynności objętych niniejszym Regulaminem. Klient
          ma prawo do złożenia reklamacji. Zaleca się, by reklamacje były
          kierowane na adres tradycyjny tj. ul. Mariacka 37, 40-014 Katowice lub
          za pośrednictwem poczty elektronicznej kontakt@fachowca.pl. W celu
          usprawnienia procesu rozpoznania reklamacji zaleca się, by zgłoszenie
          reklamacyjne zawierało następujące dane: imię i nazwisko; numer
          telefonu; datę Zlecenia; opis problemu; żądanie Klienta; oczekiwany
          sposób udzielenia odpowiedzi: adres do korespondencji lub adres poczty
          elektronicznej. Przedstawienie powyższych danych nie jest warunkiem
          przyjęcia reklamacji do rozpoznania. Ich podanie przyspieszy
          udzielenie odpowiedzi. Operator serwisu rozpatrzy reklamację
          niezwłocznie, nie później niż w terminie 14 dni. O sposobie
          rozpatrzenia reklamacji Klient zostanie poinformowany zgodnie z danymi
          wskazanymi w zgłoszeniu reklamacji.
        </Typography>

        <Typography
          variant="h6"
          fontWeight="bold"
          mt={4}
          color={theme.palette.secondary.main}
        >
          § 7. Publikowanie opinii
        </Typography>
        <Typography>
          Operator Serwisu umożliwia użytkownikom zamieszczanie na stronach
          serwisu opinii na temat Partnerów. Przed opublikowaniem ich w
          serwisie, są one moderowane przez Operatora Serwisu pod kątem
          obecności w nich treści naruszających dobre obyczaje, wulgaryzmów,
          treści rasistowskich, ksenofobicznych, pomówień oraz innych określeń
          naruszających dobra osobiste jakichkolwiek osób. Operator Serwisu ma
          prawo nie publikować opinii, które uzna za zawierające powyższe
          treści. Opinie opublikowane na stronach serwisu nie są w jakikolwiek
          sposób weryfikowane przez Operatora pod kątem ich prawdziwości w
          zakresie związanym z realizacją Zlecenia i nie powinny być dla Klienta
          podstawą do wyboru Partnera jako podmiotu, do którego będzie
          przekazane zlecenie. Operator serwisu ma prawo publikować własne
          opinie na temat Partnerów.
        </Typography>

        <Typography
          variant="h6"
          fontWeight="bold"
          mt={4}
          color={theme.palette.secondary.main}
        >
          § 8. Polubowne sposoby rozpatrywania reklamacji i dochodzenia roszczeń
        </Typography>
        <Typography>
          Skorzystanie z pozasądowych sposobów rozpatrywania reklamacji i
          dochodzenia roszczeń ma charakter dobrowolny. Konsument posiada między
          innymi następujące możliwości skorzystania z pozasądowych sposobów
          rozpatrywania reklamacji i dochodzenia roszczeń: Zwrócenie się do
          wojewódzkiego inspektora Inspekcji Handlowej z wnioskiem o wszczęcie
          postępowania mediacyjnego w sprawie polubownego zakończenia sporu.
          Informacje dotyczące procedury mediacyjnej znajdują się w siedzibach
          oraz na stronach internetowych poszczególnych Wojewódzkich
          Inspektoratów Inspekcji Handlowej; Zwrócenie się do stałego
          polubownego sądu konsumenckiego działającego przy wojewódzkim
          inspektorze Inspekcji Handlowej z wnioskiem o rozstrzygnięcie sporu
          wynikłego z zawartej umowy; Zwrócenie się o bezpłatną pomoc prawną do
          miejskiego lub powiatowego rzecznika konsumentów bądź organizacji
          społecznej, do której zadań statutowych należy ochrona konsumentów,
          m.in. Federacji Konsumentów – adres strony internetowej:
          www.federacjakonsumentow.org.pl. Chcąc skorzystać z możliwości
          polubownego rozwiązywania sporów dotyczących zakupów internetowych,
          Konsument może złożyć swoją skargę np. za pośrednictwem unijnej
          platformy internetowej ODR, dostępnej pod adresem: Online Dispute
          Resolution | European Commission Szczegółowe informacje o pozasądowych
          sposobach rozwiązywania sporów pomiędzy Sprzedającym a Konsumentem
          można znaleźć na stronie internetowej Urzędu Ochrony Konkurencji i
          Konsumentów pod adresem: Pomoc dla konsumentów .
        </Typography>
        <Typography
          variant="h6"
          fontWeight="bold"
          mt={4}
          color={theme.palette.secondary.main}
        >
          § 9. Ochrona danych osobowych
        </Typography>
        <Typography>
          1. Administratorem danych osobowych Klientów, w zakresie związanym z
          działaniem serwisu jest REVELE Spółka z ograniczoną odpowiedzialnością
          z siedzibą w Katowicach (40-014) przy ulicy Mariackiej 37.
          <br /> <br /> 2. Dane osobowe są przetwarzane na podstawie
          Rozporządzenia Parlamentu Europejskiego i Rady (UE) nr 2016/679 z dnia
          27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
          przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
          takich danych oraz uchylenia dyrektywy 95/46/WE.
          <br /> <br /> 3. Szczegółowe informacje na temat ochrony danych
          osobowych (w tym informacje o podstawach, celach, zakresach
          przetwarzania, kategoriach podmiotów, którym dane mogą być powierzone,
          prawach osób, których dane są przetwarzane) zawarte są w dokumencie
          „Polityka prywatności”, który dostępny jest pod adresem
          https://turbohydraulik.pl/polityka/.
        </Typography>
      </Container>
      <Footer />
    </Box>
  );
};

export default TermsPage;
