import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react';
import { renderHook } from '@testing-library/react';

import { useTrans } from './trans.hook';

jest.mock('@lingui/react');
jest.mock('@lingui/core/macro');

describe('useTrans hook', () => {
    const mockI18n = {
        _: jest.fn(),
    };

    beforeEach(() => {
        (useLingui as jest.Mock).mockReturnValue({ i18n: mockI18n });
    });

    it('should return i18n object', () => {
        const { result } = renderHook(() => useTrans());
        expect(result.current.i18n).toBe(mockI18n);
    });

    it('should return macro function', () => {
        const { result } = renderHook(() => useTrans());
        expect(result.current.macro).toBe(msg);
    });

    it('should call i18n._ with correct parameters in trans function', () => {
        const { result } = renderHook(() => useTrans());
        const id = 'test.id';
        const values = { name: 'John' };
        result.current.trans(id, values);
        expect(mockI18n._).toHaveBeenCalledWith(id, values);
    });
});
