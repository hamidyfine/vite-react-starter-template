import { TypedUseSelectorHook, useDispatch as useDispatchUntyped, useSelector as useSelectorUntyped } from 'react-redux';

import type { TAppDispatch, TRootState } from '../stores';

const useDispatch: () => TAppDispatch = useDispatchUntyped;
const useSelector: TypedUseSelectorHook<TRootState> = useSelectorUntyped;

export {
    useDispatch,
    useSelector,
};
