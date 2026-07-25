import { useState } from "react";
import API from "../services/api";

function MissionForm({ setResponse }) {

    const [mission, setMission] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {

        e.preventDefault();

        if (!mission.trim()) {
            alert("Please enter a startup idea.");
            return;
        }

        setLoading(true);

        try {

            const res = await API.post("/mission", {
                mission: mission
            });

            setResponse(res.data.data);

        } catch (err) {

            console.log(err);

            setResponse("Unable to connect to backend.");

        }

        setLoading(false);
    }

    return (

        <form
            onSubmit={handleSubmit}
            style={{
                marginTop: "40px"
            }}
        >

            <textarea

                rows="6"

                value={mission}

                onChange={(e) => setMission(e.target.value)}

                placeholder="Describe your startup idea..."

                style={{
                    width: "100%",
                    padding: "15px",
                    borderRadius: "10px",
                    fontSize: "16px",
                    background: "#1e293b",
                    color: "white",
                    border: "1px solid #444"
                }}

            />

            <button

                type="submit"

                style={{
                    marginTop: "20px",
                    width: "100%",
                    padding: "15px",
                    background: "#3b82f6",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: "18px"
                }}

            >

                {loading ? "Generating..." : "Generate Startup Plan"}

            </button>

        </form>

    );

}

export default MissionForm;