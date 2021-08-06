import ResumePDF from "resume/ResumePDF"
import "resume/ResumePage.css"
import { Button } from "semantic-ui-react"
import { Link } from "react-router-dom"
import resume from "resources/resume2021.pdf"

export default function ResumePage() {

    return (
        <div style={{ width: "100%" }}>

            <Button className="DownloadButton" as={Link} to={resume} download target="_blank">Download PDF</Button>
            <ResumePDF />

        </div>
    )
}
