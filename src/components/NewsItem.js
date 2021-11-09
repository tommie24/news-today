import {Badge, Card, CardBody, CardText, CardTitle} from "reactstrap";

export default ({data,handleShowDetails}) => {
    return <Card onClick={()=>handleShowDetails(data)} className="mt-3">
        <div className="d-flex ">
            {data.media.length > 0 &&
            <img
                alt="Card image cap"
                src={data.media[0]['media-metadata'][0]['url']}
                width="15%"
                height="100%"
            />}
            <CardBody>
                <CardTitle tag="h5">
                    {data.title}
                </CardTitle>
                <Badge color='primary'>
                    {data.source}
                </Badge>
                <br/>
                <CardText className="mb-2 text-muted fst-italic" tag="span">
                    {data.byline} - Published On: {data.published_date}
                </CardText>
            </CardBody>
        </div>
    </Card>
}