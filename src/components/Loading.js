import "./styles/loading.css";

import { TailSpin } from "react-loader-spinner";

const Loading = ({ timeout }) => {

    return (
        <div className="spinnerLocation">
            <TailSpin
                color="#FFFFFF"
                height={70}
                width={70}
                timeout={timeout}
            />
        </div>
    );
}

export default Loading;
