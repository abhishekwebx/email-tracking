export const openPixel = (emailId: string) => {
  return `
    <img 
      src="/api/open?id=${emailId}"
      width="1"
      height="1"
      style="display:none"
    />
  `
}
