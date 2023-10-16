import { useMutation } from '@tanstack/react-query';
import { postAxios } from '../../axios/generic-api-calls';
import { AudienceModel } from './audienceModel';

export function useFetchAudience(data: AudienceModel, key:string = 'audience') {
    const mutation = useMutation(

        async () => {
        return await postAxios('/audience', data);
    });

    return {
        mutate: mutation.mutate,
        isLoading: mutation.isLoading,
        isError: mutation.isError,
        error: mutation.error,
    };
}
