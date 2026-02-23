export const openPixel = (emailId: string) => {
  return `
    <img 
      src="${process.env.NEXT_PUBLIC_BASE_URL}/api/open?id=${emailId}"
      width="1"
      height="1"
      style="display:none"
    />
  `
}
