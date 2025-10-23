import { useEffect, useRef } from "react";
import"./index.scss";

/** Display the logs of player and enemy actions.
 * @param {object} LogBoxProps
 * @param {Array.string} LogBoxProps.arrayLogs Logged actions arrays.
 */
export function LogBox({arrayLogs}) {
    const logEndRef = useRef(null);

    useEffect(() => {
        logEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [arrayLogs]);

    return (
        <div className="logbox-container">
            <ul className="logcontent">
                {arrayLogs.map((log, index) => {
                    return (
                        <>
                            <li key={index} className="logline">{log}</li>
                            <hr className="vidule" />
                        </>
                    )
                })}
                <div className="logbox-scroll-anchor" ref={logEndRef} />
            </ul>
        </div>
    );
}