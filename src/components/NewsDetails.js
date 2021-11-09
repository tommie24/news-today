import {Button, Card, CardBody, CardText, CardTitle, CardLink, Badge} from "reactstrap";

export default ({data, handleBack}) => {
    return <>
        <Button onClick={handleBack} className="mt-3 mb-3">Back</Button>
        <Card>
            <div className="d-flex justify-content-center">
                {data.media.length > 0 &&
                <img
                    alt="Card image cap"
                    src={data.media[0]['media-metadata'][2]['url']}
                    width="30%"
                />}
            </div>
            <CardBody>
                <CardTitle tag="h5">
                    {data.title}
                </CardTitle>
                <Badge color='primary'>
                    {data.source}
                </Badge>
                <Badge color='secondary'>
                    {data.subsection}
                </Badge>
                <Badge color='success'>
                    {data.nytdsection}
                </Badge>
                <CardText
                    className="mb-2 text-muted"
                    tag="h6">
                    {data.abstract}
                </CardText>
                <CardText className="mb-2 text-muted fst-italic" tag="span">
                    {data.byline} - Published On: {data.published_date}
                </CardText>
                <br/>
                <CardLink href={data.url} rel="noopener noreferrer" target="_blank">
                    Read Full News
                </CardLink>
            </CardBody>
        </Card>
    </>
}