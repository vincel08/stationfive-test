export const getDisabledMenus = (
  selectedMenus: Record<string, string>,
  rules: any
) => {
  const options = Object.values(selectedMenus)
  let disabledOptions: number[] = []

  options.forEach((option) => {
    disabledOptions = disabledOptions.concat(rules[option])
  })

  return disabledOptions
}
