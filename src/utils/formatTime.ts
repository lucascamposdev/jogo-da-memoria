const formatTime = (time: number): string => {
    const minutes: number = Math.floor(time / 60);
    const seconds: number = time % 60;
  
    const formattedMinutes: string = String(minutes)
    const formattedSeconds: string = String(seconds).padStart(2, '0');
  
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  export default formatTime