import "./styles/loading.css";

import { TailSpin } from "react-loader-spinner";

const Loading = () => {

    return (
        <div className="spinnerLocation">
            <TailSpin
                color="#FFFFFF"
                height={70}
                width={70}
            />
        </div>
    );
}

export default Loading;
