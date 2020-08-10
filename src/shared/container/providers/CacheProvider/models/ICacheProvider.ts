export default interface ICacheProvider {
  save(key: string, vaue: any): Promise<void>;
  recorver<T>(key: string): Promise<T | null>;
  invalidate(key: string): Promise<void>;
}
