export const formatLargeNumber = (num: number) => {
  if (num < 1000) return `$${num}`;
  
  const units = ["", "K", "M", "B", "T"]; // Thousand, Million, Billion, Trillion
  let unitIndex = 0;
  
  while (num >= 1000 && unitIndex < units.length - 1) {
      num /= 1000;
      unitIndex++;
  }
  
  return `$${num % 1 === 0 ? num.toFixed(0) : num.toFixed(2)}${units[unitIndex]}`;
}