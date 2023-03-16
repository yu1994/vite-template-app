export {};

declare module 'vue' {
  interface ComponentCustomProperties {
    $currency: (val: string) => never;
  }
}
