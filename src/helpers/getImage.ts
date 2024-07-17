export function getImageUrl(name: string | undefined) {
   if (!name) return;
   return new URL(`../assets/image/${name}`, import.meta.url).href;
}
