export const scrollToSection = (
  sectionId: string,
  extraScrollOffset?: boolean
) => {
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    sectionElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    if (extraScrollOffset) {
      window.scrollBy(0, -450);
    } else {
      window.scrollBy(0, -250);
    }
  }
};
