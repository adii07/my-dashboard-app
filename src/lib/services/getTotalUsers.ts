export function getTotalUsers(): Promise<{totalUser:number}> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({totalUser:12456});
    }, 800); 
  });
}
