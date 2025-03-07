export const scrollToSection = (sectionId: string) => {
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    sectionElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
