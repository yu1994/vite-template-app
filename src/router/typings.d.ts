import 'vue-router';

declare module 'vue-router'{
  interface RouteMeta {
    keepalive?: boolean;
    title: string;
    include?: Array<string>
  }
}
