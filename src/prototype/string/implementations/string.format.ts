String.format = function(format: string, ...args: any[]): string {
  let formatted = format;

  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === 'string') {
      formatted = formatted.replace(/%s/, args[i]);
    }

    if (typeof args[i] === 'number') {
      formatted = formatted.replace(/%d/, args[i]);
    }
  }

  return formatted;
};
