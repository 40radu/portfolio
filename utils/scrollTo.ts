export function scrollTo(id: string) {
  const element = document.querySelector(`#${id}`)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }
}