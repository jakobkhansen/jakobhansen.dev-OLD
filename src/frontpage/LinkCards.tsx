import { withRouter } from "react-router";
import { Card, Grid, Image } from "semantic-ui-react";

function LinkCards(props: any) {

    return (
        <Grid centered style={{ marginTop: "50px" }}>
            <Card.Group centered>
                <LinkCard title="About Me" description="Click to learn more about me" link="/aboutme" image="handwave.png" history={props.history} />
                <LinkCard title="Projects and experience" description="Click to see my relevant experience and projects" link="/projects" image="hackerguy.webp" history={props.history} />
                <LinkCard title="Resume" description="Click to see my resume" link="/resume" image="resume.jpg" history={props.history} />
            </Card.Group>
        </Grid>
    )
}

function LinkCard(props: { title: string, description : string, link: string, image: string, history: any }) {

    let image = require(`resources/${props.image}`).default

    let handleItemClick = (e: any, data: any) => {
        props.history.push(props.link);
    };

    return (
        <Card style={{margin:"2em"}} onClick={handleItemClick}>
            <Image src={image} />
            <Card.Content>
                <Card.Header>{props.title}</Card.Header>
                <Card.Description>{props.description}</Card.Description>
            </Card.Content>
        </Card>
    )

}

export default withRouter(LinkCards)
