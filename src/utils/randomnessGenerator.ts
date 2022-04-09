export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

export function randomPick(choices: string[]): string {
  const max = choices.length;
  const choice = choices[randomNumber(0, max)];
  return choice;
}
