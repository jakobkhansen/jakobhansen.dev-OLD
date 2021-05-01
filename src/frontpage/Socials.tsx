// @ts-nocheck
import headshot from 'resources/headshot.png';
import 'frontpage/Socials.css'
import { SocialIcon } from 'react-social-icons';

function Socials() {
    return (
        <div className="socialsContainer">
            <img src={headshot} className="headshot" alt="Headshot" />

            <div className="socials">
                <div className="socialsRow">
                    <SocialIcon style={{ "height": "8em", "width": "8em" }} className="socialIcon" url="https://www.github.com/jakobkhansen"/>
                    <SocialIcon style={{ "height":"8em", "width": "8em" }} className="socialIcon" url="https://www.linkedin.com/in/jakob-hansen-b1a9a5174/"   />
                </div>
                <div className="socialsRow">
                    <SocialIcon style={{ "height": "8em", "width": "8em" }} className="socialIcon" url="mailto:jakob.hansen@hotmail.no"  />
                </div>
            </div>
        </div>
    )
}


export default Socials;
