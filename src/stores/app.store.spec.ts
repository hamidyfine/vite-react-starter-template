import { act, renderHook } from '@/tests';

import { useAppStores } from './app.store';

describe('useAppStores Zustand Store', () => {
    it('should initialize with 0 bears', () => {
        const { result } = renderHook(() => useAppStores());
        expect(result.current.bears).toBe(0);
    });

    it('should increase the bear population by 1', () => {
        const { result } = renderHook(() => useAppStores());

        act(() => {
            result.current.increasePopulation();
        });

        expect(result.current.bears).toBe(1);
    });

    it('should reset the bear population to 0', () => {
        const { result } = renderHook(() => useAppStores());

        act(() => {
            result.current.increasePopulation();
            result.current.increasePopulation();
            result.current.removeAllBears();
        });

        expect(result.current.bears).toBe(0);
    });

    it('should update the bear population to a specific number', () => {
        const { result } = renderHook(() => useAppStores());

        act(() => {
            result.current.updateBears(5);
        });

        expect(result.current.bears).toBe(5);
    });

    it('should handle multiple updates correctly', () => {
        const { result } = renderHook(() => useAppStores());

        act(() => {
            result.current.updateBears(10);
            result.current.increasePopulation();
            result.current.increasePopulation();
            result.current.removeAllBears();
            result.current.updateBears(7);
        });

        expect(result.current.bears).toBe(7);
    });
});
