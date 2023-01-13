import { useState, useEffect } from "react";
const Memos = ({ state }) => {
    const [memos, setMemos] = useState([]);
    const { contract } = state;

    useEffect(() => {
        const memosMessage = async () => {
            const memos = await contract.getMemos();
            setMemos(memos);
        };
        contract && memosMessage();
    }, [contract]);

    return (
        <>
            <p style={{ textAlign: "center", marginTop: "20px" }} className="msg">Messages</p>
            <table
                style={{
                    marginBottom: "10px",
                }}
            >
                <tbody>
                    <tr className="table__heading__text">
                        <th
                            style={{


                                padding: "7px",
                                width: "100px",
                            }}
                        >Name</th>
                        <th
                            style={{


                                padding: "7px",
                                width: "800px",
                            }}
                        >Date & Time</th>
                        <th
                            style={{


                                padding: "7px",
                                width: "300px",
                            }}
                        >Message</th>
                        <th
                            style={{


                                padding: "7px",
                                width: "400px",
                            }}
                        >Address</th>
                    </tr>
                </tbody></table>
            {memos.map((memo) => {
                return (
                    <div
                        className="container-fluid"
                        style={{ width: "100%" }}
                        key={Math.random()}
                    >
                        <div class="table-responsive ">
                            <table
                                style={{
                                    marginBottom: "10px",
                                }}
                            >
                                <tbody>


                                    <tr>
                                        <td
                                            style={{

                                                border: "1px solid #50caf5",
                                                borderCollapse: "collapse",
                                                padding: "7px",
                                                width: "100px",
                                                background:"#e4f8ff"
                                            }}
                                        >
                                            {memo.name}
                                        </td>
                                        <td
                                            style={{

                                                border: "1px solid #50caf5",
                                                borderCollapse: "collapse",
                                                padding: "7px",
                                                width: "800px",
                                                background:"#e4f8ff"
                                            }}
                                        >
                                            {new Date(memo.timestamp * 1000).toLocaleString()}
                                        </td>
                                        <td style={{

                                            border: "1px solid #50caf5",
                                            borderCollapse: "collapse",
                                            padding: "7px",
                                            width: "300px",
                                            background:"#e4f8ff"
                                        }}
                                        >
                                            {memo.message}
                                        </td>
                                        <td
                                            style={{

                                                border: "1px solid #50caf5",
                                                borderCollapse: "collapse",
                                                padding: "7px",
                                                width: "400px",
                                                background:"#e4f8ff"
                                            }}
                                        >
                                            {memo.from}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            })}
        </>
    );
};
export default Memos;
