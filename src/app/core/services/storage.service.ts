import { Injectable } from '@angular/core';

const STORAGE_KEY = 'store';

@Injectable()
export class StorageService {
  public set(key: string, value: any): void {
    const storage: { [key: string]: unknown } = this.getStorage();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storage ? { ...storage, [key]: value } : { [key]: value }));
  }

  public get(key: string): any {
    const storage: { [key: string]: any } = this.getStorage();
    if (storage) {
      return storage[key];
    }
  }

  public clear(): void {
    localStorage.setItem(STORAGE_KEY, '');
  }

  private getStorage(): { [key: string]: any } {
    const storage: string | null = localStorage.getItem(STORAGE_KEY);
    return storage ? JSON.parse(storage) : {};
  }
}
