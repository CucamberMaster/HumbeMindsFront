import Inputs from "./Inputs";
import {AudienceModel} from "../../features/audience/audienceModel";

type Props = {
    onSubmit: (data: AudienceModel) => void;
};

function AudienceForm ({ onSubmit }: Props) {

    return (
        <>
            <h1> What is Your Audience?</h1>
            <div className="  text-center p-4 ">
                <Inputs onSubmit={onSubmit}/>
            </div>
        </>
    )
}

export default AudienceForm
