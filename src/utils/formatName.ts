function formatName(name: string): string {
    const words = name.split(' ');
  
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
    const capitalizedName = capitalizedWords.join(' ');
  
    return capitalizedName;
  }

  export default formatName