import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux';
import { useCallback, useEffect } from 'react';

export const useFetchData = (actionCreator: CallableFunction, dependencies: any[] = []) => {
  const dispatch = useDispatch<AppDispatch>();

  const fetchData = useCallback(() => {
    dispatch(actionCreator());
  }, [dispatch, actionCreator]);

  useEffect(() => {
    fetchData();
  }, [fetchData, ...dependencies]);
};
