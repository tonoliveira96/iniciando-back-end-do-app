export default interface ICacheProvider {
  save(key: string, vaue: string): Promise<void>;
  recorver(key: string): Promise<string | null>;
  invalidate(key: string): Promise<void>;
}
