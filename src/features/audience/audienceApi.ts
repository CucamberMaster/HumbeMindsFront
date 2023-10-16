import { postAxios} from "../../axios/generic-api-calls";
import {AudienceModel} from "./audienceModel";
import {useMutation} from "@tanstack/react-query";


export function useFetchAudience(key:string = 'audience') {
    const mutation =  useMutation({
    mutationFn:(data:AudienceModel) => {
        return postAxios('/audience',data)
    },
    })

}
