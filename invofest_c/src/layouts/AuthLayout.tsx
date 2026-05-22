import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return(
        <div className="grid grid-cols-2 items-center min-h-screen">
            {/*kiri*/}
            <div className="bg-gray-50 h-screen flex flex-col items-center justify-center">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  className="w-96"
                />
            </div>

            {/*kanan*/}
            <div>
                <Outlet />
            </div>
        </div>
    );
}