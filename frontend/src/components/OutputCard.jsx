import ReactMarkdown from "react-markdown";

function OutputCard({ response }) {

    if (!response) return null;

    return (

        <div
            style={{
                marginTop: "30px",
                background: "#1e293b",
                padding: "20px",
                borderRadius: "10px"
            }}
        >

            <ReactMarkdown>
                {response}
            </ReactMarkdown>

        </div>

    );

}

export default OutputCard;