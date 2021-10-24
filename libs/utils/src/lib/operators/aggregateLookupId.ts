import { Observable } from 'rxjs';

export const aggregateLookupId =
  <T extends Record<'id', number>>() =>
  (source: Observable<T[]>) =>
    new Observable<Record<number, T>>((observer) => {
      let recent: Record<number, T> = {};
      source.subscribe({
        next(values) {
          for (const value of values) {
            recent = {
              ...recent,
              [value.id]: value,
            };
          }
          observer.next(recent);
        },
      });
    });
