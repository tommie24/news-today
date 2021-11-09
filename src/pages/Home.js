import React from "react";
import {Button, Col, Container, Row} from "reactstrap";
import Api from "../services/api";
import NewsList from "../components/NewsList";
import NewsDetails from "../components/NewsDetails";

class Home extends React.Component {

  state = {
    news: [],
    newsDetails: null,
    loading: true,
    error: false,
    message: 'loading News',
    period: 7,
  }

  componentDidMount() {
    Api.getPeriod(this.state.period).then(({data})=>{
      this.setState({
        news: [...data.results],
        loading: false
      })
    }).catch(err=>{
      this.setState({message: 'Error'})
    })
  }

  handleShowDetails = data => this.setState({newsDetails: {...data} })
  handleBack = () => this.setState({newsDetails: null })

  handleNews = id => {
    this.setState({
      loading: true,
      newsDetails: null,
      message: 'loading News',
    })
    Api.getPeriod(id).then(({data})=>{
      this.setState({
        news: [...data.results],
        loading: false,
        period: id
      })
    }).catch(err=>{
      this.setState({message: 'Error'})
    })
  }

  render() {
    const {
      state:{
        loading, news, error, message, newsDetails, period
      }, handleBack,handleShowDetails,handleNews} = this
    return (
        <Container >
          <Row className="h-100">
            <Col sm={12} mb={12} xl={12}>
              {!loading ? <>
                <h1>Most Popular Articles on NY Times</h1>
                <p>News Period: {period} Day(s)</p>
                {period !== 1 && <Button onClick={()=>handleNews(1)} className="me-3">Get News period 1</Button>}
                {period !== 7 && <Button onClick={()=>handleNews(7)} className="me-3">Get News period 7</Button>}
                {period !== 30 && <Button onClick={()=>handleNews(30)} className="me-3">Get News period 30</Button>}
                <br/>
                {!newsDetails ?
                    <NewsList data={news} handleShowDetails={handleShowDetails}/>
                    :
                    <NewsDetails data={newsDetails} handleBack={handleBack}/>
                }
              </> : message}
            </Col>
          </Row>
        </Container>);
  }
}

export default Home;